import React from 'react'
import Narvar from './Components/Narvar/Narvar'
import Hero from './Components/Hero/Hero'
import OurCompany from './Components/OurCompany/OurCompany'
import OurServices from './Components/OurServices/OurServices'
import Sectors from './Components/Sectors/Sectors'
import CaseStudies from './Components/CaseStudies/CaseStudies'
import News from './Components/News/News'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Narvar/>
      <Hero/>
      <OurCompany/>
      <OurServices/>
      <Sectors/>
      <CaseStudies/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App