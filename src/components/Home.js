import React from 'react'
import banner from "../assets/logo.png"
import logo2 from "../assets/disco-transparent.png"
import '../App.css';

function Home(){
  return(
    <div className='home' id="home">
      <img className="banner" src={banner}/>
    </div>
  )
}

export default Home;
