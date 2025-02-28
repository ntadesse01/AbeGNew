import React from 'react'
import About from '../About/About'
import Features from '../../components/Features/Features'
import VideoSection from '../../components/VideoSection/VideoSection'
import WhyUs from '../../components/WhyUs/WhyUs'
import SecVideoSection from '../../components/SecVideoSection/SecVideoSection'

const HomePage = () => {
  return (
    <div>
        <About />
        <Features />
        <VideoSection />
        <WhyUs />
        <SecVideoSection />
    </div>
  )
}

export default HomePage