import React, {useState, useEffect} from 'react';


function Reloj() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        console.log("Componente iniciado");
        let temporizador;

        temporizador = setInterval(()=>{
            setHora(new Date().toLocaleTimeString());
        }, 1000)

        return()=>{
            console.log("Componente Desmontado");
            clearInterval(temporizador);
        };

    }, []);


    return <h3>{hora}</h3>;
}

export default function RelojHooks(){
    const [visible, setVisible] = useState(false);

    return(
        <>
            <h2>Reloj con Hooks</h2>
            {visible&&<Reloj />}
            <button onClick={()=>setVisible(true)}>Mostrar</button>
            <button onClick={()=>setVisible(false)}>Ocultar</button>
        </>
    );
}