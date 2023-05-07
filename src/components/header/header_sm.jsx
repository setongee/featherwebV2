import React from 'react'


import { useNavigate } from 'react-router-dom';
import featherLogoWhite from '../../assets/logo/feather_africa_logo_white.png'
import mobileBG from '../../assets/logo/lines_feather_strip.png'


const HeaderSm = ({ closeMenuFunction }) => {

    let navigate = useNavigate()

    return (

        <div className="heading heading_sm">

            <div className="wholeTeam">


                <div className="headerSide">

                    <div className="brandLogo" onClick={()=> navigate('/')}> <img src={featherLogoWhite} alt="feather logo white" /> </div>

                    <div className="mobileMenuIcon mobileMenuIcon2" onClick={() => closeMenuFunction() } >

                        <div className="div_line"></div>
                        <div className="div_line"></div>

                    </div>

                </div>

                <div className="navigation_sm">
                    
                    <div className="navlinks"> 

                        <div className="link" onClick={()=> navigate('/features')}> Features <i className="fi fi-rr-angle-small-down"></i> </div>

                    </div>

                    <div className="navlinks"> 

                        <div className="link" onClick={()=> navigate('/features')}> Products <i className="fi fi-rr-angle-small-down"></i> </div>

                    </div>

                    <div className="navlinks"> 

                        <div className="link" onClick={()=> navigate('/faqs')}> FAQs </div>

                    </div>

                    <div className="navlinks"> 

                        <div className="link" onClick={()=> navigate('/blog')}> Blog </div>

                    </div>

                    <div className="navlinks"> 

                        <div className="link" onClick={()=> navigate('/support')}> Support </div>

                    </div>

                    <div className="navlinks"> 

                        <div className="link login" onClick={()=> navigate('/support')}> Login </div>

                    </div>
                    

                </div>

                <div className="footer_sm">

                    <div className="signupBtn_sm">Sign Up For Free</div>

                    <div className="info_sm">
                        <p>
                        Feather Africa Inc. is fully registered under the Nigerian law of section 23 sub section B as <span>“Flock technologies Limited”</span> and as such obey these laws.
                        </p>
                    </div>

                </div>


            </div>



            <div className="background_sm"> <img src={mobileBG} alt="feather strip" /> </div>

        </div>

    )

}

export default HeaderSm

