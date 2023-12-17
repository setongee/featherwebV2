import React from 'react'
import Guide from '../../components/displayGuideComp/guide'

import merchant from '../../assets/logo/feather_merchant.jpg'
import percentage from '../../assets/logo/percentage.png'

import {motion} from 'framer-motion'

export default function Merchant() {

  return (
    

    <div className="merchant">

        <Guide>

            <div className="merchant_agent">

                <motion.div className="merchantImg"  
                
                initial = {{
                    opacity : 0,
                    scale : .3
                }}

                whileInView={{
                    opacity : 1,
                    scale : 1
                }}

                transition = {{duration : 1, type : 'spring', delay : 0.2}}

                viewport={{
                    once : true
                }}
                
                >

                    <img src={merchant} alt="Merchant Image and Photo" />
                    
                </motion.div>

                <motion.div 
                
                className="textContentArea"

                initial = {{
                    opacity : 0,
                    x : 100
                }}

                whileInView={{
                    opacity : 1,
                    x : 0
                }}

                transition = {{duration : .2, ease : 'linear', delay : 0.1}}

                viewport={{
                    once : true
                }}
                
                >

                    <div className="mainText">

                        Boost your earnings, Get paid easily - <span>  become a feather merchant </span>

                    </div>

                    <div className="subText">

                        Enjoy powerful services perfectly tailored for you, our driving force is to eliminate your pain points and enhance convenience in transaction.

                    </div>

                    <div className="proof">Become a merchnat <i className="fi fi-rr-angle-small-right"></i> </div>

                </motion.div>

            </div>

        </Guide>

    </div>


  )
}
