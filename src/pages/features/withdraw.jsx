import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import feature from '../../assets/photos/rebuildNumb.png'
import withdrawIcon from '../../assets/icons/withdraw_icon.svg'
import WithImg from '../../assets/photos/with.png'

import {motion} from 'framer-motion'

import './feat.scss'

export default function Withdraw() {

  return (

    <div className="featurePage">

        <Guide>

            <div className="featureHere">

                <div className="tops"> <div className="icon"><i className="fi fi-rr-arrow-small-left"></i></div> <img src={withdrawIcon} alt="" />  Features <span>//</span> <strong>withdraw</strong> </div>

                <div className="feat">

                    <div className="title"> 
                    
                        <div className="main">Withdraw your cash on-the-go, it's easy, quick & safe.</div>
                    
                    </div>

                    <p>Withdraw your cash on-the-go from merchants who have it in real-time. Whether it’s a mom-and-pop shop or brick-and-mortar store.</p>

                </div>

                <div className="image">
                    <img src={feature} alt="" />
                </div>

                <div className="sectionInfo">

                    <div className="get_start"> <p>Features</p> <motion.div initial = {{opacity : 0, x : -200}} whileInView={{opacity :1, x : 0}} viewport = {{once : true}} transition = {{duration : .7}} className="imgHouse"><img src={WithImg} alt="" /></motion.div> </div>
                    
                    <div className="featureKeys">

                        <motion.div className="key 1" initial = {{opacity : 0, scale : .4}} whileInView={{opacity : 1, scale : 1}} transition = {{type : 'spring', delay : .1}} viewport = {{once : true}}>

                            <p>01</p>
                            <div className="pot">Find merchants quickly close to you</div>
                            <div className="pt">Get paired with merchants within a 5 Mins radius close to you.</div>
                            

                        </motion.div>

                        <motion.div className="key 1"  initial = {{opacity : 0, scale : .4}} whileInView={{opacity : 1, scale : 1}} transition = {{type : 'spring', delay : .4}} viewport = {{once : true}} >

                            <p>02</p>
                            <div className="pot">Negotiate merchant fee charges</div>
                            <div className="pt">The power is in your now hands, controls your fee with merchant</div>
                            

                        </motion.div>

                        <motion.div className="key 1" initial = {{opacity : 0, scale : .4}} whileInView={{opacity : 1, scale : 1}} transition = {{type : 'spring', delay : .7}} viewport = {{once : true}} >

                            <p>03</p>
                            <div className="pot"> Super fast and secure transaction </div>
                            <div className="pt">All wihdrawals are end-to-end fully secure and encrypted.</div>
                            

                        </motion.div  >

                        <motion.div className="key 1" initial = {{opacity : 0, scale : .4}} whileInView={{opacity : 1, scale : 1}} transition = {{type : 'spring', delay : 1}} viewport = {{once : true}} >

                            <p>04</p>
                            <div className="pot"> Earn for everytime you withdraw</div>
                            <div className="pt"> Earn as you withdraw get N1 each time you withdraw your cash </div>
                            

                        </motion.div  >

                    </div>

                </div>

            </div>

        </Guide>

    </div>

  )
}
