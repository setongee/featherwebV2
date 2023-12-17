import React from 'react'

import hoaq from '../../assets/logos-partner/hoaq.svg'
import paystack from '../../assets/logos-partner/paystack.svg'
import smile from '../../assets/logos-partner/smile.svg'
import stitch from '../../assets/logos-partner/stitch.svg'
import vbank from '../../assets/logos-partner/vbank.svg'
import soveriegn from '../../assets/logos-partner/soveriegn.svg'
import Guide from '../../components/displayGuideComp/guide'


export default function Partners() {


  return (
    
    <div className="partners">

        <Guide>


            <div className="partner">


                <div className="title">

                    Our Global Partners

                </div>

                <div className="partner-logos">

                    <div className="logo-x">

                        <img src={hoaq} alt="feather-partner-logo-hoaq" />

                    </div>

                    <div className="logo-x">

                        <img src={paystack} alt="feather-partner-logo-paystack" />

                    </div>

                    {/* <div className="logo-x">

                        <img src={smile} alt="feather-partner-logo-smile" />

                    </div> */}

                    <div className="logo-x">

                        <img src={stitch} alt="feather-partner-logo-stitch" />

                    </div>

                    <div className="logo-x">

                        <img src={soveriegn} alt="feather-partner-logo-soveriegn" />

                    </div>

                    <div className="logo-x">

                        <img src={vbank} alt="feather-partner-logo-vbank" />

                    </div>

                </div>


            </div>


        </Guide>
        
    </div>

  )
}
