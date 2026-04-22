import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp, doc, writeBatch, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

const Checkout = () => {
    const { cart, totalPrecio, clearCart } = useContext(CartContext);

    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        emailConfirmacion: "",
        telefono: ""
    });

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (values.email !== values.emailConfirmacion) {
            Swal.fire({ icon: 'error', title: 'Error', text: 'Los emails no coinciden' });
            return;
        }

        setLoading(true);

        const batch = writeBatch(db);
        const ordersRef = collection(db, "orders");

        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        const order = {
            buyer: values,
            items: cart.map(item => ({ id: item.id, title: item.title, price: item.price, quantity: item.quantity })),
            date: serverTimestamp(),
            total: total 
        };
        try {
            for (const item of cart) {
                const docRef = doc(db, "productos", item.id);
                const docSnap = await getDoc(docRef);
                const stockActual = docSnap.data().stock;

                batch.update(docRef, {
                    stock: stockActual - item.quantity
                });
            }

            const docResp = await addDoc(ordersRef, order);
            await batch.commit();

            Swal.fire({
                icon: 'success',
                title: '¡Compra realizada!',
                text: `Tu número de orden es: ${docResp.id}`,
                confirmButtonColor: '#aa3bff',
            });
            clearCart();

        } catch (error) {
            console.error(error);
            Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo procesar la compra' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <h2>Finalizar Compra</h2>
                <form onSubmit={handleSubmit} className="checkout-form">
                    <input type="text" placeholder="Nombre Completo" name="nombre" onChange={handleInputChange} required />
                    <input type="email" placeholder="Email" name="email" onChange={handleInputChange} required />
                    <input type="email" placeholder="Confirmar Email" name="emailConfirmacion" onChange={handleInputChange} required />
                    <input type="tel" placeholder="Teléfono" name="telefono" onChange={handleInputChange} required />

                    <button
                        type="submit"
                        className="btn-submit"
                        disabled={loading}
                    >
                        {loading ? "Procesando..." : "Confirmar y Pagar"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;