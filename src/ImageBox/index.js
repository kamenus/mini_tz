import React from 'react';
import Image from '../Image'
import './index.css'

export default ({
  images,
}) => (
  <div className="imageContainer">
    {
      images.map( card => (
        <Image src={card} />
      ))
    }
  </div>
)
