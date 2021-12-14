import React from "react";
import "./style.css";
import Etiqueta1 from './components/Etiqueta1';
import {ComponenteEj} from './components/ComponenteEj';



export default function App() {
  return (
    <div>
     <h1> Primer Componente</h1>
     <Etiqueta1/>
     <ComponenteEj titulo="Componente 3" nombre="1"icono=":)"/>
     </div>
  );
}
