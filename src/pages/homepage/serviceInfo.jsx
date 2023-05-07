import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import uptime from '../../assets/logo/digital-pulses.gif'

const ServiceInfo = () => {

    return (

        <div className="serviceInfo">

            <Guide>

                <div className="services">

                    <div className="textPam">

                        Enjoy low commissions,
                        99.9% service uptime and
                        <span> excellect customer support. </span>

                    </div>

                    <div className="moneyGIF">
                        <img src={uptime} alt="Money Money Money" />
                    </div>

                </div>

            </Guide>

        </div>

    )

}

export default ServiceInfo