import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    const [buyer, setBuyer] = useState({
        nombre: "",
        email: "",
        telefono: ""
    });

    const totalUnidades = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrecio = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handleInputChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            buyer,
            items: cart.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            })),
            date: serverTimestamp(),
            total: totalPrecio
        };

        try {
            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error al guardar la orden:", error);
        }
    };

    if (orderId) {
        return (
            <div style={{ textAlign: 'center', padding: '100px' }}>
                <h1 style={{ color: '#453572' }}>¡Compra Exitosa!</h1>
                <p style={{ fontSize: '1.2rem' }}>Tu código de seguimiento es: <strong>{orderId}</strong></p>
                <div style={{ marginTop: '20px' }}>
                    <Link to="/" style={{ color: '#aa3bff', fontWeight: 'bold', textDecoration: 'none', border: '1px solid #aa3bff', padding: '10px 20px', borderRadius: '8px' }}>
                        Volver a la tienda
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', marginTop: '50px' }}>
            <h2 style={{ textAlign: 'center', color: '#453572', marginBottom: '30px' }}>Finalizar Compra</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontSize: '0.9rem', color: '#666' }}>Nombre Completo</label>
                    <input type="text" name="nombre" placeholder="Ej: Juan Pérez" onChange={handleInputChange} required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontSize: '0.9rem', color: '#666' }}>Email</label>
                    <input type="email" name="email" placeholder="email@ejemplo.com" onChange={handleInputChange} required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontSize: '0.9rem', color: '#666' }}>Teléfono</label>
                    <input type="tel" name="telefono" placeholder="11 1234-5678" onChange={handleInputChange} required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>

                <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '12px', border: '1px dashed #aa3bff' }}>
                    <p style={{ margin: '5px 0' }}>Productos: <strong>{totalUnidades} unidades</strong></p>
                    <p style={{ margin: '5px 0', fontSize: '1.2rem', color: '#453572' }}>Total a pagar: <strong>${totalPrecio}</strong></p>
                </div>

                <button type="submit" style={{ backgroundColor: '#aa3bff', color: 'white', padding: '15px', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: '0.3s' }}>
                    Confirmar y Pagar
                </button>
            </form>
        </div>
    );
};

export default Checkout;