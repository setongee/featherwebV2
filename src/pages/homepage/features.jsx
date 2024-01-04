import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import CashWithdraw from '../../assets/photos/transferr.svg'
import funds from '../../assets/photos/transferr2.svg'
import bills from '../../assets/photos/billPayment.svg'
import chatConvo from '../../assets/photos/chatz.svg'
import patterns from '../../assets/photos/pattern_feather_x.png'

import CashWithdraw1 from '../../assets/logo/withdraw1.svg'
import funds1 from '../../assets/logo/funds.svg'
import bills2 from '../../assets/logo/biller.svg'
import chatConvo2 from '../../assets/logo/chat1.svg'

import { motion, stagger } from "framer-motion"

const Features = () => {

    return (

        <div className="features">

            <Guide>

                <div className="featureSet">

                <div className="leap">

                    <motion.div 

                        className="feature feature1"

                        initial = {{
                            opacity : 0,
                            y : 100
                        }}

                        whileInView={{
                            opacity : 1,
                            y : 0
                        }}

                        transition = {{duration : .25, ease : 'linear'}}

                         viewport={{
                                once : true
                            }}
                    >


                        <div className="pattern">
                            <img src={patterns} alt="feather patterns" />
                        </div>

                        <div className="textPin">

                            <div className="tag"> 
                                <i className="fi fi-rr-exit"></i>
                            </div>

                            <div className="content">

                                Withdraw your cash from verified & trusted merchants near you.

                            </div>

                            <div className="sub_content">
                                Enjoy powerful services perfectly tailored for you, our driving force is to eliminate.
                            </div>

                            <div className="proof"> Get the app <i className="fi fi-rr-angle-small-right"></i> </div>

                        </div>

                        <div className="photoHold">

                            <div className="mainPic">
                                <img className = "l"  src={CashWithdraw} alt="feather africa - cash withdrawal feature" />
                                <img className = "m"  src={CashWithdraw1} alt="feather africa - cash withdrawal feature" />
                            </div>
                            
                        </div>

                    </motion.div>


                    {/* Feature 4 */}


                    <motion.div 

                    className="feature feature4"

                        initial = {{
                            opacity : 0,
                            y : 100
                        }}

                        whileInView={{
                            opacity : 1,
                            y : 0
                        }}

                        transition = {{duration : .25, ease : 'linear'}}

                         viewport={{
                                once : true
                            }}
                    
                    >

                            <div className="pattern">
                                <img src={patterns} alt="feather patterns" />
                            </div>

                            <div className="textPin">

                                <div className="tag"> <i className="fi fi-sr-receipt"></i> </div>

                                <div className="content">

                                    Chat with other feather users and merchants for <span>free.</span>

                                </div>

                                <div className="sub_content">
                                    Sending money to family, friends and anyone has never been easier.
                                </div>

                                <div className="proof"> Get the app <i className="fi fi-rr-angle-small-right"></i> </div>

                            </div>

                            <div className="photoHold">

                            <div className="mainPic">
                                <img className = "l" src={chatConvo} alt="feather africa - cash withdrawal feature" />
                                <img className = "m" src={chatConvo2} alt="feather africa - cash withdrawal feature" />
                            </div>
                            
                        </div>

                    </motion.div>

                </div>


                {/* Mobile Side of things */}


                <div className="leap leap2">

                    <motion.div 

                        className="feature feature1"

                        initial = {{
                            opacity : 0,
                            y : 100
                        }}

                        whileInView={{
                            opacity : 1,
                            y : 0
                        }}

                        transition = {{duration : .25, ease : 'linear'}}

                         viewport={{
                                once : true
                            }}
                    >


                        <div className="pattern">
                            <img src={patterns} alt="feather patterns" />
                        </div>

                        <div className="textPin">

                            <div className="tag"> 
                                <i className="fi fi-rr-exit"></i>
                            </div>

                            <div className="content">

                            Pay your bills with ease, never miss a thing again.


                            </div>

                            <div className="sub_content">
                            Hey, never miss a subscription again, we got you covered with bill payments
                            </div>

                            <div className="proof"> Get the app <i className="fi fi-rr-angle-small-right"></i> </div>

                        </div>

                        <div className="photoHold">

                            <div className="mainPic">
                                <img className = "l"  src={bills} alt="feather africa - cash withdrawal feature" />
                                <img className = "m"  src={bills2} alt="feather africa - cash withdrawal feature" />
                            </div>
                            
                        </div>

                    </motion.div>


                    {/* Feature 4 */}


                    <motion.div 

                    className="feature feature4"

                        initial = {{
                            opacity : 0,
                            y : 100
                        }}

                        whileInView={{
                            opacity : 1,
                            y : 0
                        }}

                        transition = {{duration : .25, ease : 'linear'}}

                         viewport={{
                                once : true
                            }}
                    
                    >

                            <div className="pattern">
                                <img src={patterns} alt="feather patterns" />
                            </div>

                            <div className="textPin">

                                <div className="tag"> <i className="fi fi-sr-receipt"></i> </div>

                                <div className="content">

                                    Send money to feather users and any nigerian bank.

                                </div>

                                <div className="sub_content">
                                    Sending money to family, friends and anyone has never been easier.
                                </div>

                                <div className="proof"> Get the app <i className="fi fi-rr-angle-small-right"></i> </div>

                            </div>

                            <div className="photoHold">

                            <div className="mainPic">
                                <img className = "l" src={funds} alt="feather africa - cash withdrawal feature" />
                                <img className = "m" src={funds1} alt="feather africa - cash withdrawal feature" />
                            </div>
                            
                        </div>

                    </motion.div>

                </div>


                {/* DESKTOP OPTIONS DOWN IN THE WAY */}


                    {/* feature 2 */}

                    <div className="feature-grp">

                        <motion.div 
                        
                        className="feature feature2"

                            initial = {{
                                opacity : 0,
                                y : 100
                            }}

                            whileInView={{
                                opacity : 1,
                                y : 0
                            }}

                            transition = {{duration : .2, ease : 'linear'}}

                             viewport={{
                                once : true
                            }}
                        
                        >

                            <div className="pattern">
                                <img src={patterns} alt="feather patterns" />
                            </div>

                            <div className="textPin">

                            <div className="tag"> <i className="fi fi-sr-receipt"></i> </div>

                                <div className="content">

                                    Send money to feather users and any nigerian bank.

                                </div>

                                <div className="sub_content">
                                    Sending money to family, friends and anyone has never been easier.
                                </div>

                                <div className="proof"> Get the app <i className="fi fi-rr-angle-small-right"></i> </div>

                            </div>

                            <div className="flip">

                                <div className="mainPic">
                                <img className = "l" src={funds} alt="feather africa - cash withdrawal feature" />
                                <img className = "m" src={funds1} alt="feather africa - cash withdrawal feature" />
                                </div>

                            </div>

                        </motion.div>


                        <div className="downUp">

                        
                            {/* feature 3 */}

                            <motion.div 
                            
                            className="feature feature3"

                            initial = {{
                                opacity : 0,
                                y : 100
                            }}

                            whileInView={{
                                opacity : 1,
                                y : 0
                            }}

                            transition = {{duration : .2, ease : 'linear', delay : 0.1}}

                             viewport={{
                                once : true
                            }}
                            
                            >

                                <div className="pattern">
                                    <img src={patterns} alt="feather patterns" />
                                </div>

                                <div className="textPin">

                                <div className="tag"> <i className="fi fi-sr-receipt"></i> </div>

                                    <div className="content">

                                        Pay your bills with ease, never miss a thing again.

                                    </div>

                                    <div className="sub_content">
                                        Hey, never miss a subscription again, we got you covered with bill payments
                                    </div>

                                    <div className="proof"> Get the app <i className="fi fi-rr-angle-small-right"></i> </div>

                                    <div className="flip">

                                        <div className="mainPic">
                                            <img className = "l" src={bills} alt="feather africa - cash withdrawal feature" />
                                            <img className = "m" src={bills2} alt="feather africa - cash withdrawal feature" />
                                        </div>

                                    </div>

                                </div>

                            </motion.div>

                        </div>


                        {/* End of DownUP */}


                    </div>


                </div>


            </Guide>

        </div>

    )

}

export default Features