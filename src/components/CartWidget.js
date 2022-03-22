import React from 'react'
import { Link } from 'react-router-dom'
import { TotalCartContext } from './CartContext'
import { useContext } from 'react'
import cartImg from './images/carrito-amarillo.png'


const CartWidget = () => {

    const {cart} = useContext(TotalCartContext)
    
    return (
        <Link to={'/cart'}> <li> 
            <img src={cartImg} className='cart'/>
            <span className='cartAmount'>{cart.length}</span> 
        
        </li> </Link>
    )
}

export default CartWidget
