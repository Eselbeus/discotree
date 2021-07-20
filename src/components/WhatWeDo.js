import React from 'react'
import vs from '../assets/whatwedovs.jpeg'
import vs0 from '../assets/vs0.jpeg'
import vs2 from '../assets/whatwedovs2.jpeg'
import vs3 from '../assets/whatwedovs3.jpeg'
import vs4 from '../assets/vs4.jpeg'
import com from '../assets/whatwedocom.jpg'
import com2 from '../assets/whatwedocom2.jpeg'
import com3 from '../assets/whatwedocom3.jpeg'
import com4 from '../assets/com4.jpeg'
import mus from '../assets/whatwedom.jpeg'
import mus2 from '../assets/whatwedomus2.jpeg'
import mus3 from '../assets/whatwedomus3.jpeg'
import party0 from '../assets/party0.jpeg'
import party1 from '../assets/party1.jpeg'
import bhav from '../assets/gallery/BhavBlue.jpeg'
import pp from '../assets/whatwedopp.jpeg'
import pp2 from '../assets/whatwedopp2.jpeg'
import pp3 from '../assets/whatwedopp3.jpeg'
import '../App.css';

class WhatWeDo extends React.Component {

  componentDidMount() {
    let image = document.getElementsByClassName("variety-show-images")[0];
    let currentPos = 0;
    let images = [vs0, mus, vs4]
      function varietyShowPhotos() {
         if (++currentPos >= images.length)
             currentPos = 0;
         image.src = images[currentPos];
      }
    setInterval(varietyShowPhotos, 3000);

    let imageCom = document.getElementsByClassName("comedy-images")[0];
    let currentPosCom = 0;
    let imagesCom = [com, com3, com4]
      function comedyPhotos() {
         if (++currentPosCom >= imagesCom.length)
             currentPosCom = 0;
         imageCom.src = imagesCom[currentPos];
      }
    setInterval(comedyPhotos, 3250);

    let imageParty = document.getElementsByClassName("party-images")[0];
    let currentPosParty = 0;
    let imagesParty = [party0, party1, vs3, bhav]
      function partyPhotos() {
         if (++currentPosParty >= imagesParty.length)
             currentPosParty = 0;
         imageParty.src = imagesParty[currentPosParty];
      }
    setInterval(partyPhotos, 2000);
  }

  render() {
    return(
      <div className='whatwedo' id='whatwedo'>
        <div className="whatwedo-text-container">
          <h1 className="header-text">DISCO TREE</h1>
          <p className="whatwedo-intro">Disco Tree was created during the Covid-19 pandemic. The idea was to create an outdoor space so that artists could perform while still being socially distant. The show started as an open mic and grew into a bigger show featuring professional comedians, musicians, dancers, and performance artists from New York City.</p>
          <p className="whatwedo-intro">Disco Tree specializes in live outdoor events. We use the latest in portable sound and lighting equipment to change outdoor environments into performance spaces. Like a tree, each Disco Tree event is different and unique. The events range from live music, stand-up and dance parties.</p>
        </div>
        <div className="whatwedo-photo-wrapper">
          <div className="whatwedo-photo-container">
            <div className="whatwedo-panel variety-shows">

              <img className="whatwedo-image variety-show-images" src={vs0}/>

              <div className="whatwedo-text">
                <h2>VARIETY SHOWS</h2>
                <p>The Disco Tree Variety show features live musicians, comics, and DJ's in a weekly show located in Brooklyn's Prospect Park. The variety show started in July of the 2020 pandemic.</p>
              </div>
            </div>
            <div className="whatwedo-panel comedy">

              <img className="whatwedo-image comedy-images" src={com}/>

              <div className="whatwedo-text">
                <h2>COMEDY</h2>
                <p>Disco tree features professional and comedians and up-and-coming conics from New York. The disco tree comedy show has also been featured in Time out New York. Bring a blanket to the park and enjoy the comedy.</p>
              </div>
            </div>

            <div className="whatwedo-panel party">

              <img className="whatwedo-image party-images" src={party0}/>

              <div className="whatwedo-text">
                <h2>PARTY/POP-UP</h2>
                <p>Loud bass, bright lights, and cool DJs. With these three ingredients, any place can become a Discotree dance party. Sometimes the party goes portable so keep an eye out for a "Porto-Party" on a street corner near you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default WhatWeDo;
