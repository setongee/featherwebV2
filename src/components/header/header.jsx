import React, {useState, useEffect} from 'react'
import './header.scss'
import Guide from '../displayGuideComp/guide'
import { useNavigate, useParams, useMatch } from 'react-router-dom';

import featherLogo from '../../assets/logo/feather_africa_logo_black.png'
import featherLogoWhite from '../../assets/logo/feather_africa_logo_white.png'
import mobileBG from '../../assets/logo/lines_feather_strip.png'
import HeaderSm from './header_sm';

import HoverCard from './hoverCard';
import HoverCardFeatures from './hoverCard-features';

const Header = () => {

    let navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [isFeatureOpen, setIsFeatureOpen] = useState(false);
    const [isFeature2Open, setIsFeature2Open] = useState(false);

    const closeMenu = () => {

        setMenuOpen(false);

    }

    const openMenu = () => {

        setMenuOpen(true);

    }

    const In = () => {

        setIsFeatureOpen(true);

    }

    const Out = () => {

        setIsFeatureOpen(false);

    }

    const In2 = () => {

        setIsFeature2Open(true);

    }

    const Out2 = () => {

        setIsFeature2Open(false);

    }

    useEffect(() => {
        
        setIsFeatureOpen(false);
        setIsFeature2Open(false);

        window.scrollTo(0,0)

    }, [window.location.pathname]);

    return (

        <div className="header">

            {
                menuOpen ? <HeaderSm  closeMenuFunction = {closeMenu} /> : null
            }

            <Guide>

                <div className="heading">

                    <div className="brandLogo" onClick={()=> navigate('/')}> <img src={featherLogo} alt="feather logo black" /> </div>

                    <div className="navigation">
                        
                        <div className="navlinks" onMouseOver={ () => In() } onMouseLeave={ () => Out() } > 

                            <div className="link" > Features <i className="fi fi-rr-angle-small-down"></i> </div>

                            {
                                isFeatureOpen ? 
                                    
                                    <div className="hoverr">

                                        <HoverCard cursor = {Out} cursorIn = {In} /> 

                                    </div>

                                : null
                            }

                        </div>

                        <div className="navlinks" onMouseOver={ () => In2() } onMouseLeave={ () => Out2() } > 

                            <div className="link" > Products <i className="fi fi-rr-angle-small-down"></i> </div>

                            {
                                isFeature2Open ? 
                                    
                                    <div className="hoverr">

                                        <HoverCardFeatures cursor = {Out2} cursorIn = {In2} /> 

                                    </div>

                                : null
                            }

                        </div>

                         <div className="navlinks"> 

                            <a href='https://getfeather.tawk.help/' className="link"> Help Center </a>

                        </div>

                        

                    </div>

                    <div className="authButtons"> 

                        <div className="loginBtn"> Login </div>
                        <div className="signUpBtn"> Get started <i className = "fi fi-rr-horizontal-rule"></i> for free </div>

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