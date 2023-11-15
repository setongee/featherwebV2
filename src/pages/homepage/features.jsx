import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import CashWithdraw from '../../assets/logo/feather_cash_withdraw.png'
import funds from '../../assets/logo//nicesmile.png'
import bills from '../../assets/logo/powerBills.png'
import chatConvo from '../../assets/logo/chatsconvo.png'
import patterns from '../../assets/photos/pattern_feather_x.png'

const Features = () => {

    return (

        <div className="features">

            <Guide>


                <div className="featureSet">

                    <div className="feature feature1">

                        <div className="photoHold">

                            <div className="pattern">
                                <img src={patterns} alt="feather patterns" />
                            </div>

                            <div className="mainPic">
                                <img src={CashWithdraw} alt="feather africa - cash withdrawal feature" />
                            </div>
                            
                        </div>

                        <div className="textPin">

                            <div className="tag"> Cash on the Go <i className="fi fi-rr-angle-small-right"></i></div>

                            <div className="content">

                                Withdraw your cash from verified & trusted merchants near you.

                            </div>

                            <div className="sub_content">
                                Enjoy powerful services perfectly tailored for you, our driving force is to eliminate your pain points and enhance convenience in transaction.
                            </div>

                            <div className="proof">Curious? <a href="#">Learn More</a> <i className="fi fi-rr-angle-small-right"></i> </div>

                        </div>

                    </div>



                    {/* feature 2 */}


                    <div className="feature feature2">

                        <div className="textPin">

                            <div className="tag"> Funds Transfer <i className="fi fi-rr-angle-small-right"></i> </div>

                            <div className="content">

                                Send money to other feather users for free and any nigerian bank.

                            </div>

                            <div className="sub_content">
                                Enjoy powerful services perfectly tailored for you, our driving force is to eliminate your pain points and enhance convenience in transaction.
                            </div>

                            <div className="proof">Curious? <a href="#">Learn More</a> <i className="fi fi-rr-angle-small-right"></i> </div>

                        </div>

                        <div className="photoHold flip">

                            <div className="pattern">
                                <img src={patterns} alt="feather patterns" />
                            </div>

                            <div className="mainPic">
                                <img src={funds} alt="feather africa - transfer funds feature" />
                            </div>

                        </div>

                    </div>


                    {/* feature 3 */}


                    <div className="feature feature3">

                        <div className="photoHold">
                            
                            <div className="pattern">
                                <img src={patterns} alt="feather patterns" />
                            </div>

                            <div className="mainPic">

                                <img src={bills} alt="feather africa - bill payment feature" />

                            </div>
                            
                        </div>

                        <div className="textPin">

                            <div className="tag"> Bill Payments <i className="fi fi-rr-angle-small-right"></i></div>

                            <div className="content">

                                Pay your bills with speed, you never have to miss a thing again.

                            </div>

                            <div className="sub_content">
                                Enjoy powerful services perfectly tailored for you, our driving force is to eliminate your pain points and enhance convenience in transaction.
                            </div>

                            <div className="proof">Curious? <a href="#">Learn More</a> <i className="fi fi-rr-angle-small-right"></i> </div>

                        </div>

                    </div>



                    {/* feature 4 */}


                    <div className="feature feature4">

                        <div className="textPin">

                            <div className="tag"> Conversations <i className="fi fi-rr-angle-small-right"></i></div>

                            <div className="content">

                                Chat with other feather users and peers for <span>free.</span>

                            </div>

                            <div className="sub_content">
                                Enjoy powerful services perfectly tailored for you, our driving force is to eliminate your pain points and enhance convenience in transaction.
                            </div>

                            <div className="proof">Curious? <a href="#">Learn More</a> <i className="fi fi-rr-angle-small-right"></i> </div>

                        </div>

                        <div className="photoHold flip">

                            <div className="pattern">
                                <img src={patterns} alt="feather patterns" />
                            </div>

                            <div className="mainPic">

                                <img src={chatConvo} alt="feather africa - conversations & chat feature" />
                                
                            </div>

                            
                        </div>

                    </div>



                </div>


            </Guide>

        </div>

    )

}

export default Features