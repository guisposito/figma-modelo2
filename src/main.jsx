import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import SectionDescription from './components/SectionDescription'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <SectionDescription />
  </React.StrictMode>,
)
