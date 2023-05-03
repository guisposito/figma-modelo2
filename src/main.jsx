import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import SectionDescription from './components/SectionDescription'
import SectionLooking from './components/SectionLooking'
import MenuSection from './components/MenuSection'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <SectionDescription />
    <SectionLooking />
    <MenuSection />
  </React.StrictMode>,
)
