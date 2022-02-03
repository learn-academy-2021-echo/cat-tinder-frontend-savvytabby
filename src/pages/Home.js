import React, { Component } from 'react';
import homeLogo from '../assets/home.jpg';

class Home extends Component {
  render() {
    return(
       <>
          <h2> This is Home.js file section </h2>
          <img src = {homeLogo} alt = "logo" ></img>
       </>
       
    )
  }
}

export default Home