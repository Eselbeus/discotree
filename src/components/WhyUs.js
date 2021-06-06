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
          <p>Robert Montemarano Jr. Is a musician, comedian, and DJ that grew up in Brooklyn. Robert has been performing in New York for over 20 years, following in his father's footsteps who is a musician as well. Before disco tree Robert booked his own house parties and organized events featuring musicians and comics.</p>
          <p>Robert started his musical career singing in rock and heavy metal bands as a teenager. At 19 he taught himself how to play drums. From then on he was singing in bands or playing drums with bands in NYC.</p>
          <p>Robert has been doing stand up for over 9 years. He's been producing and booking his own shows such as comedy beats and sex,comedy and rock roll. He has also performed at New York Comedy club, Broadway Comedy club, Greenwich village Comedy club and various bars throughout New York and Brooklyn.</p>
        </div>
        <img className="rob" src={rob}/>
      </div>
    </div>
  )
}

export default WhyUs;
