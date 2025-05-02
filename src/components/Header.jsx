import '../App.css';
import htmlIcon from '../assets/icons/html.png'; // Asegúrate de que la ruta sea correcta
import cssIcon from '../assets/icons/css.png';
import jsIcon from '../assets/icons/js.png';
import reactIcon from '../assets/icons/react.png';
import gitIcon from '../assets/icons/git.png';
import gitlabIcon from '../assets/icons/gitlab.png';
import nodeIcon from '../assets/icons/node.png';

function Header() {
  return (
    <header className="header">
      <img src="/foto-aroa.jpg" alt="Foto de Aroa" className="photo" />
      <h1>Hola, soy Aroa Clavijo Caravante</h1>
      <p>Desarrolladora Frontend</p>

      <div className="tech-icons">
        {/* Añadimos iconos de las tecnologías */}
        <img src={htmlIcon} alt="HTML" />
        <img src={cssIcon} alt="CSS" />
        <img src={jsIcon} alt="JavaScript" />
        <img src={reactIcon} alt="React" />
        <img src={gitIcon} alt="Git" />
        <img src={gitlabIcon} alt="GitLab" />
        <img src={nodeIcon} alt="Node.js" />
      </div>
    </header>
  );
}

export default Header;
