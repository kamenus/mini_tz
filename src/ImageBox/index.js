import React from 'react';
import Image from '../Image'
import './index.css'

export default ({
  images,
  count,
}) => (
  <div className="imageContainer">
    {
      images.map( card => (
        <Image 
          src={card} 
          count={count}
        />
      ))
    }
  </div>
)
