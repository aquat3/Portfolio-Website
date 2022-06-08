import React from 'react';

class Experience extends React.Component{
 
    render(){
     return(
     <div className='experience'>
         <div className='exp'>
         
         
         <a href='https://www2.deloitte.com/us/en.html' target='_blank'>
         <img id='deloitte-exp' class= 'exp-img' alt='deloitte' src= {require('../assets/deloitte.png')}/>
           </a>
           <p className='exp-desc q'>Deloitte is a multinational professional services 
           network with offices in over 150 countries and territories around the world. I currently work
           with Deloitte Consulting as a Solution Specialist with roles varying from Java to Python development.
           </p>
           
         </div> 

         <div className='exp'>
         
         
         <a href='https://tistatech.com/' target='_blank'>
         <img class= 'exp-img' alt='tista' src= {require('../assets/tista.png')}/>
           </a>
           <p className='exp-desc q'>TISTA was my first job after graduating college. While there, I worked
           onsite at out client CCDC Army Research Lab Adelphi Laboratory Center where I worked as a developer on a Fullstack application running
           on Java Springboot. I also deployed applications to our server using CI/CD via Gitlab. </p>
           
         </div> 

         <div className='exp'>
         
         
         <a href='https://www.agencyq.com/' target='_blank'>
         <img class= 'exp-img' alt='agencyQ' src= {require('../assets/agencyq.jpg')}/>
           </a>
           <p className='exp-desc q'>While at agencyQ, I learned how to work in an agile environment 
           and was involved in redesigning the company website using Hubspot CMS.
            I also assisted other Front End developers with their projects via pair programming, translated UX wireframes into code, and 
            performed cross browser testing for the site.</p>
           
         </div>  
          <div className='exp'>
         <a href='https://midamedical.org/' target='_blank'>
         <img class= 'exp-img' alt='MidaMedical' className='mida' src={require('../assets/logo.8b7d81c0.png')}/>
          
           <span className='midamed'> MIDA</span></a>  
           <p className='exp-desc'>At MIDA I learned how to effectively use git for projects while working in a remote team communicating via Slack. I helped modify the company website written in React.js, wrote some unit tests, created process documentation for React components, 
          and I helped design an account-based database system for the website.</p>
         </div>  
     </div>
     );
     
   }

}

export default Experience;