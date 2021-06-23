import React from 'react'
import aboutus from '../assets/Aboutus.jpg'
import '../App.css';

function About(){
  return(
    <div className='about' id='about'>
      <div className="about-wrapper">
        <h1 className="header-text">Press</h1>
        <h2 className="special-text">DISCO TREE</h2>
        <p><a className='press' href="https://www.timeout.com/newyork/comedy/disco-tree-variety-show">Time Out New York</a></p>
        <img className="aboutus-img" src={aboutus}/>
      </div>
    </div>
  )
}

export default About;
