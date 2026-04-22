import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, "productos", itemId);
        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()) {
                    setProduct({ ...resp.data(), id: resp.id });
                }
            })
            .finally(() => setLoading(false));
    }, [itemId]);

    const handleOnAdd = (quantity) => {
        const itemToCart = {
            id: product.id,
            title: product.title, 
            price: product.price,
            image: product.image, 
            quantity
        };
        addItem(itemToCart, quantity);
    };

    if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Cargando...</h2>;
    if (!product) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Producto no encontrado</h2>;

    return (
        <div className="detail-container" style={{ display: 'flex', gap: '50px', padding: '40px', backgroundColor: 'white', margin: '20px', borderRadius: '15px' }}>
            <img src={product.image} alt={product.title} style={{ width: '400px', objectFit: 'contain' }} />
            <div>
                <h1 style={{ color: '#453572' }}>{product.title}</h1>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${product.price}</p>
                <p style={{ margin: '20px 0', color: '#666', lineHeight: '1.6' }}>{product.description}</p>
                <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
            </div>
        </div>
    );
};

export default ItemDetailContainer;