import ContadorContenedor from '../components/ContadorContenedor';

function App() {
    return (
        <div className="App">
            <h1>Mi Primer Proyecto con Vite</h1>
            <ContadorContenedor />
        </div>
    );
}

import { useState, useEffect, useRef } from 'react';
import Card from '../components/card';

function App() {
    const [usuarios, setUsuarios] = useState([]); 
    const [cargando, setCargando] = useState(true);
    const inputRef = useRef(null); 

    useEffect(() => {
        const obtenerUsuarios = new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, nombre: "Juan", rol: "Desarrollador" },
                    { id: 2, nombre: "Magui", rol: "Diseñadora" },
                    { id: 3, nombre: "Pepe", rol: "Tester" }
                ]);
            }, 2000);
        });

        obtenerUsuarios.then((data) => {
            setUsuarios(data);
            setCargando(false);
            inputRef.current.focus();
        });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Lista de Usuarios</h1>

            <input
                ref={inputRef}
                type="text"
                placeholder="Buscador (auto-focus al cargar)..."
            />

            {cargando ? (
                <p>Cargando usuarios asíncronamente...</p>
            ) : (
                usuarios.map((user) => (
                    <Card key={user.id} titulo={user.nombre}>
                        <p>Puesto: {user.rol}</p>
                    </Card>
                ))
            )}
        </div>
    );
}

export default App;