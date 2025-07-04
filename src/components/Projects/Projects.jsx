import './projects.css';

function Projects() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <div className="projects">
    {[
      {
        title: 'Buscador razas de perros',
        description: 'App web para organizar tareas diarias con React y Firebase.',
        image: '/src/assets/img-dog-app.png',
        link: 'https://tu-link.com',
        tech: ['React', 'Firebase', 'CSS Modules'],
      },
      {
        title: 'Atresplayer',
        description: 'Interfaz tipo Netflix usando API de películas y diseño responsivo.',
        image: '/src/assets/atresplayer.webp',
        link: 'https://tu-link.com',
        tech: ['HTML', 'CSS', 'JS', 'API'],
      },
      // Puedes mapear más proyectos desde un array real si lo deseas
    ].map((project, index) => (
      <div className="project-card" key={index}>
        <img src={project.image} alt={project.title} className="project-image" />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noreferrer" className="project-button">Ver proyecto</a>
      </div>
    ))}
  </div>
</section>
  );
}

export default Projects;
