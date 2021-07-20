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
        <p><a className='press' href="hhttps://bronx.news12.com/brooklyn-events#!/show/?ser=Prospect%20Park%20Meadow%20(by%20the%20Garfield%20pl.entrance)">News 12 The Bronx</a></p>
        <p><a className='press' href="https://echomusings.com/podcast">Echomusings Podcast</a></p>
        <p><a className='press' href="https://patch.com/new-york/parkslope/friday-nite-disco-tree-variety-show-prospect-park">Parkslope Blog</a></p>
        <img className="aboutus-img" src={aboutus}/>
      </div>
    </div>
  )
}

export default About;
