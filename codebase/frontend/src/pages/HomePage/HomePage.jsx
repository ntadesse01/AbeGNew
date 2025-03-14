import React from 'react'
import About from '../../components/About/About'
 
import VideoSection from '../../components/VideoSection/VideoSection'
import Banner from '../../components/Banner/Banner'
import Banner2 from '../../components/Banner2/Banner2'
import OurService from '../../components/OurService/OurService'
import QualityService from '../../components/QualityService/QualityService'
import WhyYouChooseUs from '../../components/WhyYouChooseUs/WhyYouChooseUs'
 
// import WhyUs from '../../components/WhyUs/WhyUs'
// import SecVideoSection from '../../components/SecVideoSection/SecVideoSection'

const HomePage = () => {
  return (
    <div>

        <Banner2/>
        {/* <Banner/> */}
        <About />
        <OurService/>
        <QualityService/>
        <WhyYouChooseUs/>
        <VideoSection />
        {/* <WhyUs /> */}
        {/* <SecVideoSection /> */}
    </div>
  )
}

export default HomePage