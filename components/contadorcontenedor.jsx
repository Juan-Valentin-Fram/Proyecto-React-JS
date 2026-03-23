import { useState } from 'react';
import ContadorPresentacional from './contadorpresentacional';

function ContadorContenedor() {
    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);
    const reiniciar = () => setContador(0);

    return (
        <ContadorPresentacional
            valor={contador}
            onIncrement={incrementar}
            onDecrement={decrementar}
            onReset={reiniciar}
        />
    );
}

export default ContadorContenedor;