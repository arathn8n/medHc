import React from 'react'
import './about.css'

const About = () => {
    return (
        <div className='bgColorW'>
            <div className='container'>
                <div className='row align-items-center'>
                    <section className='col-12 col-md-6'>
                        <header>
                            <h2>Story About Our Med<span className='spanAbout'>HC</span> </h2>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </section>

                    <div className='col-12 col-md-6'>
                        <figure className='figureAbout'>
                            <img className='img-fluid' src="../../../public/about_us.webp" alt="" />
                            <figcaption className='figcaptionAbout'>
                                <header>
                                    <h2>Certified Doctors</h2>
                                </header>
                                <p>Proin gravida nibh velit auctor aliquet aenean.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About