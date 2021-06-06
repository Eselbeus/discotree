import React from 'react'
import vs from '../assets/whatwedovs.jpeg'
import vs2 from '../assets/whatwedovs2.jpeg'
import vs3 from '../assets/whatwedovs3.jpeg'
import com from '../assets/whatwedocom.jpg'
import com2 from '../assets/whatwedocom2.jpeg'
import com3 from '../assets/whatwedocom3.jpeg'
import mus from '../assets/whatwedom.jpeg'
import mus2 from '../assets/whatwedomus2.jpeg'
import mus3 from '../assets/whatwedomus3.jpeg'
import pp from '../assets/whatwedopp.jpeg'
import pp2 from '../assets/whatwedopp2.jpeg'
import pp3 from '../assets/whatwedopp3.jpeg'
import '../App.css';

class WhatWeDo extends React.Component {

  componentDidMount() {
    let image = document.getElementsByClassName("variety-show-images")[0];
    let currentPos = 0;
    let images = [vs, vs2, vs3]
      function varietyShowPhotos() {
         if (++currentPos >= images.length)
             currentPos = 0;
         image.src = images[currentPos];
      }
    setInterval(varietyShowPhotos, 3000);

    let imageCom = document.getElementsByClassName("comedy-images")[0];
    let currentPosCom = 0;
    let imagesCom = [com, com2, com3]
      function comedyPhotos() {
         if (++currentPosCom >= imagesCom.length)
             currentPosCom = 0;
         imageCom.src = imagesCom[currentPos];
      }
    setInterval(comedyPhotos, 3250);

    let imageParty = document.getElementsByClassName("party-images")[0];
    let currentPosParty = 0;
    let imagesParty = [pp, pp2, pp3]
      function partyPhotos() {
         if (++currentPosParty >= imagesParty.length)
             currentPosParty = 0;
         imageParty.src = imagesParty[currentPosParty];
      }
    setInterval(partyPhotos, 2750);
  }

  render() {
    return(
      <div className='whatwedo' id='whatwedo'>
        <div className="whatwedo-text-container">
          <h2 className="special-text">DISCO TREE</h2>
          <h1 className="header-text">WHAT WE DO</h1>
          <p className="whatwedo-intro">Disco Tree specializes in live outdoor events. We use the latest in portable sound and lighting equipment to change outdoor environments into performance spaces. What makes disco tree event unique is that they can happen almost anywhere. Disco Tree events include dance parties, comedy shows, variety shows, musical acts, and circus performers.</p>
        </div>
        <div className="whatwedo-photo-wrapper">
          <div className="whatwedo-photo-container">
            <div className="whatwedo-panel variety-shows">

              <img className="whatwedo-image variety-show-images" src={vs}/>

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

              <img className="whatwedo-image party-images" src={pp}/>

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
