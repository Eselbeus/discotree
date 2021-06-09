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

function Gallery(){
  return(
    <div className='gallery' id='gallery'>
      <div className="gallery-main">
        <img className="gallery-img" src={g1}/><img className="gallery-img" src={g2}/><img className="gallery-img" src={g3}/>
        <img className="gallery-img" src={g4}/><img className="gallery-img" src={g5}/><img className="gallery-img" src={g6}/>
      </div>
      <div className="gallery-lower">
        <img className="gallery-img-l" src={g7}/><img className="gallery-img-l" src={g8}/><img className="gallery-img-l" src={g9}/>
        <img className="gallery-img-l" src={g10}/>
      </div>
    </div>
  )
}

export default Gallery;
