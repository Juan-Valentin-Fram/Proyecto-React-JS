const CartWidget = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '1.5rem' }}>🛒</span>
            <span style={{
                background: '#4b2a63',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 8px',
                fontSize: '0.8rem',
                marginLeft: '-10px',
                fontWeight: 'bold'
            }}>0</span>
        </div>
    );
};

export default CartWidget;