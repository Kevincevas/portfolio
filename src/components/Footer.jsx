export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <h3>Kevin Cevallos</h3>
          
          <div className="social-links">
            {/* <a href="#" className="twitter">
              <i className="bx bxl-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram" />
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype" />
            </a> */}
            <a href="https://github.com/Kevincevas" target="_blank" className="github">
              <i className="bx bxl-github" />
            </a>
            <a href="http://www.linkedin.com/in/kevin-cevallos-286221252" target="_blank" className="linkedin">
              <i className="bx bxl-linkedin" />
            </a>
            <p className="fst-italic pt-4">
              ¡Gracias por visitar mi portafolio!
            </p>
          </div>
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <a href="#hero">
                <span>Kevin Cevallos</span>
              </a>
            </strong>
            {/* . All Rights Reserved */}
          </div>
          <div className="credits">
            Adaptado y Desarrollado en React
          </div>
        </div>
      </footer>
    </div>
  );
}
