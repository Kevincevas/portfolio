import { useState } from "react"

export default function Navbar() {

    const [navbar, setNavbar] = useState('')

    const handleNavbar = (posicion) => {
        setNavbar(posicion)
    }

    return (
        <div>
            {/* <button type="button" className="mobile-nav-toggle d-xl-none"><i className="bi bi-list mobile-nav-toggle"></i></button> */}
            <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
        
            <header id="header" className="d-flex flex-column justify-content-center">


                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                    <li><a href="#hero" className={`nav-link scrollto ${navbar === 'hero' ? 'active' : null}`} onClick={ () => handleNavbar('hero') }><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about" className={`nav-link scrollto ${navbar === 'about' ? 'active' : null}`} onClick={ () => handleNavbar('about') }><i className="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="#resume" className={`nav-link scrollto ${navbar === 'resume' ? 'active' : null}`} onClick={ () => handleNavbar('resume') }><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                    <li><a href="#portfolio" className={`nav-link scrollto ${navbar === 'portfolio' ? 'active' : null}`} onClick={ () => handleNavbar('portfolio') }><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                    <li><a href="#services" className={`nav-link scrollto ${navbar === 'services' ? 'active' : null}`} onClick={ () => handleNavbar('services') }><i className="bx bx-server"></i> <span>Services</span></a></li>
                    <li><a href="#contact" className={`nav-link scrollto ${navbar === 'contact' ? 'active' : null}`} onClick={ () => handleNavbar('contact') }><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>

            </header>
        </div>
    )
}
