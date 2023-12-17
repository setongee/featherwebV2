import React from 'react'
import './styles/feather.scss'
import RouterClass from './routes/router'
import Header from './components/header/header'
import Footer from './pages/homepage/footer'
import Crm from './pages/homepage/crm'
import FAQs from './pages/homepage/faq'

const FeatherApp = () => {


  return (

    <div>

        <Header/>
        
        <RouterClass />

        <Crm/>
        <FAQs/>
        <Footer/>
        
    </div>

  )


}

export default FeatherApp
