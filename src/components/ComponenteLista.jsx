import React from "react";
import './componente-lista.css';

export default function ComponenteLista(props){
  let claseLista = props.prioridad;
  if (props.done){
    cadenaLista += ' el-done';
}else{
  claseLista += ' el-undone';
}

return(
  <li className={claseLista}>
  <input type="checkbox"/>
  {props.texto}
  </li>
);
}

ComponenteLista.defaultProps={
  prioridad: 'baja',
};