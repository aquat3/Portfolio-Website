import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { tsConstructorType } from '@babel/types';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state={scr:'',menu:'none',nav:'none'}
    this.handleClick=this.handleClick.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }
  handleClick(e){
     
    this.setState({menu:'block',nav:'none'})
  }
  handleClose(e){
    this.setState({menu:'none',nav:'block'})
  }
  listenScrollEvent = e => {
    if (window.scrollY > 0) {
      this.setState({scr: '#93d7ff'
       // 'linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,0) 200%)'
      })
    }  else{
      this.setState({scr:''})
    }
  }
 
  
componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  componentWillMount(){
   if (window.screen.width<=650)
    this.setState({nav:'block'});
  }
  
   render() {
  
   
    return (
    <div style={{background: this.state.scr}} className='navBar'>
      
      <div style={{display:this.state.nav}} className='menu'>
      <button onClick={this.handleClick} className='menuButton'>Menu</button>
      </div>
      
      <div className='fullMenu' style={{display:this.state.menu}}> 
      
      <ul>
        <li><button onClick={this.handleClose} className='close'>X</button></li>
        <li><a onClick={this.handleClose} href='#'>Home</a></li>
        <li><a onClick={this.handleClose} href='#about'>About</a></li>
        <li><a onClick={this.handleClose} href='#skills'>Skills</a></li>
        <li><a onClick={this.handleClose} href='#experience'>Experience</a></li>
        <li><a onClick={this.handleClose} href='#projects'>Projects</a></li>
         
        <li><a onClick={this.handleClose}  href='#contact'> Contact</a></li>
        
        </ul>

      </div>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
         
        <li><a href='#contact'> Contact</a></li>
        
        </ul>
        
      

      </div>
      
      
    )};
  
}

class Hero extends React.Component {
  constructor(props){

    super(props);
    this.quote=this.quote.bind(this);
  }
   quote(){
  var quoteSource=[
		
		 "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible."
			 
	    ,
	    
	    	"Believe you can and you're halfway there.",
	    	 
	    
	     
	    	"It does not matter how slowly you go as long as you do not stop.",
	    	 
	     
	    
	    	"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	 
	    
	    
	    	 
	    
	    
	    	"Don't watch the clock; do what it does. Keep going.",
	    	 
	   
	    
	    	"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	 
	    
	    
	    	"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	 
	    
	    
	    	"Expect problems and eat them for breakfast.",
	    	 
	    
	    
	    	"Start where you are. Use what you have. Do what you can.",
	    	 
	    
	    
	    	"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
	     
	    
	    
	    	"Be yourself; everyone else is already taken.",
	    	 
	    	 
	    
	    "Always remember that you are absolutely unique. Just like everyone else.",
	    	 
	   "Do not take life too seriously. You will never get out of it alive.",
	    	 
	  "People who think they know everything are a great annoyance to those of us who do.",
	    	 
	   "Procrastination is the art of keeping up with yesterday.",
	    	 
	   "Get your facts first, then you can distort them as you please.",
	    	 
	   "A day without sunshine is like, you know, night.",
	     
	   
	    	 
	   "Don't sweat the petty things and don't pet the sweaty things.",
	    	 
	   "Always do whatever's next.",
	     
	   "Hapiness is not something ready made. It comes from your own actions.",
	    	 
	   

  ];
  return quoteSource[Math.floor(Math.random() * 10)];
}
  
  render() {
    return (
      <div className='hero'>
    
        <h1>{this.quote()}</h1>
      <svg className="chevronDown" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
    </div>
    );
  }
}

