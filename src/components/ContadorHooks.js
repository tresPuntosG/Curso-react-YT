import React, {useState} from 'react';

export default function ContadorHooks(props){
    const [contador, setcontador] = useState(0);
    // console.log(contador);

    const sumar = () => setcontador(contador+1);

    const restar = () => setcontador(contador-1);


    return(
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <p>Contador de {props.titulo}</p>
                <h3>{contador}</h3>
            </nav>
        </>
    );
}

// PROPIEDADES POR DEFECTO
ContadorHooks.defaultProps = {
    titulo: "Cliks",
};