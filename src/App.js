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
    this.state={scr:''}
  }
  
  listenScrollEvent = e => {
    if (window.scrollY > 0) {
      this.setState({scr: 'linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,0) 200%)'})
    }  else{
      this.setState({scr:''})
    }
  }
 
  
componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  
   render() {
  
   
    return (
    <div style={{background: this.state.scr}} className='navBar'>
      
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
		{
			quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			name:"Francis of Assisi"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Don't watch the clock; do what it does. Keep going.",
	    	name:"Sam Levenson"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"Expect problems and eat them for breakfast.",
	    	name:"Alfred A. Montapert"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	name:"Arthur Ashe"
	    },
	    {
	    	quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
	    	name:"Samuel Beckett"
	    },
	    {
	    	quote:"Be yourself; everyone else is already taken.",
	    	name:"Oscar Wilde"
	    },
	    {
	    	quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
	    	name:"Albert Einstein"
	    },
	    {
	    	quote:"Always remember that you are absolutely unique. Just like everyone else.",
	    	name:"Margaret Mead"
	    },
	    {
	    	quote:"Do not take life too seriously. You will never get out of it alive.",
	    	name:"Elbert Hubbard"
	    },
	    {
	    	quote:"People who think they know everything are a great annoyance to those of us who do.",
	    	name:"Isaac Asimov"
	    },
	    {
	    	quote:"Procrastination is the art of keeping up with yesterday.",
	    	name:"Don Marquis"
	    },
	    {
	    	quote:"Get your facts first, then you can distort them as you please.",
	    	name:"Mark Twain"
	    },
	    {
	    	quote:"A day without sunshine is like, you know, night.",
	    	name:"Steve Martin"
	    },
	    {
	    	quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
	    	name:"Ellen DeGeneres"
	    },
	    {
	    	quote:"Don't sweat the petty things and don't pet the sweaty things.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Always do whatever's next.",
	    	name:"George Carlin"
	    },
	   
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"Dalai Lama"
	    }

  ];
  return quoteSource[Math.floor(Math.random() * 10)].quote;
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
   
    <img  src='https://images.unsplash.com/photo-1539418561314-565804e349c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'/>
     
  </div>
  );
}
     }



     class AboutRight extends React.Component{
  render(){
  return(
    <div className='aboutRight'>
    
      <div class='bio'>
        
      <ScrollAnimation animateIn='slideInRight' duration={0.3}>
        <p>Hello World, my name is Tofik Mahdi. I am a senior at the Univeristy of 
          Maryland graduating in Fall 2019.I love the internet and I plan on 
          leaving a digital footprint in it.</p></ScrollAnimation >
        
        <ScrollAnimation animateIn='slideInLeft' duration={0.3}><p>I started coding since I was 17 in C++ but I eventually picked up web development 
          a couple years later after being curious as to how websites work and
           I fell in love. After discovering web dev I realized this is What I wanted 
           to do for my career.</p></ScrollAnimation >
        <ScrollAnimation animateIn='slideInRight' duration={0.3}>
           <p>My skills are currently more geared towards Front End but I plan on picking up back end tools in the future. I will take a course on Back End development with PHP and MySQL this fall so I will have some knowledge by the time I graduate.</p>
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
  constructor(props){
    super(props);
    this.state={
      iconLabel:{'display':'none'},iconShow:{opacity:0.7}
    }
   this.handleHover=this.handleHover.bind(this);
  this.handleLeave=this.handleLeave.bind(this);
  }
 
  handleHover(){
    //this.setState({iconLabel:{'display':'block'},iconShow:{opacity:1}})
  }
  
  handleLeave(){
     //this.setState({iconLabel:{'display':'none'},iconShow:{opacity:0.7}})
  }
   render(){
    return(
    <div className='skills'>
      <ul className="tools">
        <li><img //onMouseEnter={this.handleHover} 
      //onMouseLeave=  {this.handleLeave}      
             // style={this.state.iconShow} 
              className='toolIcon' src='https://caleb-ellis.github.io/assets/img/html5.svg'/>
          <p   //style={this.state.iconLabel}
          >HTML5</p>
        </li>
        <li><img 
              //onMouseEnter={this.handleHover} 
     // onMouseLeave=  {this.handleLeave}      
             // style={this.state.iconShow} 
              className='toolIcon' src='https://caleb-ellis.github.io/assets/img/css3.svg'/>
          <p //style={this.state.iconLabel}
          >CSS3</p>
        </li>
         <li><img className='toolIcon' src='https://caleb-ellis.github.io/assets/img/js.png'/>
           <p>JavaScript</p>
           </li>
         <li><img className='toolIcon' src='https://caleb-ellis.github.io/assets/img/jquery.svg'/>
         <p>jQuery</p>
         </li>
         <li><img className='toolIcon' src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'/>
         <p>React</p>
         </li>
         <li><img className='toolIcon' src='https://pngimg.com/uploads/mysql/mysql_PNG9.png'/>
         <p>MySQL</p>
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
        <img src='https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397200679/0b7dc65611a21bbd74ccd6c3ae406de6.png'/>
          </a>
          <p className='exp-desc q'>While at agencyQ I learned how to work in an agile environment 
          and was involved in redesigning the company homepage using the Hubspot  CMS, 
          and I also assisted other Front End developers with their projects via pair programming.</p>
          
        </div>  
         <div className='exp'>
        <a href='https://midamedical.org/' target='_blank'>
        <img className='mida' src='https://midamedical.org/static/media/logo.8b7d81c0.png'/>
         
          <span className='midamed'> MIDA</span></a>  <p className='exp-desc'> I worked in a remote team communicating via Slack and Github. I helped modify the company website written in React.js, wrote some unit tests, and I helped design an account-based database system for the website.</p>
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
<div className='proj-desc'>
  <div className='proj-desc-name'>
  <h3><a href='https://codepen.io/aquat3/full/xmQrXY' target='_blank'>jQuery Calculator</a></h3>
  <hr/>
  <img 
             src='http://aux.iconspalace.com/uploads/17575329542047224463.png'/>
             <img 
             src='https://www.icustomweb.com/icw-content/uploads/2018/01/css3-white.png'/>
               <img 
             src='https://flaticons.net/gd/makefg.php?i=icons/Brand%20Identity/Logo-JQuery.png&r=255&g=255&b=255'/>
  </div>
</div>
        </div>
         <div className='proj tic'>
         <div className='proj-desc'>
  <div className='proj-desc-name'>
  <h3><a href='https://codepen.io/aquat3/full/exeVeR' target='_blank'>Tic Tac Toe</a></h3>
  <hr/>
  <img 
             src='http://aux.iconspalace.com/uploads/17575329542047224463.png'/>
             <img 
             src='https://www.icustomweb.com/icw-content/uploads/2018/01/css3-white.png'/>
               <img 
             src='https://i.ibb.co/Y0w9cXj/js.png'/>
  </div>
</div>
           </div>
        <div className='proj quotes'>
        <div className='proj-desc'>
  <div className='proj-desc-name'>
  <h3><a href='https://codepen.io/aquat3/full/QPMxNL' target='_blank'>Random Quote Generator</a></h3>
  <hr/>
  <img 
             src='http://aux.iconspalace.com/uploads/17575329542047224463.png'/>
             <img 
             src='https://www.icustomweb.com/icw-content/uploads/2018/01/css3-white.png'/>
               <img 
             src='https://i.ibb.co/Y0w9cXj/js.png'/>
  </div>
</div>
        </div>
         <div className='proj portfolio'>
          
        <div className='proj-desc'>
  <div className='proj-desc-name'>
  <h3><a href='#'>Portfolio Website</a></h3>
  <hr/>
  <img 
             src='http://aux.iconspalace.com/uploads/17575329542047224463.png'/>
             <img 
             src='https://www.icustomweb.com/icw-content/uploads/2018/01/css3-white.png'/>
               <img 
             src='https://png.pngtree.com/svg/20170807/react_1353124.png'/>
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
          <a href="tel:240-704-2290">
          <img src='https://www.rightnetworks.com/assets/phone-icon-circle-white.png'/>
          <a className='phone'>240-704-2290</a>
          </a>
          <a href="mailto:aquat3@gmail.com">
          <img src='https://unite-production.s3.amazonaws.com/tenants/firstlutheran/pictures/113451/stjem_orig.png'/>
          <a className='email'>aquat3@gmail.com</a>
          </a>
          </li>
            <li className='copyright'>Copyright © Tofik Mahdi 2019
</li>
        </ul>  
         <ul className='rightFoot'>
        <li><h3>Social Media</h3>
</li>
           <li className='socialIcons'>
           
          <a href='https://codepen.io/aquat3/' target='_blank'> 
          <img src='https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-White-Large.png'/>
           </a>

            <a href='https://github.com/aquat3/' target='_blank'>
            <img src='https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg'/>
              </a>
           
             <a href='https://www.linkedin.com/in/tofik-mahdi-280b5a139/' target='_blank'>
              <img src='https://www.igbaffiliate.com/sites/all/themes/clarion_theme/images/linkedin.png'/>
               </a>
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
         <Home/>
      
         <div className='main-content'>
        <h2 id='about'>About Me</h2>
       <About/>
        <h2 id='skills'>Skills</h2>
        <Skills/>
        <h2 id='experience'>Experience</h2>
        <Experience/>
        <h2 id='projects'>Projects</h2>
        <Projects/>
        </div>
       
        <Footer/>
    </div>
    );
    
  }
  
  
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));

 