class Home extends React.Component{
   render(){
    return(
      <div className='home'>
          <Nav/>
        <Hero/>
        </div>
      );
   }
}

 

     class AboutLeft extends React.Component{
  render(){
  return(
    <div className='aboutLeft'>
    
    <img  //src='https://images.unsplash.com/photo-1539418561314-565804e349c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    src ={require('../src/assets/umdLogo.jpg')}
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


class Skills extends React.Component{
  
   render(){
    return(
    <div className='skills'>
      <ul className="tools">
        <li><img 
             alt='html icon'
              className='toolIcon' src={require('../src/assets/html5.svg')}/>
          <span   
          >HTML5</span>
        </li>
        <li><img 
              
             alt='css icon'
              className='toolIcon' src={require('../src/assets/css3.svg')} />
          <span 
          >CSS3</span>
        </li>
         <li><img className='toolIcon' src={require('../src/assets/js.png')}  alt='JavaScript icon'/>
           <span>JavaScript</span>
           </li>
         <li><img className='toolIcon' src={require('../src/assets/jquery.svg')}  alt='jQuery icon'/>
         <span>jQuery</span>
         </li>
         <li><img className='toolIcon' src={require('../src/assets/React.js_logo-512.png')}  alt='React.js icon'/>
         <span>React</span>
         </li>
         <li><img className='toolIcon' src={require('../src/assets/mysql_PNG9.png')}  alt='MySQL icon'/>
         <span>MySQL</span>
         </li>
              </ul>
    </div>
    );
    
  }
  
  
}


class Experience extends React.Component{
 
   render(){
    return(
    <div className='experience'>
        <div className='exp'>
        <a href='https://www.agencyq.com/' target='_blank'>
        <img alt='agencyQ' src= {require('../src/assets/agencyq.jpg')}/>
          </a>
          <p className='exp-desc q'>While at agencyQ I learned how to work in an agile environment 
          and was involved in redesigning the company website using Hubspot  CMS.
           I also assisted other Front End developers with their projects via pair programming, translated UX wireframes into code, and 
           performed cross browser testing for the site.</p>
          
        </div>  
         <div className='exp'>
        <a href='https://midamedical.org/' target='_blank'>
        <img alt='MidaMedical' className='mida' src={require('../src/assets/logo.8b7d81c0.png')}/>
         
          <span className='midamed'> MIDA</span></a>  
          <p className='exp-desc'>At MIDA I learned how to effectively use git for projects while working in a remote team communicating via Slack. I helped modify the company website written in React.js, wrote some unit tests, created process documentation for React components, 
         and I helped design an account-based database system for the website.</p>
        </div>  
    </div>
    );
    
  }
  
  
}
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
             src={require('../src/assets/htmlWhite.jpg')}/>
             <img  alt='css icon'
             src={require('../src/assets/css3-white.png')}/>
               <img  alt='jQuery icon'
             src={require('../src/assets/jquery.svg')}/>
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
             src={require('../src/assets/htmlWhite.jpg')}/>
             <img  alt='css icon'
             src={require('../src/assets/css3-white.png')}/>
               <img  alt='JavScript icon'
             src={require('../src/assets/js.jpg')}/>
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
             src={require('../src/assets/htmlWhite.jpg')}/>
             <img  alt='css icon'
             src={require('../src/assets/css3-white.png')}/>
               <img  alt='JavScript icon'
             src={require('../src/assets/js.jpg')}/>
  </div></a>
  <div className='projectDescription'>
  I built a new template for agencyQ's case studies for client work.
   I made sure the new template was repsonsive and could easily handle the existing 
   case studies on the site. During my last week I completed the project and the existing case studies have now been migrated to this new format.
</div>
</div>
        </div>
         <div className='proj portfolio'>
       
        <div className='proj-desc'>  <a href='#'>
  <div className='proj-desc-name'>
  <h3>Portfolio Website</h3>
  <hr/>
  <img  alt='html icon'
             src={require('../src/assets/htmlWhite.jpg')}/>
             <img  alt='css icon'
             src={require('../src/assets/css3-white.png')}/>
               <img  alt='JavScript icon'
             src={require('../src/assets/React.js_logo-512.png')}/>
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
          src={require('../src/assets/phone-icon-circle-white.png')}/>
          <a className='phone'>240-704-2290</a>
          </a></span>
           
          <span className='emaill'>
          <a href="mailto:aquat3@gmail.com">
          <img  alt='email icon'
          src={require('../src/assets/email-icon.png')}/>
          <a className='email'>aquat3@gmail.com</a>
          </a></span>
          </li>
            <li className='copyright'>Copyright © Tofik Mahdi 2019
</li>
        </ul>  
         <ul className='rightFoot'>
        <li><h3>Social Media</h3>
</li>
           <li className='socialIcons'>
           
          <a href='https://codepen.io/aquat3/' target='_blank'> 
          <img  alt='codepen icon'
          src={require('../src/assets/codepen.png')}/>
           </a>

            <a href='https://github.com/aquat3/' target='_blank'>
            <img  alt='github icon'
            src={require('../src/assets/github-icon-png-29.jpg')}/>
              </a>
           
             <a href='https://www.linkedin.com/in/tofik-mahdi-280b5a139/' target='_blank'>
              <img  alt='linkedin icon'
              src={require('../src/assets/linkedin.png')}/>
               </a>
           </li>
           <li  className='copyright-mobile'>Copyright © Tofik Mahdi 2019
</li>
        </ul>
    </div>
    );
    
  }
  
  
}




class Portfolio extends React.Component{
  
 
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

ReactDOM.render(<Portfolio />, document.getElementById('root'));

 
