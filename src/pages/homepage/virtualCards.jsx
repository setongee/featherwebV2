import React from 'react'
import Guide from '../../components/displayGuideComp/guide'

import youtube from '../../assets/logo/pay_youtube_premium_with_feather_ africa.png'
import ig from '../../assets/logo/pay_instagram_ads_premium_with_feather_ africa.png'
import spotify from '../../assets/logo/pay_sportify_music_premium_with_feather_ africa.png'
import amazon from '../../assets/logo/shop_amazon_premium_with_feather_ africa.png'
import netflix from '../../assets/logo/pay_netflix_with_feather_ africa.png'

import virtualCardScreen from '../../assets/logo/feather_africa_vitual_card_screen.png'

const VirtualCard = () => {

    return (

        <div className="virtualcards">

            <Guide>

                <div className="virtual">

                    <div className="textShip">


                        <div className="tag"> Feather Cards <i className="fi fi-rr-angle-small-right"></i> </div>

                        <div className="mainText">

                            Shop, Pay, Stream and Subscribe freely, <span>Accepted Globally.</span>

                        </div>

                        <div className="subText">
                            Enjoy powerful services perfectly tailored for you, our driving force is to eliminate your pain points and enhance convenience in transaction.
                        </div>

                        <div className="supportChannels">

                            <p>Accepted on popular platforms like</p>

                            <div className="supportBizz">

                                <div className="bizz">
                                    <img src={youtube} alt="virtual card payments for youtube subscriptions in Nigeria" />
                                </div>

                                <div className="bizz">
                                    <img src={ig} alt="virtual card payments for instagram ads in Nigeria" />
                                </div>

                                <div className="bizz">
                                    <img src={netflix} alt="virtual card payments for netflix subscriptions in Nigeria" />
                                </div>

                                <div className="bizz">
                                    <img src={amazon} alt="virtual card payments for shopping on amazon in Nigeria" />
                                </div>

                                <div className="bizz">
                                    <img src={spotify} alt="virtual card payments for spotify subscriptions in Nigeria" />
                                </div>

                                <div className="bizzTxt">
                                    + Many More
                                </div>

                            </div>

                        </div>

                        <div className="linebr"></div>

                        <p className='pig'>Coming Soon</p>


                    </div>

                    <div className="phoneImg">

                        <img src={virtualCardScreen} alt="feather virtual card provider in Nigeria" />

                    </div>

                </div>

            </Guide>

        </div>

    )

}

export default VirtualCard