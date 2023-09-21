import React from 'react'

const Pedido = (props) => {
  return (
    <div>
        <td>{props.id}</td>
        <td>{props.nombre}</td>
        <td>{props.email}</td>
        <td>{props.entrega}</td>
        <td>{props.confiEntrega}</td>
    </div>
  )
}

export default Pedido