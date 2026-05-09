import React from 'react'
import './price.css'

const Price = () => {
  return (
    <section id='price' className='container py-5'>
        <header>
            <h2 className='h2Price text-center'>Choose the Perfect Plan for Your Health Needs</h2>
        </header>
        <p className='pPrice text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    
        <div className='row'>
            <article className='col-12 col-md-4 priceArticle'>
                <header>
                    <h3>Basic</h3>
                </header>
                <p className='pBasic fs-2'>$19/month</p>
                <p>Lorem Ipsum is simply dummy.</p>
                <ul>
                    <li>
                        <a href="#">Mistakes to avoid</a>
                    </li>
                    <li>
                        <a href="#">Your startup</a>
                    </li>
                    <li>
                        <a href="#">Knew about fonts</a>
                    </li>
                </ul>

                <button type="button" class="btn btn-primary">Get now</button>
            </article>

            <article className='col-12 col-md-4 priceArticle'>
                <header>
                    <h3>Premium</h3>
                </header>
                <p className='pBasic fs-2'>$29/month</p>
                <p>Lorem Ipsum is simply dummy.</p>
                <ul>
                    <li>
                        <a href="#">Mistakes to avoid</a>
                    </li>
                    <li>
                        <a href="#">Your startup</a>
                    </li>
                    <li>
                        <a href="#">Knew about fonts</a>
                    </li>
                    <li>
                        <a href="#">Winning metric for</a>
                    </li>
                </ul>

                <button type="button" class="btn btn-primary">Get now</button>
            </article>

            <article className='col-12 col-md-4 priceArticle'>
                <header>
                    <h3>Gold</h3>
                </header>
                <p className='pBasic fs-2'>$39/month</p>
                <p>Lorem Ipsum is simply dummy.</p>
                <ul>
                    <li>
                        <a href="#">Mistakes to avoid</a>
                    </li>
                    <li>
                        <a href="#">Your startup</a>
                    </li>
                    <li>
                        <a href="#">Knew about fonts</a>
                    </li>
                    <li>
                        <a href="#">winning metric for</a>
                    </li>
                    <li>
                        <a href="#">
                            Your startup
                        </a>
                    </li>
                </ul>

                <button type="button" class="btn btn-primary">Get now</button>
            </article>
        </div>
    </section>
  )
}

export default Price