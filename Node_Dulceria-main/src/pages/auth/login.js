import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Clientes  from "../../apiBD.json"


//funcion para maquetar el login

const Login = () => {
  //para redireccionar de un componente a otro
  const navigate = useNavigate();

  //definiremos el estado inicial de las variables
  const [clientes, setClientes] = useState({
    email: "",
    password: ""
  });

  const { email, password } = clientes;

  const onChange = (e) => {
    setClientes({
      ...clientes,
      [e.target.name]: e.target.value,
    });
  };

  //funcion tipo flecha
  const login = async () => {
    if (password.length < 6) {
      const msg = "la contraseña debe tener minimo 6 caracteres ";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "ok",
            value: "true",
            visible: "true",
            className: "btn btn-danger",
            closeModel: true,
          },
        },
      });
    } else {
     
      // eslint-disable-next-line no-unused-vars
      const data ={
        email : Clientes.email,
        password :  Clientes.password
      };

  
  // Utiliza find() para buscar un usuario con el nombre de usuario proporcionado
  const usuarioEncontrado = Clientes.Clientes.find(clientes => clientes.email === email);

  if (usuarioEncontrado) {
    // Comprueba si la contraseña coincide
    console.log("incio de sesion exitosa");
    console.log("datos del usuaio :", usuarioEncontrado);


    if (usuarioEncontrado.password === password) {
      const msg ="Inicio de Sesion Exitosa";
      swal({
        title: "Exito",
        text: msg,
        icon: "sucess",
        buttons: {
          confirm: {
            text: "ok",
            value: "true",
            visible: "true",
            className: "btn btn-danger",
            closeModel: true,
          },
        },
      });
      navigate("/home")
      
    } else {
      const msg="Contraseña Incorrecta ";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "ok",
            value: "true",
            visible: "true",
            className: "btn btn-danger",
            closeModel: true,
          },
        },
      });
    }
  } else {
    const msg="No fue posible iniciar Sesion , revisa tu usuario y/o contraseña ";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "ok",
            value: "true",
            visible: "true",
            className: "btn btn-danger",
            closeModel: true,
          },
        }
      });
  }
}

}
  
  const onSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div class="hold-transition login-page">
      <div className="login-box">
        <div className="login-box">
          <div className="login-logo">
            <Link to={"#"}>
              <b>Inicio de sesion</b>
            </Link>
          </div>

          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">
                Bienvenido ingrese sus credenciales{" "}
              </p>

              <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
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
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="col-15">
                  <button type="submit" className="btn btn-block btn-primary">
                    Ingresar
                  </button>
                  <Link to={"/crearcuenta"} className="btn btn-block btn-danger">
                    Crear Cuenta
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

//el export default permite importar o invocar la funcion en otro componente

export default Login;