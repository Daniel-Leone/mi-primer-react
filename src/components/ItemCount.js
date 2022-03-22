import React from "react";
import { useState } from "react";

function State ({stock, initial, onAdd}){
    const [amount, setAmount] = useState(initial);

    const addItem = ()=>{
        onAdd(amount)
    }

    return(
            <>
                <div className="stock">
                    { amount === 10 ?  
                        <p style={{fontSize: '16px', color: '#d21', fontWeight: '600'}}>Sin stock</p>
                                    :
                        <p className='stockAcount'>Stock disponible: {stock - amount}</p>
                    }
                </div>
                
                <div className="amountContainer">

                    <button disabled={amount === 1} className='quantitySelector' onClick={()=> amount > initial ? setAmount(amount - 1) : null}>-</button>

                    <div className="userStock">{amount}</div>

                    <button disabled={amount === stock} className='quantitySelector' onClick={()=> amount < stock ? setAmount(amount + 1) : null}>+</button>

                </div>

                <button onClick={addItem} className='buy-button'>Agregar al carrito</button>
            </>
    )
}

export default State;