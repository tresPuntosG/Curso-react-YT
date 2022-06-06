import React, { Component } from 'react';

// PASAR PROPIEDADES DE PADRE A HIJOS: A TRAVES DE LAS PROPS

// DE HIJOS A PADRES MEDIANTE EVENTOS  MODIFICANDO EL ESTADO EN EL PADRE

// EN AMBOS CASOS SE RENDERIZA EL ELEMENTO EN PANTALLA

// CUANDO HAY MAS NIVELES (PADRES / HIJOS / NIETOS...) MEJOR USAR  ESTADO GLOBAL  O  CONTEXT  O PORTALES

export default class Padre extends Component {
    state = {
        contador: 0,
    }

    incrementarContador = (e) => {
        this.setState ({
            contador: this.state.contador + 1
        })
    }


    render(){
        return(
            <>
                <h2>Comunicación entre componentes</h2>
                <p>
                    Contador <b>{this.state.contador}</b>
                </p>
                <Hijo mensaje="Mensaje para el hijo 1"/>
                <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 2"/>
            </>
        )
    }
}

function Hijo (props) {
    return (
            <>
                <h3>{props.mensaje}</h3>
                <button onClick={props.incrementarContador}>+</button>
            </>
    )
}