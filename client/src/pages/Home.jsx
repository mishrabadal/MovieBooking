import React from 'react'
import toast from 'react-hot-toast'
import HeroSection from '../components/HeroSection'
import FeaturedSection from '../components/FeaturedSection'
import TrailersSection from '../components/TrailersSection'

const Home = () => {
  return (
    <>
    <HeroSection />
    <FeaturedSection />
    <TrailersSection />
    </>
  )
}

export default Home