import React, { useContext } from "react";
import { TotalCartContext } from './CartContext'
import { Link } from 'react-router-dom'
import OrderButton from "./OrderButton";
import arrowReturn from './images/flecha-izquierda.png'

const Cart = ()=>{

    const {cart, removeProdFromCart, clearCart} = useContext(TotalCartContext)

    const priceAll =()=>{
        return cart.reduce((qty, value)=>(qty + (value.quantity * value.item.price)), 0).toFixed(2)
    }

    return(
            <div className="final-cart">
                {  <Link to={'/'}> <img src={arrowReturn} className='return'/> </Link>}
                                    
                {cart.length > 0 ?

                <>

                <table className="container-products-in-cart">
                    <tr className="ul-cart">
                        <td>Producto</td>
                        <td>Precio</td>
                        <td>Cant.</td>
                        <td>Subt.</td>
                        <td><button className='emptyCart' onClick={ ()=> clearCart() }>Vaciar carrito</button></td>
                    </tr>

                    
                    {cart.map(e =>
                        <tr key={e.item.id} className= 'itemInCart'>
                            <td title={e.item.title} className='productCartTitle'>
                                { (e.item.title).slice(0, 15) + '...' }
                            </td>
                            <td className='productCartPrice'>${e.item.price}</td>
                            <td> <strong> {e.quantity} </strong> </td>
                            <td>${(e.item.price * e.quantity).toFixed(2)}</td>
                            <td className="removeProduct" onClick={ ()=> removeProdFromCart(e)}>X</td>
                        </tr>

                        )}
                        <span style={{display: 'none'}}> <OrderButton priceAll={priceAll}/> </span>

                </table>
                        
                        <tr className="resumeCart">
                                                
                            <td><h3 style={{color: 'black'}}> Total: </h3></td>

                            <td>{ <h3>${priceAll()}</h3> }</td>

                            <td>
                                <Link to={'/order-button'}>
                                    <button className="buy-button"> Comprar </button>
                                </Link>
                            </td>

                        </tr>
                </>
                     
                        :

                    <div style={{margin: 'auto', zIndex: '1', marginTop: '40vh'}}>
                        <p>¡Tu carrito está vacío!</p>
                        {<Link to={'/'}><button className="goHome"> Ver catálogo </button></Link>}
                    </div>
                }
        </div>
    )
}

export default Cart