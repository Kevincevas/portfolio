
export default function Portfolio() {
  return (
    <div>
      
            <section id="portfolio" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
            <h2>Portfolio</h2>
            <p>Proyectos en donde he aplicado los conocimientos adquiridos.</p>
            </div>
            <div className="row">
            <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay={100}>
                <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">Web</li>
                {/* <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li> */}
                </ul>
            </div>
            </div>
            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                <img src="assets/img/portfolio/cenepamil.png" className="img-fluid" alt={'Proyecto'} />
                <div className="portfolio-info">
                    <h4>Centro de Capacitación Élite</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/cenepamil.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
                    <a href="https://quiosco.netlify.app/" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt={'Proyecto'} />
                <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt={'Proyecto'} />
                <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt={'Proyecto'} />
                <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt={'Proyecto'} />
                <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                <img src="assets/img/portfolio/quiosco.png" className="img-fluid" alt={'Proyecto'} />
                <div className="portfolio-info">
                    <h4>Sistema Quiosco</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/quiosco.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt={'Proyecto'} />
                <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt={'Proyecto'} />
                <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus" /></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt={'Proyecto'} />
                <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

    </div>
  )
}
