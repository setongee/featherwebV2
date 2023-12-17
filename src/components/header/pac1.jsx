import React from 'react'
import { useNavigate } from 'react-router-dom'

// icons

import appStore from '../../assets/icons/app.svg'
import playstore from '../../assets/icons/play.svg'
import desktop from '../../assets/icons/desktop.svg'

export default function Pac1() {

    let navigate = useNavigate();

  return (

    <div>


        <a href='https://play.google.com/store/apps/details?id=feather.peer&hl=en&gl=NG' target='_blank' className="hove" >  

            <div className="featIcon">

                <img src={playstore} alt="header feature icons" />

            </div>

            <div className="text">

                <div className="lead">Downlad from playstore</div> 
                <p>Get the app for your android devices</p>  

            </div>

        </a>

        <a href='https://apps.apple.com/ng/app/feather-cash-on-the-go/id6447082427' target='_blank' className="hove" > 

            <div className="featIcon">

                <img src={appStore} alt="header feature icons" />

            </div>

            <div className="text">

                <div className="lead">Downlad from appstore</div> 
                <p>Get the app for your ios devices</p>  

            </div>

        </a>

    </div>

  )

}
