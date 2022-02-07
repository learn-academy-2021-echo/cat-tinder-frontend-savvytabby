import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

class Footer extends Component {
  render() {
    return(
        <>
          <footer>
          <section className='footer'>
                 <div className='nav-links'>
                    <ul>
                      <NavLink to = "/" className='navbaritem'>Go To Homepage</NavLink>
                    </ul>
                    <br/>
                    <nav>
                      <a href="#top" className='navbaritem'>Take me to the top</a>
                    </nav>
                </div>
            </section>
          </footer>
      
        </>    
    ) 
  }
}

export default Footer