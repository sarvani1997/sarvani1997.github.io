import "./ContactStyles.css";

function Contact() {
  return (
    <div className="contact"  style={{ backgroundImage: `url(assets/footer-bg.png)` }}>
      <div className="contact-section">
        <div className="contact-section-header">
          <p className="contact-title">Get In Touch</p>
          <p className="contact-description">I'm on the lookout for new opportunities in software development. Feel free to reach out if you have something in mind; I'll get back to you promptly. Let's explore how we can work together!</p>
        </div>
        </div>
        <div className="contact-links">
          <a
            id="profile-link"
            href="https://github.com/sarvani1997"
            target="_blank"
            className="btn contact-details"
          >
            <i className="fab fa-github"></i> GitHub
          </a>

          <a
            href="mailto:sarvani.sanaboyina@gmail.com"
            className="btn contact-details"
          >
            <i className="fas fa-at"></i> Send a mail
          </a>
          <a href="tel:7893321144" className="btn contact-details">
            <i className="fas fa-mobile-alt"></i> Call me
          </a>
        </div>
   
    </div>
  );
}

export default Contact;
