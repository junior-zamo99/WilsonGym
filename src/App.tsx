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
import BarraNav from "./components/BarraNav/BarraNav";
import Menu from "./components/Menu/Menu";
//import PiePagina from "./components/PiePagina/PiePagina";
import Login from "./pages/login/Login";
import './styles/global.scss'

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
      path: "/",
      element:<Layout/>,
      children:[
        
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/usuario",
            element:<Usuario/>,
          },
          {
            path:"/crear",
            element:<Crear/>
          },
          {
            path:"/producto",
            element:<Producto/>
          },
          
        
      ]
    },

          {
            path:"/login",
            element: <Login/>
          }
    ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
