import moonIcon from '../assets/luna.png'; 
import '.../index.css';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      {/* Enlaces de navegación */}
      <div className="navbar-links">
      <h3>
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
        </h3>
      </div>

      {/* Botón para alternar entre modo oscuro y normal */}
      <button className="mode-toggle" onClick={toggleDarkMode}>
        <img src={moonIcon} alt="Modo Oscuro" />
      </button>
    </nav>
  );
}

export default Navbar;
