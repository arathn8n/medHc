import React from 'react'
import './features.css'

const Features = () => {
    return (
        <div className='container py-5'>
            <section>
                <header>
                    <h1 className='features py-3'>Advanced Healthcare Features for Better <br /> Outcomes</h1>
                </header>
                <p className='text-body-secondary text-center pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
                <div className='row'>
                    <article className='col-12 col-md-3 card-features'>
                        <div className='icon-features'>
                            <i class="fa-solid fa-bullseye fa-2xl"></i>
                        </div>
                        <h2>Advanced Care</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    </article>
                    <article className='col-12 col-md-3 card-features'>
                        <div className='icon-features'>
                            <i class="fa-solid fa-thumbs-up fa-2xl"></i>
                            
                        </div>
                        <h2>Internal Medicine</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    </article>
                    <article className='col-12 col-md-3 card-features'>
                        <div className='icon-features'>

                            <i class="fa-solid fa-crutch fa-2xl"></i>
                        </div>
                        <h2>Internal Medicine</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    </article>
                    <article className='col-12 col-md-3 card-features'>
                        <div className='icon-features'>
                            <i class="fa-solid fa-eye fa-2xl"></i>

                        </div>
                        <h2>Internal Medicine</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Features