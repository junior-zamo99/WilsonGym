import React, { useState,} from 'react'


const CrearRol = () => {
    const [nombre, setNombre] = useState('');
  const [roles, setRoles] = useState({
    administrador: false,
    usuario: false,
    editor: false,
  });

  const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const role = event.target.name;
    setRoles({
      ...roles,
      [role]: event.target.checked,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    console.log('Nombre:', nombre);
    console.log('Roles:', roles);
  };
  
  
  
    
      return (
        <div className='contenedor'>
          <h1>Nuevo Usuario</h1>
          <form onSubmit={handleSubmit} className='formulario'>
            <div >
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={handleNombreChange}
              />

                <div>
                    <p>Funcionalidad</p>
                    <label>
          <input
            type="checkbox"
            name="administrador"
            checked={roles.administrador}
            onChange={handleRoleChange}
          />
          hola
        </label>
        <label>
          <input
            type="checkbox"
            name="usuario"
            checked={roles.usuario}
            onChange={handleRoleChange}
          />
         hola
        </label>
        <label>
          <input
            type="checkbox"
            name="editor"
            checked={roles.editor}
            onChange={handleRoleChange}
          />
          eliminar usuario
        </label>
                </div>
            </div>
            <button type="submit">Crear</button>
            <button type="submit">Cancelar</button>
          </form>
        </div>
      );
}

export default CrearRol