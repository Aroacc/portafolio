import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const starContainer = document.querySelector('.star-container');

    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.top = `${Math.random() * window.innerHeight}px`;
      starContainer.appendChild(star);

      // Animar la estrella
      setTimeout(() => {
        star.style.transform = `translateX(${Math.random() * 800}px) translateY(${Math.random() * 800}px)`;
        star.style.opacity = 0;
      }, 0);

      // Eliminar la estrella después de que termine la animación
      setTimeout(() => {
        star.remove();
      }, 2000); // Duración de la animación
    };

    const interval = setInterval(createStar, 300); // Crea una estrella cada 300ms

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      {/* Barra de navegación */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Contenedor de estrellas fugaces */}
      <div className="star-container"></div>

      {/* Contenido principal */}
        <Header />
        <About />
        <Projects />
        <Contact />
 
      {/* Pie de página */}
      <footer>
        <p>&copy; 2025 Aroa Clavijo | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;



