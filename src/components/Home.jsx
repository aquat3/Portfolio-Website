


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