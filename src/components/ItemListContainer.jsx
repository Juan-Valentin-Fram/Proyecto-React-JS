import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../data/asyncMock';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const asyncFunc = id ? getProductsByCategory : getProducts;

        asyncFunc(id)
            .then(response => setProducts(response))
            .catch(error => console.error(error));
    }, [id]);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>{greeting}</h1>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {products.map(prod => (
                    <div key={prod.id} style={{ border: '1px solid #453572', padding: '10px', borderRadius: '8px', width: '200px' }}>
                        <img src={prod.img} alt={prod.name} style={{ width: '100%' }} />
                        <h3>{prod.name}</h3>
                        <p>${prod.price}</p>
                        <Link
                            to={`/item/${prod.id}`}
                            style={{
                                backgroundColor: '#453572',
                                color: 'white',
                                textDecoration: 'none',
                                padding: '8px 15px',
                                borderRadius: '5px',
                                display: 'inline-block',
                                fontSize: '0.9rem'
                            }}
                        >
                            Ver detalle
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;