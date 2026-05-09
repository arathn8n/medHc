import React from 'react'
import './doctor.css'

const Doctors = () => {
    return (
        <div className='bgDoctor py-5'>
            <section className='container text-center'>
                <header>
                    <h2 className='h2Doctors'>Our Professional and Experienced Doctors</h2>
                </header>
                <p className='pDoctors'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <div className='row'>
                    <figure className='col-12 col-md-4'>
                        <img className='img-fluid' src="../../../public/doctor_01.webp" alt="doctor" />

                        <figcaption className='figcaptionDoctor'>
                            <header>
                                <h3 className='h3Doctor'>Dr. Joshua k</h3>
                            </header>
                            <p className='pDoctors'>Cardiology</p>
                        </figcaption>
                    </figure>

                    <figure className='col-12 col-md-4'>
                        <img className='img-fluid' src="../../../public/doctor_02.webp" alt="doctor" />

                        <figcaption className='figcaptionDoctor'>
                            <header>
                                <h3 className='h3Doctor'>Dr. Charlot</h3>
                            </header>
                            <p className='pDoctors'>Neurosurgeon</p>
                        </figcaption>
                    </figure>

                    <figure className='col-12 col-md-4'>
                        <img className='img-fluid' src="../../../public/doctor_03.webp" alt="doctor" />

                        <figcaption className='figcaptionDoctor'>
                            <header>
                                <h3 className='h3Doctor'>Dr. Theodor</h3>
                            </header>
                            <p className='pDoctors'>Orthopedic</p>
                        </figcaption>
                    </figure>

                    <figure className='col-12 col-md-4'>
                        <img className='img-fluid' src="../../../public/doctor_04.webp" alt="doctor" />

                        <figcaption className='figcaptionDoctor'>
                            <header>
                                <h3 className='h3Doctor'>Dr. Sophia</h3>
                            </header>
                            <p className='pDoctors'>Gynecology</p>
                        </figcaption>
                    </figure>

                    <figure className='col-12 col-md-4'>
                        <img className='img-fluid' src="../../../public/doctor_05.webp" alt="doctor" />

                        <figcaption className='figcaptionDoctor'>
                            <header>
                                <h3 className='h3Doctor'>Dr.Benjamin</h3>
                            </header>
                            <p className='pDoctors'>Pediatrics</p>
                        </figcaption>
                    </figure>

                    <figure className='col-12 col-md-4'>
                        <img className='img-fluid' src="../../../public/doctor_06.webp" alt="doctor" />

                        <figcaption className='figcaptionDoctor'>
                            <header>
                                <h3 className='h3Doctor'>Dr. Amelia</h3>
                            </header>
                            <p className='pDoctors'>Diabetes</p>
                        </figcaption>
                    </figure>

                </div>
            </section>
        </div>
    )
}

export default Doctors