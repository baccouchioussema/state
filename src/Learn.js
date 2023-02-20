import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../src/img/est.jpg'
class Learn extends Component {
    state={
      Person:{
        fullName:'oussema baccouchi',
        bio : 'hello world!!!!  ',
        imgsrc: img,
        profession: 'playing',
      },
      shows:false,
    };
    toggleshow=()=>{
      this.setState({hi: !this.state.hi});
    };
      render() {
      const {fullName,bio,imgsrc,profession}=this.state.Person;
      
      return(
    
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     
          <button style ={{marginTop:'300px',width:'100px',border:'none',borderRadius:'8px',color:'white',backgroundColor:'gray'}}variant="success" onClick={this.toggleshow}>hi!!</button>
      {this.state.hi && (
     <div>
        
      <img  style={{width:'100px',borderRadius:'50%',height:'100px'}}className='myphoto' src={imgsrc} alt={fullName} />
      <div>
      <h1 style={{color:'#EB455F'}}>{fullName}</h1>
      <h2 style={{color:'#EB455F'}}>{profession}</h2>
      <p style={{color:'#EB455F'}}>{bio}</p>
   
      </div>
      </div>
      )}
        </div>
      );
      
    }
    
  }
  export default Learn;
  
  