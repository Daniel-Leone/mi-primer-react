import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import State from './ItemCount'
import { TotalCartContext } from './CartContext'

import arrowReturn from './images/flecha-izquierda.png'

export const ItemDetail = ({ product }) => {

  const [changeButton, setChangeButton] = useState(true)

  const {addProd} = useContext(TotalCartContext)

  const onAdd = (count) =>{
    setChangeButton(false)
    addProd({item: product, quantity: count})
  }

  return (
    <>

    {  <Link to={'/'}> <img src={arrowReturn} className='return'/> </Link>}

      <div className='product-details'>

            <img src={product.image} alt={`${product.id}-${product.title}`} className="imgDesc" />

        <section className='info-container'>
          <h3 className='product-title'>{product.title}</h3>
          <div className='product-price'>${product.price}</div>
          <div className='product-desc'>{product.desc}</div>
    
          {
            changeButton ?
                        
            <div className='product-collector'>{<State stock={product.stock} initial={1} onAdd={onAdd}/>}</div>

            :

            <Link to={'/cart'}> <button className='buy-button'>Ir al carrito</button> </Link>
          }

        </section>
      </div>
    </>
  );
};
