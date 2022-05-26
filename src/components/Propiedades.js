import React from 'react';
import PropTypes from 'prop-types';

export default function Propiedades (props){
    return(
        <div>
            {/* <h2>Propiedades</h2> */}
            {/* <h2>{props.porDefecto}</h2> */}
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre+' - '+props.objeto.correo}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.funcion(5)}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul> 
        </div>

    );
}

Propiedades.defaultProps= {
    porDefecto: "Las Props",
}

// PROPTYPES para forzar a recibir determinado tipo de dato o requerido etc.
Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
}