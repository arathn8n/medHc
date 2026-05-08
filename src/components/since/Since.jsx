import React from 'react'
import './since.css'

const Since = () => {
  return (
    <div className="container">
      <div className='row align-items-center'>
        <div className='col-12 col-md-6'>
          <img className='img-fluid' src="../../../public/about-story.webp" alt="" />
        </div>
        <section className='col-12 col-md-6'>
          <header>
            <h2 className='h2Story'>MedHC Clinic Since 1999</h2>
          </header>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
      </div>
    </div>
  )
}

export default Since