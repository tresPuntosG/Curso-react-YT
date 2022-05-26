import React from "react";
import logo from './logo.svg';
import Componente from "./components/Componente";
import './App.css';
import Propiedades from "./components/Propiedades";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="hola, soy un componente funcional desde una prop"  />
          <hr/>
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1,2,3]}
            objeto={{nombre: "Pablo", correo:"pc@pc.pc"}}
            funcion={num => num*num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={<Componente msg="Soy un componente pasado como prop"/>}
          />
        </section>
      </header>
    </div>
  );
}

export default App;
