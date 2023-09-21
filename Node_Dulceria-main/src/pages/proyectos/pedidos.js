import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const Pedidos = () => {

  const navigate = useNavigate();


  const [usurio,setUsuario] = useState({
    nombre: '',
    email: '',
    entrega: '',
    confiEntrega: ''

    });

  const{nombre,email,entrega,confiEntrega}=usurio;

  const onChange=(e)=> {
    setUsuario({
      ...usurio,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() =>{
    document.getElementById("nombre").focus();
  },[])

  const crearCuenta = async()=>{

    if(entrega !== confiEntrega){
      const msg="los lugares de entrega son diferentes"
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
      
    }else {
      const data ={
        nombre : usurio.nombre,
        email : usurio.email,
        entrega : usurio.entrega,
        confiEntrega: usurio.confiEntrega
  
      }
      
      const response = await APIInvoke.invokePOST("/pedidos", data);
      const mensaje = response.msg;
  
      if(mensaje === 'La compra ya existe'){
        const msg="El compra ya existe.";
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
    } else {
      navigate("/home")
      const msg="La compra fue creada correctamente.";
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
        setUsuario({
          nombre: '',
          email: '',
          entrega: '',
          confiEntrega: ''
        })
    }
  }
 }

  const onSubmit=(e)=> {
    e.preventDefault();
    crearCuenta()

  }

    return ( 
    <div className="hold-transition register-page">
<div className="register-box">
  <div className="register-logo">
  <Link to={"#"}><b>Registro de Pedido</b></Link>
  </div>
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Bienvenido ingrese sus datos</p>

      <form onSubmit={onSubmit}>
          <div className="input-group mb-3">
              <input type="text"
                  className="form-control" 
                  placeholder="nombre" 
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onChange}
                  required
             />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>

        <div className="input-group mb-3">
          <input type="email" 
          className="form-control" 
          placeholder="Email" 
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          required
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>

        <div className="input-group mb-3">
          <input type="text" 
          className="form-control" 
          placeholder="Lugar de entrega" 
          id="entrega"
          name="entrega"
          value={entrega}
          onChange={onChange}
          required
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>

        <div className="input-group mb-3">
          <input type="text" 
          className="form-control" 
          placeholder="Confirmar su lugar de entrega" 
          id="confiEntrega"
          name="confiEntrega"
          value={confiEntrega}
          onChange={onChange}
          required
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>



        <div className="social-auth-links text-center">
        <button type="submit" class="btn btn-block btn-primary">
         Ingresar
        </button>
        <Link to={"/dulceria"} className="btn btn-block btn-danger">
          Login
        </Link>

        </div>
      </form>
    </div>
  </div>
</div>


    </div>
     );
}
 
export default Pedidos;