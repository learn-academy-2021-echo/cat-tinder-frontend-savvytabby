import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

class Footer extends Component {
  render() {
    return(
        <>
          <footer>
          <hr className='footer-seperator'/>  
          <section className='footer'>
              <section className='navbar'>
                 <div className='nav-links'>
                    <ul>
                      <NavLink to = "/" className='navbaritem'>Go To Homepage</NavLink>
                    </ul>
                    <nav>
                      <a href="#top" className='navbaritem'>Take me to the top</a>
                    </nav>
                </div>
              </section>
            </section>


                {/* <ul>
                  <NavLink to = "/">Go To Homepage</NavLink>
                </ul>
                <nav>
                  <a href="#top">Take me to the top</a>
                </nav> */}
            <hr className='footer-seperator'/>
          </footer>



        
               
        </>
    
    ) 
  }
}

export default Footer