import '../App.css';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import jsIcon from '../assets/icons/js.png';
import reactIcon from '../assets/icons/react.png';
import gitIcon from '../assets/icons/git.png';
import gitlabIcon from '../assets/icons/gitlab.png';
import nodeIcon from '../assets/icons/node.png';

function Header() {
  return (
    <header className="header" id="inicio">
      <div className="header-content">
        <img src="/foto-aroa.jpg" alt="Foto de Aroa" className="photo" />

        <div className="header-text">
          <h1>Aroa Clavijo Caravante</h1>
          <h2 className="h1">Desarrolladora Frontend</h2>

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
    </header>
  );
}

export default Header;
