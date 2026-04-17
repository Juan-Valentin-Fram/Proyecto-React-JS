function ContadorPresentacional({ valor, onIncrement, onDecrement, onReset }) {
    return (
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px' }}>
            <h2>Contador: {valor}</h2>
            <button onClick={onIncrement}>Incrementar</button>
            <button onClick={onDecrement}>Decrementar</button>
            <button onClick={onReset}>Reiniciar</button>
        </div>
    );
}

export default ContadorPresentacional;