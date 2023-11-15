import React from 'react'
import Guide from '../../components/displayGuideComp/guide'

import merchant from '../../assets/logo/feather_merchant.jpg'
import percentage from '../../assets/logo/percentage.png'



export default function Merchant() {

  return (
    

    <div className="merchant">

        <Guide>

            <div className="merchant_agent">

                <div className="percentile">

                    <img src={percentage} alt="fixed" />

                </div>

                <div className="merchantImg">

                    <img src={merchant} alt="Merchant Image and Photo" />
                    
                </div>

                <div className="textContentArea">

                    <div className="mainText">

                        Boost your earnings, Get paid easily - <span>  become a feather merchant </span>

                    </div>

                    <div className="subText">

                        Enjoy powerful services perfectly tailored for you, our driving force is to eliminate your pain points and enhance convenience in transaction.

                    </div>

                    <div className="proof">Curious? <a href="#">Learn More</a> <i className="fi fi-rr-angle-small-right"></i> </div>

                </div>

            </div>

        </Guide>

    </div>


  )
}
