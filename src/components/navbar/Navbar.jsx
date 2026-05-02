import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <header className='bgHeader'>
                <div className='container d-flex justify-content-between align-items-center flex-wrap'>
                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <span className='me-4'> 35 West Dental Street, California 1004</span>

                        <i className="fa-solid fa-envelope"></i>
                        <span> info@gmail.com</span>
                    </div>

                    <ul>
                        <li className='me-3'>
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className='me-3'>
                            <a href="#">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </li>
                        <li className='me-3'>
                            <a href="#">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div className="contenedorInfo container d-flex justify-content-between align-items-center flex-wrap pt-4">
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
        </>
    )
}

export default Navbar