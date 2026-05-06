import React from 'react'
import Navbar from '../navbar/Navbar'
import Carousel from '../carousel/Carousel'
import Features from '../features/Features'

const Home = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Carousel/>
        <Features/>
      </main>
    </>
  )
}

export default Home