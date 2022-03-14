import React from 'react';

class Projects extends React.Component{
  
 
    render(){
     return(
     <div className='projects'>
         <div className='proj calc'>
 <div className='proj-desc'><a href='https://codepen.io/aquat3/full/xmQrXY' target='_blank'>
   <div className='proj-desc-name'>
   <h3>jQuery Calculator</h3>
   <hr/>
   <img  alt='html icon'
              src={require('../assets/htmlWhite.jpg')}/>
              <img  alt='css icon'
              src={require('../assets/css3-white.png')}/>
                <img  alt='jQuery icon'
              src={require('../assets/jquerywhite.jpg')}/>
   </div></a>
 <div className='projectDescription'>
 This was the first project that I worked on when I first started learning Web Development.
 It's a simple calculator built using HTML, CSS, and JavaScript(jQuery).
 </div>
 
 </div>
         </div>
          <div className='proj tic'>
          <div className='proj-desc'><a href='https://codepen.io/aquat3/full/exeVeR' target='_blank'>
   <div className='proj-desc-name'>
   <h3>Tic Tac Toe</h3>
   <hr/>
   <img  alt='html icon'
              src={require('../assets/htmlWhite.jpg')}/>
              <img  alt='css icon'
              src={require('../assets/css3-white.png')}/>
                <img  alt='JavScript icon'
              src={require('../assets/js.jpg')}/>
   </div></a>
   <div className='projectDescription'>
 This was the second project that I worked on.
 It's a game of Tic Tac Toe built using HTML, CSS, and JavaScript without any libraries or frameworks.
 </div>
 </div>
            </div>
         <div className='proj quotes'>
         <div className='proj-desc'><a href='https://www.agencyq.com/our-work' target='_blank'>
   <div className='proj-desc-name'>
   <h3>agencyQ Case Studies</h3>
   <hr/>
   <img  alt='html icon'
              src={require('../assets/htmlWhite.jpg')}/>
              <img  alt='css icon'
              src={require('../assets/css3-white.png')}/>
                <img  alt='JavScript icon'
              src={require('../assets/js.jpg')}/>
   </div></a>
   <div className='projectDescription'>
   I built a new template for agencyQ's case studies for client work.
    I ensured that the new template was repsonsive and could easily handle the existing 
    case studies on the site. 
 </div>
 </div>
         </div>
          <div className='proj portfolio'>
        
         <div className='proj-desc'>  <a href='#'>
   <div className='proj-desc-name'>
   <h3>Portfolio Website</h3>
   <hr/>
   <img  alt='html icon'
              src={require('../assets/htmlWhite.jpg')}/>
              <img  alt='css icon'
              src={require('../assets/css3-white.png')}/>
                <img  alt='React icon'
              src={require('../assets/React.js_logo-512.png')}/>
   </div></a>
   <div className='projectDescription'>
   I created my portfolio website using React and Visual Studio
 Code with Github pages for deployment. I designed the page
 myself while using other portfolios for inspiration. 
 </div>
 </div>
          </div>
     </div>
     );
     
   }
   
   
 }

 export default Projects;