import React from 'react'
import banner from "../assets/logo.png"
import banner2 from "../assets/mmfa.png"
import logo2 from "../assets/disco-transparent.png"
import '../App.css';

function Home(){
  return(
    <div className='home' id="home">
      <img className="banner" src={banner2}/>
    </div>
  )
}

export default Home;
