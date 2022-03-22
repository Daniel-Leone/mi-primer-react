import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import copy from './images/copy.png'

const SuccessfulPurchase = ({id}) => {

  const closeTicket = ()=>{
    return window.location = '/'
  }

  return(
        <div className='buyTicketContainer'>
            <div className='successfulPurchase'>

            <span className='closeTicket' onClick={closeTicket}>X</span>

                <h3>¡Su compra ha sido exitosa!</h3>
                <br/>
                <p> Su numero de orden es:</p>
                <br/>
                <span>{id}</span>
                <CopyToClipboard text={id}>
                  <img src={copy} className='copy' onClick={ () => alert('Id copiado correctamente') }/>
                </CopyToClipboard>

             </div>
        </div>
  )
};

export default SuccessfulPurchase;
