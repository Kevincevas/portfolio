import Swal from 'sweetalert2'

export default function Contacto() {

  const submitNotificacion = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Enviando Correo, por favor espere que la página se actualize",
      showConfirmButton: false,
      timer: 20000
    });
  }

  return (
    <div>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contacto</h2>
          </div>
          <div className="row mt-1">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Ubicación:</h4>
                  <p>La Tebaida Etapa 2, Salcedo, Cotopaxi, Ecuador</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>cevas102@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Llamar:</h4>
                  <p>+593 999211428</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                action="https://formsubmit.co/cevas102@gmail.com" 
                method="POST"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Su Nombre"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Su Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Asunto"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Mensaje"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Tu mensaje ha sido enviado, gracias!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" onClick={ () => submitNotificacion()}>Enviar Mensaje</button>
                  
                  <input type="hidden" name="_next" value={'https://kevincevas.github.io/portfolio/'}/>
                  <input type="hidden" name="_captcha" value={false}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
