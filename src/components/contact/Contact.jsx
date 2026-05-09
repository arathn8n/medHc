import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className="bgFooter py-5">
            <section className='container py-3'>
                <header>
                    <h2 className='h2Footer text-center'>Stay Updated with Our Latest Work Gallery</h2>
                </header>
                <p className='pFooter text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <footer className='footer row'>
                    <div className='col-12 col-md-4'>
                        <article className='articleFooter'>
                            <header>
                                
                                <h3>Contact details</h3>
                            </header>
                            <p>+00 222 333 44454</p>
                        </article>

                        <article className='articleFooter'>
                            <header>
                                
                                <h3>address</h3>
                            </header>
                            <p>403, Port Washington Road, Canada</p>
                        </article>

                        <article className='articleFooter'>
                            <header>
                                
                                <h3>email us</h3>
                            </header>
                            <p>info@example.com</p>
                        </article>
                    </div>

                    <div className='col-12 col-md-8'>
                        <form action="#">
                            <p className='pForm fs-3'>Contact us</p>
                            <h2>Reach out for questions</h2>
                            <p>We take the time to understand your individual needs and goals, creating customized treatment plans to help you achieve optimal oral health.</p>

                            <div className='contentText'>
                                <input type="text" placeholder='enter your name'/>
                            </div>
                            <div className='contentEmailNumber'>
                                <input type="email" placeholder='enter your email' />

                                <input type="number" placeholder='enter your number phone' />
                            </div>

                            <textarea placeholder='write message'>
                                
                            </textarea>
                        </form>
                    </div>
                </footer>
            </section>


        </div>
    )
}

export default Contact