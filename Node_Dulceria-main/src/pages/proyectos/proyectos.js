import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Dulceria = () => {
    const [proyectos, setProyectos]= useState([]);

    const cargarProyectos = async () => {
        const response = await APIInvoke.invokeGET("/productos");
        //console.log(response.usurio);
        setProyectos(response.proyectos);
    }

    useEffect(() => {
        cargarProyectos();
    },[])

    const eliminarProyecto = async(e, id)=>{
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/productos/${id}`);

        if (response.msg === 'Producto Eliminado') {
            const msg="El producto fue eliminado correctamente.";
            swal({
              title: 'Información',
              text: msg,
              icon: 'success',
              buttons: {
                confirm:{
                  text:'okey',
                  value: true,
                  className:'btn btn-primary',
                  closeModal: true
                }
              }
            });
            cargarProyectos()
        }else {
            const msg="El producto no fue borrado correctamente";
            swal({
              title: 'Error',
              text: msg,
              icon: 'error',
              buttons: {
                confirm:{
                  text:'okey',
                  value: true,
                  className:'btn btn-danger',
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
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Listado de dulces"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"proyectos"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                        <h3 className="card-title"><Link to={"/crear"} className="btn btn-block btn-primary btn-sm">Agregar producto</Link></h3>
                            <div className="card-tools">
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-card-widget="collapse"
                                    title="Collapse"
                                >
                                    <i className="fas fa-minus" />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-card-widget="remove"
                                    title="Remove"
                                >
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">

                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style={{ width: '10%' }}>Id</th>
                                                <th style={{ width: '35%' }}>Nombre</th>
                                                <th style={{ width: '35%' }}>Cantidad</th>
                                                <th style={{ width: '35%' }}>Valor</th>
                                                <th style={{ width: '20%' }}>Opciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                {
                                                    proyectos.map(
                                                        item =>
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.nombre}</td>
                                                            <td>{item.cantidad}</td>
                                                            <td>{item.valor}</td>
                                                            <td>
                                                                <Link to={`/editar/${item.id}@${item.nombre}@${item.cantidad}@${item.valor}`} className="btn btn-sm btn-primary">Editar</Link>
                                                                <button onClick={(e) => eliminarProyecto (e, item.id)} className="btn btn-sm btn-danger">Borrar</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                } 
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dulceria;
