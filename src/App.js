import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar'

import Cart from './components/Cart';
import OrderButton from './components/OrderButton';
import { Navigate } from 'react-router-dom';

import { TotalCartContext } from './components/CartContext'
import { useContext } from 'react';
import { useState } from 'react'

// import { Prod } from './components/products';
// import { fileUpload } from './components/firebase/fileUpload'
// import db from './components/firebase/firebase';


// import { addDoc, collection } from 'firebase/firestore';

export default function App() {

//   /* MOSTRAR ADD DOCS */

  //  const arrayUpload =  () => {

  //   Prod.forEach(async (element) => {
  //     const imgURL = await fileUpload(element.image)

  //     addDoc(collection(db, 'Books'), {...element, image: imgURL })

  //   })

  // }

  return (
    <BrowserRouter>

      <NavBar/>
      {/* <button onClick={arrayUpload} style={{zIndex: '1', position: 'absolute', top: '5rem'}}>SUBIR COSAS</button> */}

      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />

        <Route exact path="/product/:itemId" element={<ItemDetailContainer />} />

        <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />

        <Route path='/cart' element={<Cart/>}></Route>

        <Route path='/order-button' element={<OrderButton/>} />

      </Routes>

    </BrowserRouter>
  );
}
