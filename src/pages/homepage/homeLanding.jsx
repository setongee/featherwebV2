import React from 'react'

import Typewriter from 'typewriter-effect';

import mark from '../../assets/logo/markout.png'
import strip from '../../assets/logo/strip2.svg'
import screens from '../../assets/logo/phoneScreens.png'



const HomeLanding = () => {

    return (

        <section className="homeLanding">

        <div className="stripContainer">
            <img src={strip} alt="feather wave" />
        </div>
        
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
        
            <div className="phoneScreens">
                <img src={screens} alt="feather screens mockup" />
            </div>
        
        </div>
        
        
        
        </section>

    )

}

export default HomeLanding



