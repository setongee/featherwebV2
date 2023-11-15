import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import strip from '../../assets/photos/envoy.svg'

export default function Footer() {


  return (


    <div className="footerArea">

<div className="stripContainer2">
                <img src={strip} alt="feather wave" />
            </div>

        <Guide>

            <div className="footer">

                <div className="signUp">

                    <div className="smallText">Try Feather Now</div>
                    <div className="topic">Get Started Today, create an { <br/> } account for free In 5 Mins</div>

                </div>

            </div>

        </Guide>

    </div>


  )



}
