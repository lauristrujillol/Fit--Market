import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

        const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

        const handleVaciar = () => {
            vaciarCarrito()
        }

  return (
    <div className='container'>
      <h1 className='main-title'>Carrito</h1>

      {
        carrito.map((prod) => (
            <div key={prod.id}>
                <br />
                <h3>{prod.titulo}</h3>
                <p>Precio unidad ${prod.precio}</p>
                <p>Precio total ${prod.precio * prod.cantidad}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <br />
            </div>
        ))
      }


    {
    
    carrito.length > 0 ?  
    <>
        <h2>Valor total: ${precioTotal()} </h2>
        <button className='agregar-al-carrito' onClick={handleVaciar}>Limpiar carrito</button>
        <br />
        <Link className='agregar-al-carrito' to="/check">Finalizar compra</Link>
    </> :
    <h3>El carrito está vacío</h3>
    }
   
      
     
    </div>
  )
}

export default Carrito
