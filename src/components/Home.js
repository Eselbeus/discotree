import React from 'react'
import banner from "../assets/front-page-banner.png"
import '../App.css';

function Home(){
  return(
    <div className='home' id="home">
      <img className="banner" src={banner}/>
      <h1 className="main-title">DISCO TREE</h1>
    </div>
  )
}

export default Home;
