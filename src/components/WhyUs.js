import React from 'react'
import rob from '../assets/rob.jpeg'
import '../App.css';

function WhyUs(){
  return(
    <div className='whyus' id='whyus'>
      <div className="whyus-container">
        <div className="whyus-text">
          <h1 className="header-text">WHY US?</h1>
            <div className="bullet-wrapper">
              <div className="bullet"></div>
            </div>
          <p>Robert Montemarano Jr. Is the founder of Disco Tree. He is a musician, comedian, and producer that grew up in Brooklyn. Robert has been performing in New York for over 20 years, Before disco tree, Robert booked his own shows and house parties featuring musicians and comics.</p>
          <p>Robert has been doing stand-up for over 10 years. He's been producing and booking his own shows such as Comedy Beats, Sex, Comedy and Rock Roll, and the Disco Tree Variety Show. He has also performed at New York Comedy Club, Broadway Comedy Club, Greenwich Village Comedy Club, and various bars/venues throughout the five boroughs of New York.</p>
        </div>
        <img className="rob" src={rob}/>
      </div>
    </div>
  )
}

export default WhyUs;
