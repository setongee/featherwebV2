import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import phone from '../../assets/photos/Dashboard Iphone.svg'

import {motion} from 'framer-motion'

export default function Kickstart() {
  return (
    
        <div className="kickstart">

            <Guide>

                <div className="getStarted">

                    <div className="imgPhone">
                        <img src={phone} alt="iphone" />
                    </div>

                    <div className="title">
                        Kickstart your feather {<br></br>} experience in <span>5 Mins</span>
                    </div>

                    <div className="getKick">

                        <div className="line line1"></div>
                        <div className="line line2"></div>

                        <motion.div className="content-start top-left" initial = {{opacity : 0, x : -100}} whileInView={{opacity : 1, x : 0}} transition = {{type : 'spring'}} >

                            <div className="topic">01. Sign Up</div>
                            
                            <div className="content-started-body">

                                Sign up for an account with your fullname, email and phone number. Follow the prompt and setup other required data.

                            </div>

                            <div className="link-useful">

                                <div className="explain"> View Explainer Video </div>
                                <div className="stroke"></div>
                                <div className="explain">Read Article</div>

                            </div>


                        </motion.div>

                        <motion.div className="content-start top-right" initial = {{opacity : 0, x : 100}} whileInView={{opacity : 1, x : 0}} transition = {{type : 'spring', delay : 0.2}}>

                            <div className="topic">02. Fund your wallet</div>
                            
                            <div className="content-started-body">

                                Using your debit card, bank account, USSD or bank transfer, fund you wallet via payment portal for free secured by paystack. 

                            </div>

                            <div className="link-useful">

                                <div className="explain"> View Explainer Video </div>
                                <div className="stroke"></div>
                                <div className="explain">Read Article</div>

                            </div>


                        </motion.div>

                        <motion.div className="content-start bottom-left" initial = {{opacity : 0, x : -100}} whileInView={{opacity : 1, x : 0}} transition = {{type : 'spring', delay : 0.4}}>

                            <div className="topic">03. Perform Transaction</div>
                            
                            <div className="content-started-body">

                                Hurry up! We are waiting, perform a transactions like : Withdraw cash, deposit funds transfer or bill payments

                            </div>

                            <div className="link-useful">

                                <div className="explain"> View Explainer Video </div>
                                <div className="stroke"></div>
                                <div className="explain">Read Article</div>

                            </div>


                        </motion.div>

                        <motion.div className="content-start bottom-right" initial = {{opacity : 0, x : 100}} whileInView={{opacity : 1, x : 0}} transition = {{type : 'spring', delay : 0.6}}>

                            <div className="topic">04. Updrage To Odogwu</div>
                            
                            <div className="content-started-body">

                                Sign up for an account with your fullname, email and phone number. Follow the prompt and setup other required data.

                            </div>

                            <div className="link-useful">

                                <div className="explain"> View Explainer Video </div>
                                <div className="stroke"></div>
                                <div className="explain">Read Article</div>

                            </div>


                        </motion.div>

                    </div>

                </div>

            </Guide>

        </div>

  )
}
