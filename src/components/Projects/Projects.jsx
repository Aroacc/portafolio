import imgDogs from '../../assets/img-dog-app.png';
import githubIcon from '../../assets/icons/github.png';
import './projects.css';

function Projects() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <div className="projects">
        <div className="project-card">
          <h3>dog-breed-finder</h3>
          <a href="https://dog-breed-finder-blond.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={imgDogs} alt="dog-breed-finder" className="project-image" />
          </a>

          <div>
            <a href="https://github.com/Aroacc/dog-breed-finder" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="contact-icon" />
            </a>
          </div>
          <p>Aplicación web de buscador de razas de perros en la que te muestra imágenes de cada raza seleccionada.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
