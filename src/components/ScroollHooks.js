import React, { useState, useEffect } from 'react';

export default function ScrollHooks(){

    const [scrollY, setScrollY] = useState(0);
    // const [name, setName] = useState("Pablito");

    useEffect(() => {

        // console.log("Moviendo el scroll");

        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);
        //window.removeEventListener("scroll",detectarScroll);

    },[scrollY]);   // EL EFECTO SE VA A ACTUALIZAR CUANDO LA VARIABLE  xxx  TENGA CAMBIOS
                    // SI CAMBIA name  NO SE EJECUTA EL EFECTO, SOLO  scrollY
    
    useEffect(()=>{
        console.log("Fase de montaje");
     },[]);      // DEJANDO LA LISTA DE DEPENDENCIAS VACIA EL USEEFFECT SE EJECUTA SOLO UNA VEZ
                // AC ASE PODRIAN HACER LAS LLAMADAS A UNA API ...UN TEMPORIZADOR ... ETC

    useEffect(()=>{
        // console.log("Fase de actualización");
    });         // SI LA LISTA DE DEPENDENCIAS NO ESTA DEFINIDA, EL EFECTO SE VUELVE A EJECUTAR CADA VEZ QUE SE RENDERICE EL COMPONENTE
    
    /*
    useEffect(()=>{
        return()=>{
            console.log("Fase de desmontaje");
        };
     });      // RETORNANDO UNA FUNCION  EJECUTAMOS LA FASE DE DESMONTAJE 
                // ACA SE PODRIA DESCONECTARSE DE API, LIMPIAR EVENTOS, ETC. para limpiar esa memoria del navegador
     */


    return(
        <>
           <h2>Hooks - useEffect y el ciclo de vida</h2>
           <p>Scroll Y del navegador {scrollY} px</p>
        </>
    )
}