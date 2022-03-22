import React from 'react';

const Contact = ({img, url}) => {
  return(
      <a href={url} className='contactImg' target='_blank'>
          <img src={img} style={{objectFit: 'scale-down', width: '100%'}}/>
      </a>
  )
};

export default Contact;
