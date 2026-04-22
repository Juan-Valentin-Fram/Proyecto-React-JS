import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const totalQuantity = cart ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0;

    return (
        <Link to="/cart" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none', 
            color: 'inherit',
            position: 'relative' 
        }}>
            <span style={{ fontSize: '1.5rem' }}>🛒</span>
            
            {totalQuantity > 0 && (
                <span style={{ 
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    backgroundColor: '#aa3bff', 
                    color: 'white', 
                    borderRadius: '50%', 
                    padding: '2px 6px', 
                    fontSize: '0.7rem',
                    minWidth: '15px',
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}>
                    {totalQuantity}
                </span>
            )}
        </Link>
    );
};

export default CartWidget;