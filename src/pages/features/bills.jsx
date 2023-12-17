import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import feature from '../../assets/photos/billsP.png'
import withdrawIcon from '../../assets/icons/withdraw_icon.svg'
import WithImg from '../../assets/photos/featB.png'

import {motion} from 'framer-motion'

import './feat.scss'

export default function Bills() {

  return (

    <div className="featurePage">

        <Guide>

            <div className="featureHere">

                <div className="tops"> <img src={withdrawIcon} alt="" />  Features <span>//</span> <strong>bills payment</strong> </div>

                <div className="feat">

                    <div className="title"> 
                    
                        <div className="main">Pay your bills with ease, never miss a thing again.</div>
                    
                    </div>

                    <p>Sending money to family, friends and any bank account in Nigeria has never been easier.</p>

                </div>

                <div className="image">
                    <img src={feature} alt="" />
                </div>

                <div className="sectionInfo">

                    <div className="get_start"> <p>Features</p> <motion.div initial = {{opacity : 0, x : -200}} whileInView={{opacity :1, x : 0}} viewport = {{once : true}} transition = {{duration : .7}} className="imgHouse"><img src={WithImg} alt="" /></motion.div> </div>
                    
                    <div className="featureKeys">

                        <motion.div className="key 1" initial = {{opacity : 0, scale : .4}} whileInView={{opacity : 1, scale : 1}} transition = {{type : 'spring', delay : .1}} viewport = {{once : true}}>

                            <p>01</p>
                            <div className="pot">Purchase airtime and mobile data</div>
                            <div className="pt">Purchase airtime and mobile data from any local network in Nigeria.</div>
                            

                        </motion.div>

                        <motion.div className="key 1"  initial = {{opacity : 0, scale : .4}} whileInView={{opacity : 1, scale : 1}} transition = {{type : 'spring', delay : .4}} viewport = {{once : true}} >

                            <p>02</p>
                            <div className="pot"> Pay for your electricity bills</div>
                            <div className="pt">Support for any power distibution house in Nigeria.</div>
                            

                        </motion.div>

                        <motion.div className="key 1" initial = {{opacity : 0, scale : .4}} whileInView={{opacity : 1, scale : 1}} transition = {{type : 'spring', delay : .7}} viewport = {{once : true}} >

                            <p>03</p>
                            <div className="pot"> Enjoy fast pay tv subscriptions </div>
                            <div className="pt"> Make Payments for any pay tv subscription in Nigeria.</div>
                            

                        </motion.div  >

                        {/* <motion.div className="key 1" initial = {{opacity : 0, scale : .4}} whileInView={{opacity : 1, scale : 1}} transition = {{type : 'spring', delay : 1}} viewport = {{once : true}} >

                            <p>04</p>
                            <div className="pot"> Earn for everytime you withdraw</div>
                            <div className="pt"> Earn as you withdraw get N1 each time you withdraw your cash </div>
                            

                        </motion.div  > */}

                    </div>

                </div>

            </div>

        </Guide>

    </div>

  )
}
