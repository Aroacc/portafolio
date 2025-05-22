import React, { useState } from 'react';
import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css.png';
import jsIcon from '../../assets/icons/js.png';
import reactIcon from '../../assets/icons/react.png';
import gitIcon from '../../assets/icons/git.png';
import gitlabIcon from '../../assets/icons/gitlab.png';
import nodeIcon from '../../assets/icons/node.png';
import About from '../About/About';
import Projects from '../Projects/Projects';
import './header.css';

function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const presentacion = (
    <div className="slide-content">
      <img src="/foto-aroa.jpg" alt="Foto de Aroa" className="photo" />
      <div className="header-text">
        <h1>Aroa Clavijo Caravante</h1>
        <h2 className="h1">Desarrolladora Frontend</h2>
        <p className="intro-frase">
    Creo interfaces atractivas, dinámicas y funcionales.
  </p>
        <div className="tech-icons">
          <img src={htmlIcon} alt="HTML" />
          <img src={cssIcon} alt="CSS" />
          <img src={jsIcon} alt="JavaScript" />
          <img src={reactIcon} alt="React" />
          <img src={gitIcon} alt="Git" />
          <img src={gitlabIcon} alt="GitLab" />
          <img src={nodeIcon} alt="Node.js" />
        </div>
      </div>
    </div>
  );

  const slides = [
    presentacion,
    <About />,
    <Projects />,
   
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <header className="header" id="inicio">
      <div className="header-content">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>‹</button>
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
        <button className="carousel-btn next-btn" onClick={nextSlide}>›</button>
      </div>
    </header>
  );
}

export default Header;
