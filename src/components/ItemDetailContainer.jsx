import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';
import ItemDetail from './ItemDetail'; 

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
        if (product) {
            const itemToCart = {
                id: product.id,
                title: product.title, 
                price: product.price,
                image: product.image, 
                quantity
            };
            addItem(itemToCart, quantity);
        }
    };

    if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Cargando...</h2>;
    if (!product) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Producto no encontrado</h2>;

    return (
        <ItemDetail item={product} onAdd={handleOnAdd} />
    );
};

export default ItemDetailContainer;