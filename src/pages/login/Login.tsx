import "./login.scss";

const Login = () => {
  return (
    <div className="login">
    <div className="contenedor">
      
      <div >
        <h2>Iniciar sesión</h2>
        <form className="formulario">
          <div>
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              
             
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
             
              
            />
          </div>
          <button type="button" >Iniciar sesión</button>
        </form>
      </div>
  
      
    </div>
    </div>
  )
}

export default Login