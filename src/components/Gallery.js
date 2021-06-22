import React from 'react'
import '../App.css';
import g1 from '../assets/gallery/g1.jpeg'
import g2 from '../assets/gallery/g2.jpeg'
import g3 from '../assets/gallery/g3.jpeg'
import g4 from '../assets/gallery/g4.jpeg'
import g5 from '../assets/gallery/g5.jpeg'
import g6 from '../assets/gallery/g6.jpeg'
import g7 from '../assets/gallery/g7.jpeg'
import g8 from '../assets/gallery/g8.jpeg'
import g9 from '../assets/gallery/g9.jpeg'
import g10 from '../assets/gallery/g10.jpeg'
import g11 from '../assets/gallery/AudienceSpin.jpeg'
import g12 from '../assets/gallery/BigCrowd.jpeg'
import g13 from '../assets/gallery/SpinTunnel2.jpeg'
import g14 from '../assets/gallery/BhavBlue.jpeg'
import g15 from '../assets/gallery/KnowBadChilling.jpeg'
import g16 from '../assets/gallery/Rob.jpeg'
import g17 from '../assets/gallery/RobAndStevenPride.jpeg'
import g18 from '../assets/gallery/DTJoy.jpeg'



function Gallery(){
  return(
    <div className='gallery' id='gallery'>
      <div className="gallery-main">
        <img className="gallery-img" src={g11}/><img className="gallery-img" src={g12}/><img className="gallery-img" src={g13}/>
        <img className="gallery-img" src={g1}/><img className="gallery-img" src={g2}/><img className="gallery-img" src={g3}/>
        <img className="gallery-img" src={g4}/><img className="gallery-img" src={g5}/><img className="gallery-img" src={g6}/>
      </div>
      <div className="gallery-lower">
        <img className="gallery-img-l" src={g14}/><img className="gallery-img-l" src={g15}/><img className="gallery-img-l" src={g16}/>
        <img className="gallery-img-l" src={g17}/>
        <img className="gallery-img-l" src={g7}/><img className="gallery-img-l" src={g8}/><img className="gallery-img-l" src={g9}/>
        <img className="gallery-img-l" src={g10}/>
      </div>
      <div className="gallery-bottom">
        <img className="gallery-img" src={g18}/>
      </div>
    </div>
  )
}

export default Gallery;
