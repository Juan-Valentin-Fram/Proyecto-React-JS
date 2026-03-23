const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1>¡Hola Mundo!</h1>
        <ContadorContenedor />
    </div>
);

// Prueba, no funciona
function App() {
    return (
        <div>
            <h2>Curso React</h2>
            <p>Este es un curso básico de React para principiantes.</p>
        </div>
    );
}

    function ContadorContenedor() {
        const [contador, setContador] = React.useState(0);

        const incrementar = () => {
            setContador(contador + 1);
        };

        const decrementar = () => {
            setContador(contador - 1);
        };

        return (
            <div>
                <h2>Contador: {contador}</h2>
                <button onClick={incrementar}>Incrementar</button>
                <button onClick={decrementar}>Decrementar</button>
            </div>
        );
    }
