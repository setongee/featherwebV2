import React, {useState, useEffect} from 'react'
import './header.scss'
import Guide from '../displayGuideComp/guide'
import { useNavigate } from 'react-router-dom';

import featherLogo from '../../assets/logo/feather_africa_logo_black.png'
import featherLogoWhite from '../../assets/logo/feather_africa_logo_white.png'
import mobileBG from '../../assets/logo/lines_feather_strip.png'
import HeaderSm from './header_sm';

const Header = () => {

    let navigate = useNavigate()

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {

        setMenuOpen(false);

    }

    const openMenu = () => {

        setMenuOpen(true);

    }

    return (

        <div className="header">

            {
                menuOpen ? <HeaderSm  closeMenuFunction = {closeMenu} /> : null
            }

            <Guide>

                <div className="heading">

                    <div className="brandLogo" onClick={()=> navigate('/')}> <img src={featherLogo} alt="feather logo black" /> </div>

                    <div className="navigation">
                        
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

                        

                    </div>

                    <div className="authButtons"> 

                        <div className="loginBtn"> Login </div>
                        <div className="signUpBtn"> Sign Up For Free </div>

                    </div>

                    <div className="mobileMenuIcon" onClick={() => openMenu()}>

                        <div className="div_line"></div>
                        <div className="div_line"></div>

                    </div>

                </div>

            </Guide>

        </div>

    )

}

export default Header