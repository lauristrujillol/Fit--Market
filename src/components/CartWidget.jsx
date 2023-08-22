import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);
  return (
    <div>
      <i className="bi bi-cart3"></i>
      <Link className="menu-link" to="/carrito">
        <span className='numerito'>{cantidadEnCarrito ()}</span>
      </Link>
      
    </div>
  )
}

export default CartWidget
