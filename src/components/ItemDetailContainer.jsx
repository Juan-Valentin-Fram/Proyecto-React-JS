import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/asyncMock';
import ItemCount from './ItemCount';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); 

    useEffect(() => {
        setLoading(true);
        
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => console.error("Error al cargar:", error))
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Cargando producto...</h2>;

    if (!product) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>El producto con ID {itemId} no existe.</h2>;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
            <div style={{ 
                display: 'flex', 
                gap: '40px', 
                maxWidth: '800px', 
                border: '1px solid #453572', 
                padding: '20px', 
                borderRadius: '15px', 
                backgroundColor: 'white',
                alignItems: 'center'
            }}>
                <img src={product.img} alt={product.name} style={{ width: '300px', borderRadius: '10px' }} />
                <div>
                    <h2 style={{ color: '#453572' }}>{product.name}</h2>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${product.price}</p>
                    <p>{product.description}</p>
                    <hr style={{ border: '0.5px solid #eee', margin: '20px 0' }} />
                    <ItemCount stock={product.stock} initial={1} onAdd={(quantity) => console.log('Agregado:', quantity)} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;