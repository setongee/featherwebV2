import React, {useEffect, useState} from 'react'
import Guide from '../../components/displayGuideComp/guide';

export default function FAQs() {

    const showFaq = (e) => {

        console.log("rest")

        const checkIfOpen = document.querySelector('.openFaq');

        if (checkIfOpen === null) {

            const target = e.target;
            const getParentNode = target.parentNode.parentNode
            getParentNode.classList.add("openFaq")

            console.log(getParentNode)

        } else{

            checkIfOpen.classList.remove('openFaq');

            const target = e.target;
            const getParentNode = target.parentNode.parentNode
            getParentNode.classList.add("openFaq")
        }

        
    }

    const hideFaq = (e) => {

        const target = e.target;
        const getParentNode = target.parentNode.parentNode
        getParentNode.classList.remove("openFaq")

    }


  return (


    <div className="faqs">

        <Guide>

            <h1 className="titleHolder">Frequently Asked Questions</h1>

            <div className="faqBody">

                <div className="faq">

                    <div className="text-faq">

                        <div className="q">
                            
                            What is a Feather Tag?
                        
                        </div>

                        <div className="a">

                            A feather tag is a unique ID generated for you, once you register as a user. It can be customized to your satisfaction. With your feather tag, you can make in-app transactions seamlessly.

                        </div>

                    </div>

                    <div className="controller" onClick={ (e) => showFaq(e) }> <i className = "fi fi-rr-add"> </i> </div>

                    <div className="controller controllerB" onClick={ (e) => hideFaq(e) }> <i className = "fi fi-rr-minus"> </i> </div>

                </div>


                <div className="faq">

                    <div className="text-faq">

                        <div className="q">
                            
                        Are bank charges deducted when I fund my Feather wallet from my bank?
                        
                        </div>

                        <div className="a">

                            A feather tag is a unique ID generated for you, once you register as a user. It can be customized to your satisfaction. With your feather tag, you can make in-app transactions seamlessly.

                        </div>

                    </div>

                    <div className="controller" onClick={ (e) => showFaq(e) }> <i className = "fi fi-rr-add"> </i> </div>

                    <div className="controller controllerB" onClick={ (e) => hideFaq(e) }> <i className = "fi fi-rr-minus"> </i> </div>

                </div>


                <div className="faq">

                    <div className="text-faq">

                        <div className="q">
                            
                        How do I upgrade my account?
                        
                        </div>

                        <div className="a">

                            A feather tag is a unique ID generated for you, once you register as a user. It can be customized to your satisfaction. With your feather tag, you can make in-app transactions seamlessly.

                        </div>

                    </div>

                    <div className="controller" onClick={ (e) => showFaq(e) }> <i className = "fi fi-rr-add"> </i> </div>

                    <div className="controller controllerB" onClick={ (e) => hideFaq(e) }> <i className = "fi fi-rr-minus"> </i> </div>

                </div>



                <div className="faq">

                    <div className="text-faq">

                        <div className="q">
                            
                        How do I make money with Feather?
                        
                        </div>

                        <div className="a">

                            A feather tag is a unique ID generated for you, once you register as a user. It can be customized to your satisfaction. With your feather tag, you can make in-app transactions seamlessly.

                        </div>

                    </div>

                    <div className="controller" onClick={ (e) => showFaq(e) }> <i className = "fi fi-rr-add"> </i> </div>

                    <div className="controller controllerB" onClick={ (e) => hideFaq(e) }> <i className = "fi fi-rr-minus"> </i> </div>

                </div>



                <div className="faq">

                    <div className="text-faq">

                        <div className="q">
                            
                        I am unable to receive OTP in my phone number or email, what do I do?
                        
                        </div>

                        <div className="a">

                            A feather tag is a unique ID generated for you, once you register as a user. It can be customized to your satisfaction. With your feather tag, you can make in-app transactions seamlessly.

                        </div>

                    </div>

                    <div className="controller" onClick={ (e) => showFaq(e) }> <i className = "fi fi-rr-add"> </i> </div>

                    <div className="controller controllerB" onClick={ (e) => hideFaq(e) }> <i className = "fi fi-rr-minus"> </i> </div>

                </div>

            </div>

        </Guide>

    </div>


  )
}
