import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <button onClick={decrement} style={{ padding: '5px 15px', borderRadius: '5px', border: '1px solid #453572' }}>-</button>
                <h4 style={{ margin: 0 }}>{quantity}</h4>
                <button onClick={increment} style={{ padding: '5px 15px', borderRadius: '5px', border: '1px solid #453572' }}>+</button>
            </div>
            <button
                onClick={() => onAdd(quantity)}
                disabled={!stock}
                style={{ backgroundColor: '#453572', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;