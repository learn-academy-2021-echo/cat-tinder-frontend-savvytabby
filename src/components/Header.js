import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import catLogo from '../assets/catLogo.jpg';
import '../App.css'

class Header extends Component {
  render() {
    return(
        <>
          <header>
            <section className='header'>
              <section className='catLogo'>
                <NavLink to = "/" >
                <img src = {catLogo} alt = "logo for Header" ></img>
                </NavLink>
               
              </section>

              

              <section className='navbar'>
                 <div className='nav-links'>
                   <ul>
                     <NavLink to = "/catindex" className='navbaritem'>Meet the cat</NavLink>  
                   </ul>
                   <ul> 
                     <NavLink to = "/catnew" className='navbaritem'>Add a cat</NavLink>
                   </ul>
                </div>
                <hr className='header-seperator'/>
              </section>

            </section>

          </header>
          
        
        </>
    
    ) 
  }
}

export default Header