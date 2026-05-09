import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <header className='bgHeader' id='home'>
                <div className='container d-flex justify-content-between align-items-center flex-wrap'>
                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <span className='me-4'> 35 West Dental Street, California 1004</span>

                        <i className="fa-solid fa-envelope"></i>
                        <span> info@gmail.com</span>
                    </div>

                    <ul className='ulList'>
                        <li className='me-3 ulListLi'>
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className='me-3 ulListLi'>
                            <a href="#">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </li>
                        <li className='me-3 ulListLi'>
                            <a href="#">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li className='ulListLi'>
                            <a href="#">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div className="contenedorInfo container d-flex justify-content-between align-items-center flex-wrap py-4">
                <a href="/">
                    <img className='img-fluid' src="../../../public/logo.png" alt="logo" />
                </a>

                <div className='d-flex '>
                    <figure className='d-flex align-items-center me-4'>
                        <img className='imgFigure' src="../../../public/emergency_call.png" alt="emergency call" />
                        <figcaption className='ms-2'>
                            <p>Call today</p>
                            <strong>01234567890</strong>
                        </figcaption>
                    </figure>

                    <figure className='d-flex align-items-center'>
                        <img className='imgFigure' src="../../../public/time.png" alt="time" />
                        <figcaption className='me-2'>
                            <p>Open Hour</p>
                            <strong>09:00 AM to 18:00 PM</strong>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className='img-fluid' src="../../../public/logo.png" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Specialists">Specialists</a>
                            </li>
                            <li className="nav-item">
                                 <a className="nav-link" href="#Departments">All Departments</a>
                            </li>
                            <li className="nav-item">
                                 <a className="nav-link" href="#doctors">Doctors</a>
                            </li>
                            <li className="nav-item">
                                 <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                 <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar