import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
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
    )
}

export default Navbar