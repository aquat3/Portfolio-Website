import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import { Carousel } from 'react-responsive-carousel';

class Skills extends React.Component{
  
    render(){
     return(
      <Carousel className="skills-carousel">
          <div className="skills-carousel-item">
         <img
              alt='html icon'
               src={require('../assets/html5.png')}/>
          <p className="toolIcon">HTML5</p>
         </div>
         <div className="skills-carousel-item"><img 
               
              alt='css icon'
                src={require('../assets/css.png')} />
           <p className="toolIcon">
           CSS3</p>
         </div>
          <div className="skills-carousel-item"><img src={require('../assets/js.png')}  alt='JavaScript icon'/>
            <p className="toolIcon">JavaScript</p>
            </div>
          <div className="skills-carousel-item"><img src={require('../assets/jquery.png')}  alt='jQuery icon'/>
          <p className="toolIcon">jQuery</p>
          </div>
          <div className="skills-carousel-item"><img src={require('../assets/ReactJs.png')}  alt='React.js icon'/>
          <p className="toolIcon">React</p>
          </div>
          <div className="skills-carousel-item"><img src={require('../assets/sql.jpg')}  alt='sql database icon'/>
          <p className="toolIcon">SQL</p>
          </div>
          <div className="skills-carousel-item"><img src={require('../assets/java.jpg')}  alt='Java icon'/>
          <p className="toolIcon">Java</p>
          </div>
          <div className="skills-carousel-item"><img src={require('../assets/python.jpg')}  alt='Java icon'/>
          <p className="toolIcon">Python</p>
          </div>
          <div className="skills-carousel-item"><img src={require('../assets/mongodb.png')}  alt='MongoDB icon'/>
          <p className="toolIcon">MongoDB</p>
          </div>
               </Carousel>
               
    
     );
     
   }
   
    
 }

 export default Skills;