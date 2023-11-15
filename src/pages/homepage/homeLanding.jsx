import React from 'react'

import Typewriter from 'typewriter-effect';

import mark from '../../assets/logo/markout.png'
import strip from '../../assets/logo/strip2.svg'
import screens from '../../assets/logo/phoneScreens.png'
import peeps from '../../assets/photos/gp.png'
import Guide from '../../components/displayGuideComp/guide';



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
        
            <div className="subText">Feather is a modern digital wallet on steroids that helps you process your daily transactional needs. Do everything with Feather </div>
        
            <Guide>
                <div className="phoneScreens">
                    <img src={peeps} alt="feather screens mockup" />
                </div>
            </Guide>
        
        </div>
        
        
        
        </div>

    )

}

export default HomeLanding



