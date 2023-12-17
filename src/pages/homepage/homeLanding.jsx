import React from 'react'

import Typewriter from 'typewriter-effect';

import mark from '../../assets/logo/markout.png'
import strip from '../../assets/logo/strip2.svg'
import screens from '../../assets/logo/phoneScreens.png'
import peeps from '../../assets/photos/gp.png'
import Guide from '../../components/displayGuideComp/guide';

import phones from '../../assets/photos/phoneCam.svg'
import lines from '../../assets/photos/lines_dash.svg'
import one from '../../assets/photos/1.svg'
import two from '../../assets/photos/2.svg'
import three from '../../assets/photos/3.svg'
import four from '../../assets/photos/4.svg'

import {motion} from 'framer-motion'


const HomeLanding = () => {

    return (

        <div className="homeLanding">
        
            <div className="textContent">
            
                <div className="mainText">
                    
                    The <span className='better'> better <div className="imgBetter"><img src={mark} alt="" /></div> </span> way to 
                    
                    <span className='typewritter'>
            
                        <Typewriter
            
                            options={{
                                strings: ['withdraw your money.', 'transfer money.', 'pay your bills.', 'spend & shop online.', 'accept payments.'],
                                autoStart: true,
                                loop: true,
                                delay : 50,
                                deleteSpeed : 30
                            }}
            
                        />
            
                    </span>
            
                </div>
            
                <div className="subText">Withdraw your cash on-the-go from merchants who have it in real-time. Whether it’s a mom-and-pop shop or brick-and-mortar store. <span> Your cash is now within reach! </span> </div>
            
                <motion.div className="phoneScreens" initial = {{y : 800}} animate = {{y : 0}} transition={{duration : 1, delay : 3, type : 'spring'}} >
                    <img src={phones} alt="feather screens mockup" />
                </motion.div>
            
            </div>

            <div className="stripContainer2">
                <img src={lines} alt="feather wave" />
            </div>


            {/* avartars */}

            <div className="avartar one">

                <img src={one} alt="" />

            </div>

            <div className="avartar two">

                <img src={two} alt="" />

            </div>

            <div className="avartar three">

                <img src={three} alt="" />

            </div>

            <div className="avartar four">

                <img src={four} alt="" />

            </div>
        
        
        </div>

    )

}

export default HomeLanding



