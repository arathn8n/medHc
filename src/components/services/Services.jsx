import React from 'react'
import './services.css'

const Services = () => {
    return (
        <div className='bgColor py-5'>
            <div className='container'>
                <section>
                    <header>
                        <h2 className='h2Services text-center'>We Offer Quality Clinic Services of Specialists</h2>
                    </header>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <div className='row'>
                        <article className='col-12 col-md-4 text-center cardServices'>
                            <img src="../../../public/certified_doctor.svg" alt="" />
                            <header>
                                <h3>Certified Doctors</h3>
                            </header>
                        </article>

                        <article className='col-12 col-md-4 text-center cardServices'>
                            <img src="../../../public/emergency.svg" alt="" />
                            <header>
                                <h3>Emergency</h3>
                            </header>
                        </article>

                        <article className='col-12 col-md-4 text-center cardServices'>
                            <img src="../../../public/technology.svg" alt="" />
                            <header>
                                <h3>Technology</h3>
                            </header>
                        </article>

                        <article className='col-12 col-md-4 text-center cardServices'>
                            <img src="../../../public/experinece.svg" alt="" />
                            <header>
                                <h3>Experience</h3>
                            </header>
                        </article>

                        <article className='col-12 col-md-4 text-center cardServices'>
                            <img src="../../../public/patient_care.svg" alt="" />
                            <header>
                                <h3>Patient Care</h3>
                            </header>
                        </article>

                        <article className='col-12 col-md-4 text-center cardServices'>
                            <img src="../../../public/ambulance.svg" alt="" />
                            <header>
                                <h3>Ambulance</h3>
                            </header>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Services