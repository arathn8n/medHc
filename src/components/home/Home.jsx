import React from 'react'
import Navbar from '../navbar/Navbar'
import Carousel from '../carousel/Carousel'

const Home = () => {
  return (
    <>
      <Navbar/>
      <main id='home'>
        <Carousel/>
      </main>
    </>
  )
}

export default Home