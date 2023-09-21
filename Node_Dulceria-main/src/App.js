import React, {Fragment} from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from "./pages/auth/login";
import CrearCuenta from "./pages/auth/crearcuenta";
import Home from "./pages/home";
import ProyectosCrear from "./pages/proyectos/proyectosCrear";
import ProyectosEditar from "./pages/proyectos/proyectosEditar";
import Productos from "./pages/proyectos/productos";
import Pedidos from "./pages/proyectos/pedidos";


function App() {
  return (
<Fragment>
 <Router>
  
   <Routes>
   <Route path="/" exact element={<Login/>}/>
     <Route path="/crearcuenta" exact element={<CrearCuenta/>}/>
     <Route path="/home" exact element={<Home/>}/>
     <Route path="/crear" exact element={<ProyectosCrear/>}/>
     <Route path="/editar/:idproyecto" exact element={<ProyectosEditar/>}/>
     <Route path="/dulceria" exact element={<Productos/>}/>
     <Route path="/pedidos" exact element={<Pedidos/>}/>
   </Routes>
 </Router>
</Fragment>

);


}

export default App;


