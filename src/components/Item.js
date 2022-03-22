import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, title, image, price }) => {
  return (

        <div className='items'>
          <h3 className='titleList'>{title}</h3>
          <span className='imgPreview'>
            <img src={image} alt={title} className='imgList'/>
          </span>
          <p className='priceList'>$ {price}</p>
          {<Link to={`/product/${id}`} style={{overflowY: 'hidden'}}><button className='details'>Ver detalle</button></Link>}
        </div>
  );
};