import React, { useState } from 'react';
import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css.png';
import jsIcon from '../../assets/icons/js.png';
import reactIcon from '../../assets/icons/react.png';
import gitIcon from '../../assets/icons/git.png';
import gitlabIcon from '../../assets/icons/gitlab.png';
import nodeIcon from '../../assets/icons/node.png';
import About from '../About/About';
import './header.css';

function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const presentacion = (
    <div className="slide-content grid-layout">
      <div className="text-section">
        <div className="header-text">
          <h1 className="saludo">¡Hola!</h1>
          <h2 className="nombre">Soy Aroa Clavijo Caravante</h2>
          <h2>Desarrolladora Frontend</h2>
          <p className="intro-frase">
            Creo interfaces atractivas, dinámicas y funcionales.
          </p>
          <div className="tech-icons" aria-label="Tecnologías que uso">
  <div className="slider">
    {[htmlIcon, cssIcon, jsIcon, reactIcon, gitIcon, gitlabIcon, nodeIcon].map((icon, i) => (
      <img key={`icon1-${i}`} src={icon} alt="" />
    ))}
    {[htmlIcon, cssIcon, jsIcon, reactIcon, gitIcon, gitlabIcon, nodeIcon].map((icon, i) => (
      <img key={`icon2-${i}`} src={icon} alt="" />
    ))}
  </div>
</div>
        </div>
      </div>
      {/* <div className="photo-section">
        <img src="/foto-aroa.jpg" alt="Foto de Aroa" className="photo" />
      </div> */}
    </div>
  );

  const slides = [presentacion, <About />];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <header className="header" id="inicio">
      <div className="header-content">
        <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Anterior">‹</button>
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="carousel-slide" key={index}>
                {slide}
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Siguiente">›</button>
      </div>
    </header>
  );
}

export default Header;