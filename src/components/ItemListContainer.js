import React, { useState, useEffect } from 'react';
import  {ItemList}  from './ItemList';
import { useParams } from 'react-router-dom';

import db from './firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import FooterContainer from './FooterContainer';

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(async () => {

    const myItems = categoryId ?
      query(collection(db, 'Books'), where('category', '==', categoryId))
      :
      collection(db, 'Books');

    try {
      const querySnapshot = await getDocs(myItems)

      setItems(querySnapshot.docs.map(el => {
        return { ...el.data(), id: el.id }
      }))
    }
    catch {
      console.log("SE ROMPIO")
    }

  }, [categoryId]);

  return(
    <>
      <ItemList items={items} />
      <FooterContainer/>
    </>
  )
};