import React, { useState } from 'react';
import '../styles/Carousel.css';
import { GrNext, GrPrevious } from "react-icons/gr";


const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImage === lastIndex;
    const index = shouldResetIndex ? 0 : currentImage + 1;
    console.log(images[index])
    setCurrentImage(index);
  };

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImage === 0;
    const index = shouldResetIndex ? lastIndex : currentImage - 1;
    console.log(images[index])
    setCurrentImage(index);
  };
  
  return (
    <div className="carousel-container">
      <div className="carousel-images" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        {images.map((image, index) => (
          <div className="carousel-image" key={index} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <video width="640" height="360" autoPlay muted loop style={{ display: currentImage === index ? 'block' : 'none' }}>
              <source src={image.url} type="video/mp4" />
            </video>
            <div className="carousel-text">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
              <a href={image.link} target='_blank'>Repositorio GitHub</a>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-prev" onClick={prevSlide}><GrPrevious /></button>
      <button className="carousel-next" onClick={nextSlide}><GrNext /></button>
    </div>
  );
};

export default Carousel;
