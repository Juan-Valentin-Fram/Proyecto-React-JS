import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { db } from '../firebase/config'; 

function ListaProductos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const productosRef = collection(db, 'productos');

                const q = query(productosRef, where('precio', '<', 5000), limit(10));

                const querySnapshot = await getDocs(q);

                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setProductos(data);
            } catch (error) {
                console.error("Error al traer productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []); 

    if (loading) return <p>Cargando productos...</p>;

    return (
        <ul>
            {productos.map(p => <li key={p.id}>{p.nombre} - ${p.precio}</li>)}
        </ul>
    );
}