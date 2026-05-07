import React from 'react'
import Navbar from '../navbar/Navbar'
import Carousel from '../carousel/Carousel'
import Features from '../features/Features'
import About from '../about/About'

const Home = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Carousel/>
        <Features/>
        <About/>
      </main>
    </>
  )
}

export default Home