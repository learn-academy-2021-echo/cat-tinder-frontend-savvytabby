import React, { Component } from 'react';
import homeLogo from '../assets/home.jpg';
import '../App.css'

class Home extends Component {
  render() {
    return(
      <div className="homebody">
          <h1> Welcome to the world's largest cat dating site </h1>
          <img src = {homeLogo} alt = "logo" classname = "homepic" width ="600px" ></img>
      </div>
       
    )
  }
}

export default Home