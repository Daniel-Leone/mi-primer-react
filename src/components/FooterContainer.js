import React from 'react';
import Contact from './Contact';
import email from './images/email.png'
import IN from './images/linkedin.png'

const FooterContainer = () => {
  return(
      <div className='footerContainer'>

        <p style={{overflowY: 'hidden', marginTop: '1rem'}}> <b>"Dani's Thor"</b> fue creada como proyecto final de la cursada <b>"React.js"</b> en <i>"CoderHouse"</i></p>

        <p style={{overflowY: 'hidden', marginTop: '1rem'}}>© 2022 Dani's Thor</p>

        <div className='contactContainer'>
          <Contact img={email} url= 'mailto:danielleone60@gmail.com'/>
          <Contact img={IN} url= 'https://www.linkedin.com/in/daniel-leone-62b06a1b6/'/>
        </div>

      </div>
  )
};

export default FooterContainer;
