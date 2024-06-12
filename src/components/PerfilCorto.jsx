import { useEffect } from 'react';
import Typed from 'typed.js';

export default function PerfilCorto() {
  
  useEffect(() => {
    const options = {
      strings: ["Designer", "Developer", "Freelancer", "Gamer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
  };

    const typed = new Typed(".typed", options);

    // limpia la instancia cuando el componente se desmonta
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
              <h1>Kevin Cevallos</h1>
              <p>Soy <span className="typed"></span></p>
              <div className="social-links">
                  {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> */}
                  <a href="https://github.com/Kevincevas" target="_blank" className="github"><i className="bx bxl-github"></i></a>
                  <a href="http://www.linkedin.com/in/kevin-cevallos-286221252" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
        </section>
    </div>
  )
}
