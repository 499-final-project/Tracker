import { useState } from 'react'
import { slideData } from './slideshowdata'
import React from 'react'
import '../styles/slideshow.css'
import { Button } from 'reactstrap';

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const length = slideData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slideData) || slideData.length <= 0) {
    return null;
  }
  return (
    <div className='slideshow'>
      <Button className='left-arrow' onClick={prevSlide}>←</Button>
      {slideData.map((slide,index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <>
                <img src={slide.image} className='image' />
                <p>{slide.desc}</p>
              </>
            )}
          </div>
        );
      })}
      <Button className='right-arrow' onClick={nextSlide}>→</Button> 
    </div>
  )
}
