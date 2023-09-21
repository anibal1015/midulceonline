import React from 'react'

const Producto = (props) => {
  return (
    <div>
        <td>{props.id}</td>
        <td>{props.nombre}</td>
        <td>{props.cantidad}</td>
        <td>{props.valor}</td>
    </div>
  )
}

export default Producto