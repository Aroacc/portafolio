import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import './components/footer/footer.css';
import Projects from './components/Projects/Projects';
import './components/About/About.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      {/* Barra de navegación */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Contenido principal */}
      <Header />
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
