import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); 

    console.log("ID de categoría detectado:", categoryId);
    
    useEffect(() => {
        setLoading(true);

        const productosRef = collection(db, "productos");

        const q = categoryId 
            ? query(productosRef, where("category", "==", categoryId)) 
            : productosRef;

        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                );
            })
            .catch((error) => console.log("Error al filtrar:", error))
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]);

    if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Cargando productos...</h2>;

    return (
        <div className="container">
            <h2 style={{ textAlign: 'center', margin: '30px 0', color: '#453572', textTransform: 'capitalize' }}>
                {categoryId ? categoryId : "Nuestros Productos"}
            </h2>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;