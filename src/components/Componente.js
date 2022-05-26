import React from 'react';

// COMPONENTE BASADO EN FUNCION EXPRESADA
const Componente = props => <h2>{props.msg}</h2>;

// COMPONENTE BASADO EN FUNCION DECLARADA
// function Componente(props){
//     return <h2>{props.msg}</h2>;
// }

// COMPONENTE BASADO EN CLASE
// class Componente extends Component {
//     render(){
//         return <h2>{this.props.msg}</h2>
//     }
// }

export default Componente;