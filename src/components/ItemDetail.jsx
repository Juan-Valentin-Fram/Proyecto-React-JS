import ItemCount from "./ItemCount";

const ItemDetail = ({ item, onAdd }) => {
    const stockMaximo = 20;
    const porcentajeStock = (item.stock / stockMaximo) * 100;

    return (
        <div className="item-detail-main-container">
            <div className="item-detail-card">
                <img
                    src={item.image}
                    alt={item.title}
                    className="item-detail-image"
                />
                <div className="item-detail-info">
                    <div style={{ flex: 1 }}>
                        <span style={{ color: '#aa3bff', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                            {item.category}
                        </span>

                        <h1 style={{ fontSize: '2.5rem', margin: '10px 0', color: '#453572' }}>
                            {item.title}
                        </h1>

                        <p style={{ fontSize: '1.8rem', fontWeight: '800', margin: '20px 0' }}>
                            ${item.price}
                        </p>

                        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>
                            {item.description}
                        </p>

                        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '12px' }}>
                            {item.stock > 0 ? (
                                <>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        marginBottom: '10px',
                                        padding: '8px 15px',
                                        backgroundColor: '#fff',
                                        borderRadius: '20px',
                                        border: '1px solid #eee',
                                        width: 'fit-content'
                                    }}>
                                        <span style={{ fontSize: '1.1rem' }}>📦</span>
                                        <p style={{ fontSize: '0.9rem', color: '#555', margin: 0, fontWeight: '500' }}>
                                            ¡Te quedan <span style={{ color: '#aa3bff', fontWeight: 'bold' }}>{item.stock}</span> unidades!
                                        </p>
                                    </div>

                                    <div style={{
                                        width: '100%',
                                        height: '6px',
                                        backgroundColor: '#e0e0e0',
                                        borderRadius: '10px',
                                        marginBottom: '20px',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            width: `${Math.min(porcentajeStock, 100)}%`,
                                            height: '100%',
                                            backgroundColor: item.stock < 5 ? '#ff4d4d' : '#aa3bff',
                                            transition: 'width 0.5s ease'
                                        }}></div>
                                    </div>

                                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                                </>
                            ) : (
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{
                                        color: '#ff4d4d',
                                        fontWeight: 'bold',
                                        margin: '10px 0',
                                        fontSize: '1.2rem',
                                        textTransform: 'uppercase'
                                    }}>
                                        Producto momentáneamente sin stock
                                    </p>
                                    <button
                                        disabled
                                        style={{
                                            backgroundColor: '#ccc',
                                            color: '#666',
                                            border: 'none',
                                            padding: '12px 30px',
                                            borderRadius: '10px',
                                            cursor: 'not-allowed',
                                            width: '100%',
                                            fontWeight: 'bold',
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Sin Stock
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;