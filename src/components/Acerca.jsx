
import foto from '../../public/assets/img/profile-img.jpg'

export default function Acerca() {
  return (
    <div>

        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

            <div className="section-title">
                <h2>Sobre mí</h2>
            </div>

            <div className="row">
                <div className="col-lg-4">
                <img src={foto} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                {/* UI/UX Designer &amp; */}
                <h3> Web Developer.</h3>
                <p className="fst-italic">
                    Hola, soy Kevin, un apasionado desarrollador web en ciernes con una gran motivación por aprender y crecer en el mundo de la tecnología.
                </p>
                <div className="row">
                    <div className="col-lg-6">
                    <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Fecha de Nacimiento:</strong> <span>2 Feb 2000</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Linkedin:</strong> <span><a href="http://www.linkedin.com/in/kevin-cevallos-286221252" target='_blank'>www.linkedin.com</a></span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Celular:</strong> <span>+593 999211428</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Ciudad:</strong> <span>Salcedo, Ecuador</span></li>
                    </ul>
                    </div>
                    <div className="col-lg-6">
                    <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Edad:</strong> <span>24</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Título:</strong> <span>Ingeniero en Sistemas</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>cevas102@gmail.com</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Disponible</span></li>
                    </ul>
                    </div>
                </div>
                <p>
                    Aunque todavía no tengo experiencia laboral formal, he dedicado mucho tiempo a aprender y mejorar mis habilidades a través de cursos en línea, proyectos personales.
                    Me fascina la capacidad de la tecnología para resolver problemas y mejorar la vida de las personas, y estoy comprometido a seguir aprendiendo y adaptándome a las nuevas tendencias y tecnologías. 
                    <br />
                    Actualmente, estoy enfocado en mejorar mis conocimientos en ya sea en el back-end como el en front-end, y estoy constantemente buscando nuevas oportunidades para aplicar lo que he aprendido.
                    Cuando no estoy codificando, me gusta leer o ejercitarme, lo que me ayuda a mantenerme creativo y enfocado.
                    Estoy ansioso por contribuir a proyectos desafiantes y colaborar con otros profesionales para crear soluciones innovadoras. 
                    
                </p>
                </div>
            </div>

            </div>
        </section>

        
    </div>
  )
}
