import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    if (cart.length === 0) {
        return (
            <div className="cart-empty-container">
                <div className="cart-empty-card">
                    <div className="cart-empty-icon">🛒</div>
                    <h1>Tu carrito está vacío</h1>
                    <p>Parece que aún no has agregado nada a tu carrito.</p>
                    <Link to="/" className="btn-submit" style={{ textDecoration: 'none', display: 'inline-block', width: 'auto', padding: '12px 40px' }}>
                        Volver a la tienda
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ color: '#453572' }}>Tu Carrito</h1>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}>
                {cart.map(item => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', padding: '15px 0' }}>
                        <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                        <div style={{ flex: 1, marginLeft: '20px' }}>
                            <h3 style={{ margin: 0 }}>{item.title}</h3>
                            <p style={{ margin: 0, color: '#666' }}>Cantidad: {item.quantity}</p>
                            <p style={{ margin: 0, fontWeight: 'bold' }}>Subtotal: ${item.price * item.quantity}</p>
                        </div>
                        <button
                            onClick={() => removeItem(item.id)}
                            style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}
                        >
                            Eliminar
                        </button>
                    </div>
                ))}

                <div style={{ marginTop: '30px', textAlign: 'right' }}>
                    <h2 style={{ color: '#453572' }}>Total: ${total}</h2>
                    <button onClick={clearCart} style={{ marginRight: '15px', padding: '10px', background: 'none', border: '1px solid #ccc', borderRadius: '8px', cursor: 'pointer' }}>
                        Vaciar Carrito
                    </button>
                    <Link to='/checkout' style={{ backgroundColor: '#aa3bff', color: 'white', padding: '10px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
                        Finalizar Compra
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;