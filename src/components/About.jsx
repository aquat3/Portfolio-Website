import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class AboutLeft extends React.Component{
    render(){
    return(
      <div className='aboutLeft'>
      
      <img  
      src ={require('../assets/Tofik.jpeg')}
      alt='Professional Headshot of Tofik Mahdi'
      />
       
    </div>
    );
  }
       }
  
  
  
       class AboutRight extends React.Component{
    render(){
    return(
      <div className='aboutRight'>
      
        <div class='bio'>
          
        <ScrollAnimation animateOnce={true} animateIn='slideInRight' duration={0.3}>
          <p>Hello World, my name is Tofik Mahdi and I am a software developer with 3 years of experience who loves finding innovative solutions to solve everyday problems.</p></ScrollAnimation >
          
          <ScrollAnimation animateOnce={true} animateIn='slideInRight' duration={0.3}><p>I have been programming since I was 17 with C++, but eventually picked up web development 
             after being curious as to how websites work and
             I fell in love. After discovering my passion for coding I realized this is What I wanted 
             to do for my career.</p></ScrollAnimation >
          <ScrollAnimation animateOnce={true} animateIn='slideInRight' duration={0.3}>
             <p>I am currently employed at Deloitte Consulting as a Solution Specialist with a focus on Java. 
               As of now I am currently unavailable on the job market. Thank you for taking the time to visit my portfolio, I look forward to working
               with you in the future.</p>
          </ScrollAnimation >
          </div>
      
    </div>
    );
  }
       }
  
  
  class About extends React.Component{
    
     render(){
      return(
      <div className='about-wrap'>
           
             <AboutLeft/>
          <AboutRight/>
        </div>
      
      )
     }
    
  }

  export default About;