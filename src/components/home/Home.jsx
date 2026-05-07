import React from 'react'
import Navbar from '../navbar/Navbar'
import Carousel from '../carousel/Carousel'
import Features from '../features/Features'
import About from '../about/About'
import Since from '../since/Since'

const Home = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Carousel/>
        <Features/>
        <About/>
        <Since/>
      </main>
    </>
  )
}

export default Home