import React from 'react'
import Navbar from '../navbar/Navbar'
import Carousel from '../carousel/Carousel'
import Features from '../features/Features'
import About from '../about/About'
import Since from '../since/Since'
import Services from '../services/Services'

const Home = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Carousel/>
        <Features/>
        <About/>
        <Since/>
        <Services/>
      </main>
    </>
  )
}

export default Home