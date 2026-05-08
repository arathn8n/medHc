import React from 'react'
import './department.css'

const Departments = () => {
  return (
    <div className='container py-5' id='Departments'>
      <section>
        <header>
          <h2 className='h2Department text-center'>A Commitment to Excellence in Medical Departments</h2>
        </header>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className="row">
          <figure className='col-12 col-md-3 figureSpecialist'>
            <img className='img-fluid' src="../../../public/01_departments-img.webp" alt="" />
            <figcaption className='text-center'>
              <header>
                <h3>Dental Care</h3>
              </header>

              <p><span><i class="fa-solid fa-user-doctor"></i></span> 06 Specialist Doctors</p>
            </figcaption>
          </figure>

          <figure className='col-12 col-md-3 figureSpecialist'>
            <img className='img-fluid' src="../../../public/02_departments-img.webp" alt="" />
            <figcaption className='text-center'>
              <header>
                <h3>Orthopedic</h3>
              </header>

              <p><span><i class="fa-solid fa-user-doctor"></i></span> 07 Specialist Doctors</p>
            </figcaption>
          </figure>

          <figure className='col-12 col-md-3 figureSpecialist'>
            <img className='img-fluid' src="../../../public/03_departments-img.webp" alt="" />
            <figcaption className='text-center'>
              <header>
                <h3>Cardiology</h3>
              </header>

              <p><span><i class="fa-solid fa-user-doctor"></i></span> 04 Specialist Doctors</p>
            </figcaption>
          </figure>

          <figure className='col-12 col-md-3 figureSpecialist'>
            <img className='img-fluid' src="../../../public/05_departments-img.webp" alt="" />
            <figcaption className='text-center'>
              <header>
                <h3>Gynecology</h3>
              </header>

              <p><span><i class="fa-solid fa-user-doctor"></i></span> 03 Specialist Doctors</p>
            </figcaption>
          </figure>

          <figure className='col-12 col-md-3 figureSpecialist'>
            <img className='img-fluid' src="../../../public/06_departments-img.webp" alt="" />
            <figcaption className='text-center'>
              <header>
                <h3>Hepatology</h3>
              </header>

              <p><span><i class="fa-solid fa-user-doctor"></i></span> 09 Specialist Doctors</p>
            </figcaption>
          </figure>

          <figure className='col-12 col-md-3 figureSpecialist'>
            <img className='img-fluid' src="../../../public/07_departments-img.webp" alt="" />
            <figcaption className='text-center'>
              <header>
                <h3>Pediatrics</h3>
              </header>

              <p><span><i class="fa-solid fa-user-doctor"></i></span> 05 Specialist Doctors</p>
            </figcaption>
          </figure>

          <figure className='col-12 col-md-3 figureSpecialist'>
            <img className='img-fluid' src="../../../public/08_departments-img.webp" alt="" />
            <figcaption className='text-center'>
              <header>
                <h3>Neurology</h3>
              </header>

              <p><span><i class="fa-solid fa-user-doctor"></i></span> 04 Specialist Doctors</p>
            </figcaption>
          </figure>

          <figure className='col-12 col-md-3 figureSpecialist'>
            <img className='img-fluid' src="../../../public/09_departments-img.webp" alt="" />
            <figcaption className='text-center'>
              <header>
                <h3>Diabetes</h3>
              </header>

              <p><span><i class="fa-solid fa-user-doctor"></i></span> 08 Specialist Doctors</p>
            </figcaption>
          </figure>

          <figure className='col-12 col-md-3 figureSpecialist'>
            <img className='img-fluid' src="../../../public/10_departments-img.webp" alt="" />
            <figcaption className='text-center'>
              <header>
                <h3>Gastroenterology</h3>
              </header>

              <p><span><i class="fa-solid fa-user-doctor"></i></span> 06 Specialist Doctors</p>
            </figcaption>
          </figure>

          <figure className='col-12 col-md-3 figureSpecialist'>
            <img className='img-fluid' src="../../../public/11_departments-img.webp" alt="" />
            <figcaption className='text-center'>
              <header>
                <h3>Ophthalmology</h3>
              </header>

              <p><span><i class="fa-solid fa-user-doctor"></i></span> 04 Specialist Doctors</p>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  )
}

export default Departments