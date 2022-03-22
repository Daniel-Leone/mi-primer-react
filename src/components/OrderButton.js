import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { TotalCartContext } from './CartContext'
import SuccessfulPurchase from './SuccessfulPurchase';
import { render } from '@testing-library/react';

import arrowReturn from './images/flecha-izquierda.png'

const OrderButton = () => {

    const {cart} = useContext(TotalCartContext)

    const nId = ()=>{
        return cart.map( i => i.item.id)
    }

    const title = ()=>{
        return cart.map(t => t.item.title)
    }

    const price = ()=>{
        return cart.map(p => p.item.price)
    }

    const quantity = ()=>{
        return cart.map(q => q.quantity)
    }

    const [lastId, setLastId] = useState()

    const priceAll =()=>{
        return cart.reduce((qty, value)=>(qty + (value.quantity * value.item.price)), 0).toFixed(2)
    }

    const [userName, setUserName] = useState('')

    const [userPhone, setUserPhone] = useState('')

    const [userEmail, setUserEmail] = useState('')
    
    const [confirmUserEmail, setConfirmUserEmail] = useState('')

    const [userDirection, setUserDirection] = useState('')

    const handleUserNameChange = ({target}) =>{
        setUserName(target.value)
    }

    const handleUserPhoneChange = ({target}) =>{
        setUserPhone(target.value)
    }

    const handleUserEmailChange = ({target}) =>{
        setUserEmail(target.value)
    }

    const handleConfirmUserEmailChange = ({target}) =>{
        setConfirmUserEmail(target.value)
    }

    const handleUserDirectionChange = ({target}) =>{
        setUserDirection(target.value)
    }

    const dateOfPurchase = new Date();
    
    const db = getFirestore();

    const buyHandler = async () => {
        const order = {
            buyer: {
                name: userName,
                phone: userPhone,
                email: userEmail,
                direction: userDirection,
                date: dateOfPurchase
            },
            
            items: [
                {
                    id: nId(),
                    title: title(),
                    price: price(),
                    quantity: quantity()
                }
            ],

            total: priceAll()
        };

        const {id} = await addDoc(collection(db, "orders-store"), order);
        setLastId(id)
        
        render(<SuccessfulPurchase id={id}/>)
    }

    return (
    <>
     {  <Link to={'/cart'}> <img src={arrowReturn} className='return'/> </Link>}

        <div className="input-form">
            <input type="text" placeholder="Nombre" value={userName} onChange={handleUserNameChange} required/>
            <input type='number' placeholder="Numero" value={userPhone} onChange={handleUserPhoneChange} required/>
            <input type='email' placeholder="Email" value={userEmail} onChange={handleUserEmailChange} required/>
            <input type='email' placeholder="Confirme su email" value={confirmUserEmail} onChange={handleConfirmUserEmailChange} required/>
            <input type="text" placeholder="Direccion" value={userDirection} onChange={handleUserDirectionChange} required/>

            {(userName === '' || userPhone === '' || userEmail === ''  || userDirection === '')
            ?   
                
                (userEmail !== confirmUserEmail) ?

                <>
                    <span style={{backgroundColor: ' var(--cta-color)', borderRadius: '8px', color: '#f1f1f1', padding:'.2rem .4rem'}}>
                        Compruebe que ambas direcciones de email coincidan
                    </span>

                    <button disabled className='disabled' style={{ margin: '1.2rem auto .8rem'}}>Finalizar compra</button>
                </>

                :

                <button disabled className='disabled' style={{ margin: '1.2rem auto .8rem'}}>Finalizar compra</button>
                
            : 
            
                <button  className='buy-button' style={{cursor: 'pointer', margin: '1.2rem auto .8rem'}} onClick={buyHandler}>Finalizar compra</button>}           
        </div>

    </>
    )
}

export default OrderButton