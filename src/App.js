import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import WhatWeDo from './components/WhatWeDo'
import About from './components/About'
import Events from './components/Events'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Footer from './components/Footer'

import './App.css';

function App() {


  return (
    <div className="App">
      <Nav />
      <Home />
      <WhatWeDo />
      <Events />
      <WhyUs />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
