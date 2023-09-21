import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const CrearCuenta = () => {

  const [usuario, setUsuario] = useState({
      nombre: '',
      email: '',
      password: '',
      confirmar: '',
      rol: 'cliente' // Valor predeterminado del rol (puedes cambiarlo según tus necesidades)
  })

  const { nombre, email, password, confirmar, rol } = usuario;
  const onChange = (e) => {
      setUsuario(
          {
              ...usuario,
              [e.target.name]: e.target.value

          }
      )
  }

  useEffect(() => {
      document.getElementById("nombre").focus();
  }, [])

  const crearCuenta = async () => {

      const verificarExistenciaUsuario = async (nombre) => {
          try {
              const response = await APIInvoke.invokeGET(
                  `/Usuarios?nombre=${nombre}`
              );
              if (response && response.length > 0) {
                  return true; // El usuario ya existe
              }
              return false; // El usuario no existe
          } catch (error) {
              console.error(error);
              return false; // Maneja el error si la solicitud falla
          }
      };

      if (password !== confirmar) {
          const msg = "Las contraseñas son diferentes";
          new swal({
              title: 'Error',
              text: msg,
              icon: 'error',
              buttons: {
                  confirm: {
                      text: 'Ok',
                      value: true,
                      visible: true,
                      className: 'btn btn-danger',
                      closeModal: true
                  }
              }
          });
      } else if (password.length < 6) {
          const msg = 'La contraseña debe ser de al menos 6 caracteres'
          new swal({
              title: 'Error',
              text: msg,
              icon: 'error',
              buttons: {
                  confirm: {
                      text: 'Ok',
                      value: true,
                      visible: true,
                      className: 'btn btn-danger',
                      closeModal: true
                  }
              }
          });
      } else {

          const usuarioExistente = await verificarExistenciaUsuario(nombre);
          const data = {
              nombre: usuario.nombre,
              email: usuario.email,
              password: usuario.password,
              rol: usuario.rol // Asegúrate de enviar el rol seleccionado al servidor
          };
          
          try {
              // eslint-disable-next-line no-unused-vars
              const response = await APIInvoke.invokePOST(`api/usuarios`, data);
              // Resto del código de manejo de la respuesta
            } catch (error) {
              console.error("Error al realizar la solicitud:", error);
              // Puedes mostrar un mensaje de error al usuario si lo deseas
            }
          //const response = await APIInvoke.invokePOST(`/Usuarios`, data);
            //console.log(response);
          //const mensaje = response.msg;

         


          if (usuarioExistente) {
              const msg = 'El usuario ya existe'
              new swal({
                  title: 'Error',
                  text: msg,
                  icon: 'error',
                  buttons: {
                      confirm: {
                          text: 'Ok',
                          value: true,
                          visible: true,
                          className: 'btn btn-danger',
                          closeModal: true
                      }
                  }
              });

          } else {
              const msg = 'El usuario fue creado correctamente.'
              new swal({
                  title: 'Información',
                  text: msg,
                  icon: 'success',
                  buttons: {
                      confirm: {
                          text: 'Ok',
                          value: true,
                          visible: true,
                          className: 'btn btn-danger',
                          closeModal: true
                      }
                  }
              });
              setUsuario({
                  nombre: '',
                  email: '',
                  password: '',
                  confirmar: '',
                  rol: 'cliente' // Restablecer el valor predeterminado del rol después de la creación de la cuenta
              })
          }
      }
  }

  const onSubmit = (e) => {
      e.preventDefault();
      crearCuenta();
  }

  return (
      <div className="hold-transition login-page">
          <div className="login-box">
              <div className="login-logo">
                  <Link to="#"><b>Pedido</b> </Link>
              </div>

              <div className="card">
                  <div className="card-body login-card-body">
                      <p className="login-box-msg">ingrese sus datos</p>
                      <form onSubmit={onSubmit}>
  <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Nombre" id="nombre" name="nombre" value={nombre} onChange={onChange} required />
      <div className="input-group-append">
          <div className="input-group-text">
              <span className="fas fa-user" />
          </div>
      </div>
  </div>

  <div className="input-group mb-3">
      <input type="email" className="form-control" placeholder="Email" id="email" name="email" value={email} onChange={onChange} required />
      <div className="input-group-append">
          <div className="input-group-text">
              <span className="fas fa-envelope" />
          </div>
      </div>
  </div>
  <div className="input-group mb-3">
      <input type="password" className="form-control" placeholder="Contraseña" id="password" name="password" value={password} onChange={onChange} required />
      <div className="input-group-append">
          <div className="input-group-text">
              <span className="fas fa-lock" />
          </div>
      </div>
  </div>
  <div className="input-group mb-3">
      <input type="password" className="form-control" placeholder="Confirmar Contraseña" id="confirmar" name="confirmar" value={confirmar} onChange={onChange} required />
      <div className="input-group-append">
          <div className="input-group-text">
              <span className="fas fa-lock" />
          </div>
      </div>
  </div>
  
  {/* Agregar el campo de selección de rol */}
  <div className="input-group mb-3">
      <label htmlFor="rol">Seleccione su rol:</label>
      <select className="form-control" id="rol" name="rol" value={rol} onChange={onChange} required>
          <option value="cliente">Cliente</option>
          <option value="administrador">Administrador</option>
      </select>
  </div>
  
  <div className="social-auth-links text-center mb-3">
      <button type="submit" className="btn btn-block btn-primary">
          Ingresar
      </button>
      <Link to="/" className="btn btn-block btn-danger">
          Login
      </Link>
  </div>
</form>

                  </div>

              </div>
          </div>

      </div>
  )
}
 
export default CrearCuenta;