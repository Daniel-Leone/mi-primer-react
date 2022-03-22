import { createContext, useState } from "react";

export const TotalCartContext = createContext({
    cart: []
})

export const CartContextProvider = (props) => {

    const [cart, setCart] = useState([])

    const addToCart = (prod)=>{
        setCart( (prevCart) =>{
            return prevCart.concat(prod)
        })
    }

    const removeProdFromCart = (prod) => {
        setCart(prevCart => {
            return prevCart.filter(e => e !== prod);
        });
    }

    const prodIsInCart = (prod) => {
        return cart.some( e => e === prod )
    }

    const clearCart = ()=>{
        setCart([])
    }

    const context = {
        cart: cart,
        addProd: addToCart,
        removeProdFromCart: removeProdFromCart,
        prodIsInCart: prodIsInCart,
        clearCart: clearCart
    }

    return (
            <TotalCartContext.Provider value={context}>
                <div className='cart-container'>
                    {props.children}
                </div>
            </TotalCartContext.Provider>
    )
}

