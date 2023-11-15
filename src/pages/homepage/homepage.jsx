import React, {useState, useEffect} from 'react'
import './homepage.scss'

import HomeLanding from './homeLanding'
import JoinFlock from './joinFlock'
import SuperCharged from './superCharged'
import ServiceInfo from './serviceInfo'
import Features from './features'
import VirtualCard from './virtualCards'
import Merchant from './merchant'
import Download from './download'
import Partners from './partners'
import Kickstart from './kickstart'
import Crm from './crm'
import FAQs from './faq'
import Footer from './footer'
import Loader from '../../components/loader/loader'



const HomePage = () => {

    const [load, setLoad] = useState(true)

    useEffect(() => {
        
        setTimeout(() => {

            setLoad(false);
            
        }, 3000);

    }, []);

    return (

        <div className="homepage">

            {
                load ? <Loader /> : null
            }

            <HomeLanding />
            <JoinFlock/>
            <SuperCharged />
            <ServiceInfo />
            <Features />
            <VirtualCard/>
            <Merchant/>
            <Download/>
            <Partners />
            <Kickstart />
            <Crm />
            <FAQs/>
            <Footer/>


        </div>

    )

}

export default HomePage
