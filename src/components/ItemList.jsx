import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            padding: '20px'
        }}>
            {productos.map((prod) => (
                <div key={prod.id} style={{
                    width: '280px',
                    border: '1px solid #eee',
                    padding: '20px',
                    borderRadius: '15px',
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    backgroundColor: 'white'
                }}>
                    <img src={prod.image} alt={prod.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
                    <h3 style={{ fontSize: '1.2rem', margin: '15px 0', color: '#453572' }}>{prod.title}</h3>
                    <p style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>${prod.price}</p>
                    
                    <Link to={`/item/${prod.id}`} style={{
                        display: 'inline-block',
                        backgroundColor: '#aa3bff',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        marginTop: '10px',
                        fontWeight: 'bold'
                    }}>
                        Ver detalle
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ItemList;