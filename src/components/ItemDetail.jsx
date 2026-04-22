import ItemCount from "./ItemCount";

const ItemDetail = ({ item, onAdd }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 20px' }}>
            <div style={{
                display: 'flex',
                gap: '50px',
                maxWidth: '900px',
                width: '100%',
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
            }}>
                <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '40%', objectFit: 'contain' }} 
                />

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
                                <p style={{ fontSize: '0.9rem', color: '#333', marginBottom: '10px' }}>
                                    Stock disponible: {item.stock}
                                </p>
                                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                            </>
                        ) : (
                            <p style={{ 
                                color: 'red', 
                                fontWeight: 'bold', 
                                textAlign: 'center', 
                                margin: '10px 0',
                                fontSize: '1.1rem' 
                            }}>
                                ¡Producto sin stock!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;