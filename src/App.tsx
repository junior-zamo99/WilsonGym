import Home from "./pages/home/Home"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Usuario from "./pages/usuario/Usuario";
import Producto from "./pages/producto/Producto";
import Crear from "./pages/usuario/Crear/Crear";
import Editar from "./pages/usuario/editar/Editar";
import BarraNav from "./components/BarraNav/BarraNav";
import Menu from "./components/Menu/Menu";
//import PiePagina from "./components/PiePagina/PiePagina";
import Login from "./pages/login/Login";
import './styles/global.scss'
import Rol from "./pages/Rol/Rol";
import CrearRol from "./pages/Rol/crearRol/CrearRol";


function App() {
  
  const Layout =()=>{
    return(
      <div className="menu">
        <BarraNav/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        
      </div>
    )
  }



  const router = createBrowserRouter([
    {
      path: "/home",
      element:<Layout/>,
      children:[
        
          {
            path:"/home",
            element:<Home/>
          },
          {
              path:"/home/rol",
              element:<Rol/>
          },
          {
            path:"/home/crearRol",
            element:<CrearRol/>
        },
          {
            path:"/home/usuario",
            element:<Usuario/>,
          },
          {
            path:"/home/crear",
            element:<Crear/>
          },
          {
             path:"/home/editar",
             element:<Editar/>
          },
          {
            path:"/home/producto",
            element:<Producto/>
          },
          
      ]
    },

          {
            path:"/",
            element: <Login/>
          }
    ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
