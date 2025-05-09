import gmailIcon from '../assets/icons/gmail.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github.png'; // Asegúrate de tener este icono en la carpeta

function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <h2>Contacto</h2>
      <div className="icon-links">
        <a
          href="mailto:aroaclavijo16@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Enviar email"
        >
          <img src={gmailIcon} alt="Gmail" className="contact-icon" />
        </a>
        <a
          href="https://es.linkedin.com/in/aroa-clavijo-caravante-116b851a9?trk=people_directory"
          target="_blank"
          rel="noopener noreferrer"
          title="Ver mi LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
        </a>
        <a
          href="https://github.com/Aroacc"
          target="_blank"
          rel="noopener noreferrer"
          title="Ver mi GitHub"
        >
          <img src={githubIcon} alt="GitHub" className="contact-icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
