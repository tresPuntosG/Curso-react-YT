import React, {Component} from 'react';

export class EventosES6 extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        }
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(){
        console.log("Sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador+1,
        })

    }
    restar(){
        console.log("Restando");
        console.log(this);
        this.setState({
            contador: this.state.contador-1,
        })

    }


    render(){
        return(
            <div>
                <h2>Eventos de Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}


// properties initializer
export class EventosES7 extends Component {
    // ya no se usa un constructor
    // el estado se define como una propiedad de la clase, sin  this
    state = {
        contador: 0,
    }


    // Arrow functions
    // al definir los METODOS de forma EXPRESADA como una ARROW FUNCTION
    // HEREDAN EL CONTEXTO DE LA CLASE A LA QUE PERTENECEN
    // por eso no es necesario hacer el BINDEO 
    sumar = (e) => {
        console.log("Sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador+1,
        })

    }
    restar = (e) => {
        console.log("Restando");
        console.log(this);
        this.setState({
            contador: this.state.contador-1,
        })

    }


    render(){
        return(
            <div>
                <h2>Eventos de Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}