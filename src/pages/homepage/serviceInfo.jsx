import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import uptime from '../../assets/logo/digital-pulses.gif'
import patterns from '../../assets/photos/pattern_feather_x.png'

const ServiceInfo = () => {

    return (

        <div className="serviceInfo">

            <Guide>

                <div className="services">

                    <div className="pattern">
                        <img src={patterns} alt="feather patterns" />
                    </div>

                    <div className="textPam">

                        Enjoy low commissions,
                        99.9% service uptime and
                        <span> excellect customer support. </span>

                    </div>

                    <p>Premium services just for you to enjoy. {<br></br>} Transactions can be easy, quick and safe, yeah!</p>

                    <div className="moneyGIF">
                        <img src={uptime} alt="Money Money Money" />
                    </div>

                </div>

            </Guide>

        </div>

    )

}

export default ServiceInfo