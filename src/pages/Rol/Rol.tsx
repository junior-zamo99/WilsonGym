import React from 'react'
import{roles} from "../../Datos"
import{BiEdit} from 'react-icons/bi'
import{AiTwotoneDelete} from 'react-icons/ai'
import{BsFillEyeFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import "./rol.scss"
const Rol = () => {
  return (
    <div>
        <h1 className='Header'>Gestionar Roles</h1>
        <Link to='/home/crearRol'>
        <button className='CrearRol'>Crear Rol</button>
        </Link>
        
        <table className='tabla'>
           <thead>
            <tr>
                <th>Nombre</th>
            </tr>
           </thead>
           
           <tbody>
           {roles.map((rol)=>(
            <tr key={rol.id}>
                <td>{rol.nombre}</td>
                <div className="botones">
               
              <Link to="/home/editar">
                <BiEdit size='40px' gap='20px' color='green' />
                
              </Link>
                
             
              
              <AiTwotoneDelete size='40px' gap='20px' color='red'  />
              <Link>
                <BsFillEyeFill size='30px' gap='20px'/>
              </Link>
                </div>
            </tr>
           ))}
           </tbody>
        </table>
    </div>
  )
}

export default Rol