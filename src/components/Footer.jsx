import React from 'react';
class Footer extends React.Component{
  
 
    render(){
     return(
     <div id='contact' className='footer'>
         <ul className='leftFoot'>
            
           <li><h3>Contact</h3>
              
 </li>
           <li className='cont'>
          <span className='cell '>
           <a href="tel:240-704-2290">
           <img  alt='phone icon'
           src={require('../assets/phone-icon-circle-white.png')}/>
           <a className='phone'>240-704-2290</a>
           </a></span>
            
           <span className='emaill'>
           <a href="mailto:tofikmahdi@gmail.com">
           <img  alt='email icon'
           src={require('../assets/email-icon.png')}/>
           <a className='email'>tofikmahdi@gmail.com</a>
           </a></span>
           </li>
             <li className='copyright'>Copyright © Tofik Mahdi 2022
 </li>
         </ul>  
          <ul className='rightFoot'>
         <li><h3>Social Media</h3>
 </li>
            <li className='socialIcons'>
            
           <a href='https://codepen.io/aquat3/' target='_blank'> 
           <img  alt='codepen icon'
           src={require('../assets/codepen.png')}/>
            </a>
 
             <a href='https://github.com/aquat3/' target='_blank'>
             <img  alt='github icon'
             src={require('../assets/github-icon-png-29.jpg')}/>
               </a>
            
              <a href='https://www.linkedin.com/in/tofik-mahdi-280b5a139/' target='_blank'>
               <img  alt='linkedin icon'
               src={require('../assets/linkedin.png')}/>
                </a>
            </li>
            <li  className='copyright-mobile'>Copyright © Tofik Mahdi 2022
 </li>
         </ul>
     </div>
     );
     
   }
   
   
 }
 
 export default Footer;