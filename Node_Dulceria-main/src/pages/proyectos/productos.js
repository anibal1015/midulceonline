// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Producto from "./producto";

const Productos = () => {
  const [productos, setProductos] = useState([

    {
      id: 2,
      nombre: " Artesanal",
      cantidad: 1,
      valor: 3000,
    },
    {
      id: 3,
      nombre: "Polet",
      cantidad: 1,
      valor: 5000,
    },
    {
      id: 4,
      nombre: "coffe",
      cantidad: 1,
      valor: 22000,
    },
    {
      id: 5,
      nombre: "Bocatto",
      cantidad: 8,
      valor: 5000,
    },
    {
      id: 6,
      nombre: "Choco Mami",
      cantidad: 4,
      valor: 3000,
    },
  ]);
  const cargarProyectos = async () => {
    const response = await APIInvoke.invokeGET(`/productos`);
    setProductos(response.productos)
}



const eliminarProyecto = async (e, id) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/productos/${id}`);
    setProductos(response.productos);
    if (response.msg === 'Producto Eliminado') {
        const msg = "El producto fue eliminado correctamente.";
        swal({
            title: 'Información',
            text: msg,
            icon: 'success',
            buttons: {
                confirm: {
                    text: 'okey',
                    value: true,
                    className: 'btn btn-primary',
                    closeModal: true
                }
            }
        });
        cargarProyectos()
    } else {
        const msg = "El producto no fue borrado correctamente";
        swal({
            title: 'Error',
            text: msg,
            icon: 'error',
            buttons: {
                confirm: {
                    text: 'okey',
                    value: true,
                    className: 'btn btn-danger',
                    closeModal: true
                }
            }
        });
    }

}


  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper" style={{ backgroundColor: "white" }}>
        <ContentHeader 
        titulo={"Listado de Productos"}
        ruta1={"/home"} />

        <section className="content">
          <div className="container-fluid" >
            <table className="table" >
              <thead  style={{backgroundColor: 'DarkBlue' , color:'white'}}>
                <tr>
                <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>

              <tbody>

              {
                  productos.map((producto) => {
                    return (
                      <tr key={producto.id}>
                        <td><Producto id={producto.id}/></td>
                        <td><Producto nombre={producto.nombre}/></td>
                        <td><Producto cantidad={producto.cantidad}/></td>
                        <td><Producto valor={producto.valor}/></td>
                        <td>
                        <Link to={`/editar/${producto.id}@${producto.nombre}@${producto.cantidad}@${producto.valor}`} className="btn btn-sm btn-primary">Editar</Link>
                         <button onClick={(e) => eliminarProyecto(e, producto.id)} className="btn btn-sm btn-danger">Borrar</button>
                        </td>
                      </tr>
                    );
                  })
                }            
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Productos;