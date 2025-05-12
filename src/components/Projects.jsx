function Projects() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <div className="projects">
        <div className="project-card">
          <a href="https://github.com/Aroacc/dog-breed-finder" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/img-dog-app.png" alt="dog-breed-finder" className="project-image" />
            <h3>dog-breed-finder</h3>
            <p>
              Aplicación web de buscador de razas de perros en la que te muestra imágenes de cada raza seleccionada.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
