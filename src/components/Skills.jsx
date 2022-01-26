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