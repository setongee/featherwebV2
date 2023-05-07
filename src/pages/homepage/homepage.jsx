import React from 'react'
import './homepage.scss'

import HomeLanding from './homeLanding'
import JoinFlock from './joinFlock'
import SuperCharged from './superCharged'
import ServiceInfo from './serviceInfo'
import Features from './features'
import VirtualCard from './virtualCards'
import Merchant from './merchant'
import Download from './download'



const HomePage = () => {

    return (

        <div className="homepage">


            <HomeLanding />
            <JoinFlock/>
            <SuperCharged />
            <ServiceInfo />
            <Features />
            <VirtualCard/>
            <Merchant/>
            <Download/>


        </div>

    )

}

export default HomePage
