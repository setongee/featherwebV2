import React, {useEffect, useState} from 'react'
import Guide from '../../components/displayGuideComp/guide'
import patterns from '../../assets/photos/pattern_feather_x.png'
import featherHands from '../../assets/photos/featherHands2x.gif'
import bolt from '../../assets/photos/bolt.gif'

import checkii from '../../assets/photos/checkup.png'

import { motion, stagger } from "framer-motion"

// Hands Image for .gif



const SuperCharged = () => {

    const lists = [
        'Fast and relaible cash transfers',
        'Easy to use with great user experience to engage you',
        'Secure payments and gateway to aid safe transfers',
        'Fund your wallet with different options',
        'Get free account balance from VFD'
    ]

    const listItems = {

        initial : {
            opacity : 0,
            y : 100
        },

        animate : (index) => (

            { 

                opacity : 1,
                y : 0,

                transition : {
                    delay : 0.3 * index,
                }
    
            }
        )

    }
   

    return (

        <div className="supercharged">

            <Guide>

                <div className="charged">

                    <div className="bolt">
                        <img src={bolt} alt="" />
                    </div>

                    <div className="handPhone">
                        <img src={featherHands} alt="" />
                    </div>

                    <div
                    
                    className="textArea">

                        <motion.div 

                        viewport={{ once: true }}
                        
                        className="texting" >

                            <div className="topText">

                                Super <span>charged</span> digital wallet in the palm of your hands.     

                            </div>

                            <div className="subTopText">

                                Experience a more powerful and easy way to withdraw your money, send cash to family & friends and paybills

                            </div>

                            <div className="checklist">

                                { lists.map( (list, index) => (

                                    <motion.div 

                                        className="check"
                                        key = {index}
                                        variants={listItems}
                                        initial = "initial"
                                        whileInView= "animate"
                                        custom = {index}
                                        viewport={{
                                            once : true
                                        }}
                                        
                                    >

                                        <div className="dash"></div>
                                        <p> {list} </p>

                                    </motion.div>

                                )) }

                            </div>

                            <div className="explore">
                                Explore our features
                            </div>
                            
                        </motion.div>

                        <div className="pattern">
                            <img src={patterns} alt="feather patterns" />
                        </div>


                    </div>

                    

                </div>

            </Guide>

        </div>

    )

}

export default SuperCharged