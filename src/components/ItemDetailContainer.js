import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';

import db from './firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const ref = doc(db, 'Books', itemId)

    getDoc(ref)
    .then( querySnapshot => {
      setProduct({...querySnapshot.data(), id: querySnapshot.id})
    })
    .catch(e => console.log(e))

  }, []);

  return <ItemDetail product={product} />;
};
