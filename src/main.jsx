import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import SectionDescription from './components/SectionDescription'
import SectionLooking from './components/SectionLooking'
import MenuSection from './components/MenuSection'
import Testimonials from './components/Testimonials'
import News from './components/News'
import SectionLocations from './components/SectionLocations'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <SectionDescription />
    <SectionLooking />
    <MenuSection />
    <Testimonials />
    <News />
    <SectionLocations />
    <Newsletter />
    <Footer />
  </React.StrictMode>,
)
