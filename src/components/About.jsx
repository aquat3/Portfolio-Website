import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class AboutLeft extends React.Component{
    render(){
    return(
      <div className='aboutLeft'>
      
      <img  //src='https://images.unsplash.com/photo-1539418561314-565804e349c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
      src ={require('../assets/umdLogo.jpg')}
      alt='University of Maryland Mascot'
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
          <p>Hello World, my name is Tofik Mahdi and I am a senior at the Univeristy of 
            Maryland graduating this December. I love the internet and I plan on 
            leaving a digital footprint in it.</p></ScrollAnimation >
          
          <ScrollAnimation animateOnce={true} animateIn='slideInRight' duration={0.3}><p>I started programming since I was 17 in C++, but I eventually picked up web development 
            a couple years later after being curious as to how websites work and
             I fell in love. After discovering my passion for web development I realized this is What I wanted 
             to do for my career.</p></ScrollAnimation >
          <ScrollAnimation animateOnce={true} animateIn='slideInRight' duration={0.3}>
             <p>My skills are currently more geared towards the Front End but I plan on picking up Back End tools in the future. 
               I am currently enrolled in a FullStack Web Development course using Node.js for the Back End so I will have some knowledge by the time I graduate. 
               Thank you for taking the time to visit my portfolio, I am looking forward to working
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