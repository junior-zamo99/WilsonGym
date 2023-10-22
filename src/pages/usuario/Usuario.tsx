import React, { useState} from 'react';
import{user} from "../../usuario"
import Example from "./eliminar/Eliminar"
import { Link } from 'react-router-dom';
import "./usuario.scss"

const Usuario = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="usuario">
      <div>
         <Link to="/home/crear">
      <button className="boton">Crear Usuario</button>
        </Link>  
       </div>
       <div>
      <h1 className="header">Lista de Usuarios</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>CI</th>
            <th>Teléfono</th>
            <th>Fecha de Nacimiento</th>
            <th>Dirección</th>
            <th>Usuario</th>
           
            
          </tr>
        </thead>
        <tbody>
          {user.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.ci}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.fechaNacimineto}</td>
              <td>{usuario.direccion}</td>
              <td>{usuario.usuario}</td>
              
                <div className="botones">
              <Link to="/a/editar">
                <button className="editar">Editar</button>
              </Link>
              
                <button className="eliminar" onClick={handleShow}>Eliminar</button>
                </div>
                
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    <Example show={show} handleClose={handleClose}/>
    </>
    
  )
}

export default Usuario