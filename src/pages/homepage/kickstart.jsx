import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import phone from '../../assets/photos/Dashboard Iphone.svg'

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

                        <div className="content-start top-left">

                            <div className="topic">01. Sign Up</div>
                            
                            <div className="content-started-body">

                                Sign up for an account with your fullname, email and phone number. Follow the prompt and setup other required data.

                            </div>

                            <div className="link-useful">

                                <div className="explain"> View Explainer Video </div>
                                <div className="stroke"></div>
                                <div className="explain">Read Article</div>

                            </div>


                        </div>

                        <div className="content-start top-right">

                            <div className="topic">02. Fund your wallet</div>
                            
                            <div className="content-started-body">

                                Using your debit card, bank account, USSD or bank transfer, fund you wallet via payment portal for free secured by paystack. 

                            </div>

                            <div className="link-useful">

                                <div className="explain"> View Explainer Video </div>
                                <div className="stroke"></div>
                                <div className="explain">Read Article</div>

                            </div>


                        </div>

                        <div className="content-start bottom-left">

                            <div className="topic">03. Perform Transaction</div>
                            
                            <div className="content-started-body">

                                Hurry up! We are waiting, perform a transactions like : Withdraw cash, deposit funds transfer or bill payments

                            </div>

                            <div className="link-useful">

                                <div className="explain"> View Explainer Video </div>
                                <div className="stroke"></div>
                                <div className="explain">Read Article</div>

                            </div>


                        </div>

                        <div className="content-start bottom-right">

                            <div className="topic">04. Updrage To Odogwu</div>
                            
                            <div className="content-started-body">

                                Sign up for an account with your fullname, email and phone number. Follow the prompt and setup other required data.

                            </div>

                            <div className="link-useful">

                                <div className="explain"> View Explainer Video </div>
                                <div className="stroke"></div>
                                <div className="explain">Read Article</div>

                            </div>


                        </div>

                    </div>

                </div>

            </Guide>

        </div>

  )
}
