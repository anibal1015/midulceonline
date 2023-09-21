import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";


const ProyectosCrear = () => {

        const navigate = useNavigate();

        //definiremos el estado inicial de las variables
        const [productos, setProductos] = useState({
          nombre: "",
          cantidad: "",
          valor:""
        });
      
        const { nombre, cantidad, valor } = productos;

        useEffect(() =>{
            document.getElementById("nombre").focus();
          },[])
      
        const onChange = (e) => {
          setProductos({
            ...productos,
            [e.target.name]: e.target.value,
          });
        };

        const crearProductos = async () =>{
            const data ={
                nombre: productos.nombre,
                cantidad: productos.cantidad,
                valor: productos.valor
            }

            const response = await APIInvoke.invokePOST("/clientes", data);
            const idP = response.id;

            if (idP === 'El producto no fue creado correctamente') {
                const msg="El producto no fue creado correctamente";
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
    
            }else{
                navigate("/dulceria")
                const msg="El producto fue creado correctamente.";
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

                setProductos({
                    nombre: '',
                    cantidad: '',
                    valor: ''
                })
    
            }
        }



        const onSubmit = (e) => {
            e.preventDefault();
            crearProductos();
          };
          
        return (
            <div className="wrapper">
                <Navbar></Navbar>
                <SidebarContainer></SidebarContainer>
                <div className="content-wrapper">
                    <ContentHeader
                        titulo={"Creacion de productos"}
                        breadCrumb1={"Inicio"}
                        breadCrumb2={"creación"}
                        ruta1={"/dulceria"}
                    />
                    <section className="content">
                            <div className="card">
                                <div className="card-header">
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
                                    <form onSubmit={onSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="Nombre">Nombre </label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="nombre"
                                                    name="nombre"
                                                    value={nombre}
                                                    onChange={onChange}
                                                    required
                                                    placeholder="Ingrese nombre de producto" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="cantidad">Cantidad </label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="cantidad"
                                                    name="cantidad"
                                                    value={cantidad}
                                                    onChange={onChange}
                                                    required
                                                    placeholder="Ingrese cantidad de producto" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="valor">Valor </label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    name="valor"
                                                    value={valor}
                                                    onChange={onChange}
                                                    required
                                                    placeholder="Ingrese el valor del producto" />
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Enviar</button>
                                        </div>
                                    </form>
                                    <div className="card-body">
                                    </div>
                                </div>
                            </div>
    
                    </section>
                </div>
                <Footer></Footer>
            </div>
     );
}
 
export default ProyectosCrear;