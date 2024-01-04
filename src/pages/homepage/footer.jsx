import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import strip from '../../assets/photos/envoy.svg'
import playstore from '../../assets/logo/downloadPlay.svg'
import apple from '../../assets/logo/downloadApp.svg'
import logo from '../../assets/logo/feather_africa_logo_black.svg'
import {Link} from 'react-router-dom'

export default function Footer() {


  return (


    <div className="footerArea">

        <Guide>

            <div className="strips">
                <img src={strip} alt="" />
            </div>

            <div className="footer">

                <div className="tryFeather">

                    <div className="signUp">

                        <div className="smallText">Try Feather Now</div>
                        <div className="topic">Get Started Today, create an account for free in 5Mins</div>

                    </div>

                    <div className="downloadApp">

                        <a  target='_blank' href='https://play.google.com/store/apps/details?id=feather.peer&hl=en&gl=NG' className="downloaded">
                            <img src={playstore} alt="Download on Android Devices" />
                        </a>

                        <a  target='_blank' href='https://apps.apple.com/ng/app/feather-cash-on-the-go/id6447082427' className="downloaded">
                            <img src={apple} alt="Download on Apple Devices" />
                        </a>

                    </div>

                </div>

                <div className="footerLinks">


                    <div className="infoSocials">

                        <div className="logo"> <img src={logo} alt="Feather Logo" /> </div>

                        <div className="download"> Withdraw your cash on-the-go from merchants who have it in real-time. </div>

                        <div className="downloadApps">  
                        
                            <p>Download Apps</p>

                            <div className="downloadApp">

                                <a  target='_blank' href='https://play.google.com/store/apps/details?id=feather.peer&hl=en&gl=NG' className="downloaded">
                                    <img src={playstore} alt="Download on Android Devices" />
                                </a>

                                <a  target='_blank' href='https://apps.apple.com/ng/app/feather-cash-on-the-go/id6447082427' className="downloaded">
                                    <img src={apple} alt="Download on Apple Devices" />
                                </a>

                            </div>

                        </div>

                        <div className="socials">

                            <div className="social"> <i className="fi fi-brands-instagram"></i> </div>

                            <div className="social"> <i className="fi fi-brands-linkedin"></i> </div>

                            <div className="social"> <i className="fi fi-brands-facebook"></i> </div>

                            <div className="social"> <i className="fi fi-brands-twitter"></i> </div>

                        </div>

                    </div>


                    <div className="quickLinks">

                        <div className="section">

                            <div className="linkHeader"> Features </div>

                            {/* Links Below */}

                            <div className="linksPath">

                                <Link to ='/features/withdrawal'> Withdrawal </Link>
                                <Link to ='/features/transfers'> Transfers </Link>
                                <Link to ='/features/bills'> Bills Payment </Link>
                                <Link to ='/features/virtual'> Virtual Cards </Link>
                                <Link to ='/features/conversations'> Conversions </Link>

                            </div>

                        </div>


                        <div className="section">

                            <div className="linkHeader"> Company </div>

                            {/* Links Below */}

                            <div className="linksPath">

                                <Link to ='/company/blog'> Blog </Link>
                                <Link to ='/company/careers'> Careers </Link>
                                <Link to ='/company/faq'> FAQs </Link>

                            </div>

                        </div>


                        <div className="section">

                            <div className="linkHeader"> Resources </div>

                            {/* Links Below */}

                            <div className="linksPath">

                                <Link to ='/resources/blog'> Privacy Policy </Link>
                                <Link to ='/resources/careers'> Terms of Service </Link>
                                <Link to ='/resources/faq'> Cookie Policy </Link>
                                <Link to ='/resources/merchant' className='beam'> Become a Merchant </Link>

                            </div>

                        </div>


                        <div className="section">

                            <div className="linkHeader"> Contact </div>

                            {/* Links Below */}

                            <div className="linksPath">

                                <Link to = 'mailto:hello@feather.africa' className='beam'> hello@feather.africa </Link>

                                <div className="textOnly"> 38, Opebi Road, Ikeja Lagos, Nigeria </div>

                                <div className="textOnly"> 66 West Flagler Street - Suite 900Miami, FL 33130 </div>

                            </div>

                        </div>



                    </div>

                </div>

            </div>

        </Guide>

    </div>


  )



}
