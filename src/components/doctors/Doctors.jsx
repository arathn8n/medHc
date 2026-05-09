import React from 'react'
import './doctor.css'

const Doctors = () => {
  return (
    <section className='container text-center'>
        <header>
            <h2 className='h2Doctors'>Our Professional and Experienced Doctors</h2>
        </header>
        <p className='pDoctors'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    
        <div className='row'>
            <figure className='col-12 col-md-4'>
                <img className='img-fluid' src="../../../public/doctor_01.webp" alt="doctor" />

                <figcaption>
                    <header>
                        <h3 className='h3Doctor'>Dr. Joshua k</h3>
                    </header>
                    <p className='pDoctors'>Cardiology</p>
                </figcaption>
            </figure>

        </div>
    </section>
  )
}

export default Doctors