
import cenepamil from '../../public/assets/img/portfolio/cenepamil.png';
import quiosco from '../../public/assets/img/portfolio/quiosco.png';
import bebidas from '../../public/assets/img/portfolio/buscadorBebidas.png';
import gift from '../../public/assets/img/portfolio/giftapp.png';
import crypto from '../../public/assets/img/portfolio/crypto.png';
import citas from '../../public/assets/img/portfolio/citas.png';
import heroes from '../../public/assets/img/portfolio/heroes.png';
import poke from '../../public/assets/img/portfolio/peque-poke.png';
// import web4 from '../../public/assets/img/portfolio/portfolio-3.jpg';
// import web9 from '../../public/assets/img/portfolio/portfolio-8.jpg';


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
                    {/*para no mostrar el menu en pantallas pequeñas: d-none d-md-block */}
                        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay={100}>
                            <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">Todo</li>
                            <li data-filter=".filter-react">React</li>
                            <li data-filter=".filter-vue">Vue</li>
                            {/* <li data-filter=".filter-laravel">Laravel</li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                            <img src={cenepamil} className="img-fluid" alt={'Proyecto'} />
                            <div className="portfolio-info">
                                <h4>Centro de Capacitación Élite</h4>
                                <p>Web</p>
                                <div className="portfolio-links">
                                    <a href={cenepamil} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus" /></a>
                                    <a href="https://quiosco.netlify.app/" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-react">
                        <div className="portfolio-wrap">
                        <img src={quiosco} className="img-fluid" alt={'Proyecto'} />
                        <div className="portfolio-info">
                            <h4>Quiosco</h4>
                            <p>React</p>
                            <div className="portfolio-links">
                                <a href={quiosco} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                <a href="https://quiosco.netlify.app/" target='_blank' className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-react">
                        <div className="portfolio-wrap">
                        <img src={gift} className="img-fluid" alt={'Proyecto'} />
                        <div className="portfolio-info">
                            <h4>GiftApp</h4>
                            <p>React</p>
                            <div className="portfolio-links">
                                <a href={gift} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                                <a href="https://gif-kevin.netlify.app/" target='_blank' className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-vue">
                        <div className="portfolio-wrap">
                        <img src={poke} className="img-fluid" alt={'Proyecto'} />
                        <div className="portfolio-info">
                            <h4>Pequeña Página Pokémon</h4>
                            <p>Vue</p>
                            <div className="portfolio-links">
                                <a href={poke} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a>
                                <a href="https://peque-poke.netlify.app/pokemons" target='_blank' className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-react">
                        <div className="portfolio-wrap">
                        <img src={heroes} className="img-fluid" alt={'Proyecto'} />
                        <div className="portfolio-info">
                            <h4>Web Heroes</h4>
                            <p>React</p>
                            <div className="portfolio-links">
                                <a href={heroes} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                                <a href="https://myappheroeapp.netlify.app/" target='_blank' className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-react">
                        <div className="portfolio-wrap">
                        <img src={citas} className="img-fluid" alt={'Proyecto'} />
                        <div className="portfolio-info">
                            <h4>Sitio de Citas Médicas</h4>
                            <p>React</p>
                            <div className="portfolio-links">
                                <a href={citas} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a>
                                <a href="https://dates-page.netlify.app/" target='_blank' className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-react">
                        <div className="portfolio-wrap">
                        <img src={crypto} className="img-fluid" alt={'Proyecto'} />
                        <div className="portfolio-info">
                            <h4>Cotizador de Cryptomonedas</h4>
                            <p>React</p>
                            <div className="portfolio-links">
                                <a href={crypto} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a>
                                <a href="https://crypto-cotizador-kevin.netlify.app/" target='_blank' className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-react">
                        <div className="portfolio-wrap">
                        <img src={bebidas} className="img-fluid" alt={'Proyecto'} />
                        <div className="portfolio-info">
                            <h4>Buscador de Bebidas</h4>
                            <p>React</p>
                            <div className="portfolio-links">
                                <a href={bebidas} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus" /></a>
                                <a href="https://r-find-drink.netlify.app/" target='_blank' className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                        <img src={web9} className="img-fluid" alt={'Proyecto'} />
                        <div className="portfolio-info">
                            <h4>Web 3</h4>
                            <p>Web</p>
                            <div className="portfolio-links">
                                <a href="/assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                <a href="#" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"/></a>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            </section>

        </div>
    )
}
