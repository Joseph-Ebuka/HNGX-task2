import React from 'react'


import { LandingPage, Footer} from '../components'
 import FeaturedMovies from '../view/FeaturedMovies'

const Home = () => {
  return (
    <div> 
      <LandingPage />
      <FeaturedMovies/>
      <Footer />

    </div>
  )
}

export default Home;