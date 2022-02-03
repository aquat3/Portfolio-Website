import React from 'react';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

 class App extends React.Component{
  
 
   render(){
    return(
    <div>
         <Home className='home'/>
      
         <div className='main-content'>
         <ScrollAnimation animateOnce={true} animateIn='zoomIn' duration={0.3}>
           <h2 id='about'>About Me</h2>
           </ScrollAnimation>
       
       <About/>

       <ScrollAnimation animateOnce={true} animateIn='zoomIn' duration={0.3}> 
        <h2 id='skills'>Skills</h2>
        

        <Skills/>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn='zoomIn' duration={0.3}> 
        <h2 id='experience'>Experience</h2>
        
        <Experience/>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn='zoomIn' duration={0.3}> 
        <h2 id='projects'>Projects</h2>
        
        <Projects/>
       </ScrollAnimation>
        </div>
       
        <Footer/>
    </div>
    );
    
  }
  
  
}
export default App;


 
