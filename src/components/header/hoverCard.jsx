import React from 'react'

import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// icons

import withdrawIcons from '../../assets/photos/header_icons/withdrawal.png'
import chatIcons from '../../assets/photos/header_icons/chat.png'
import billsIcons from '../../assets/photos/header_icons/bills.png'
import transferIcons from '../../assets/photos/header_icons/transfer.png'

export default function HoverCard( { cursor, cursorIn } ) {

    let navigate = useNavigate();

  return (
    
    <motion.div className="hoverCard" onMouseOver={ () => cursorIn() } onMouseLeave={ () => cursor() }  initial = {{opacity : 0, y : 50}} animate = {{opacity : 1, y : 0 }}>

        <div className="core">Core Features</div>

        <div className="hove" onClick={ () => navigate('/features/withdraw') } >  

            <div className="featIcon">

                <img src={withdrawIcons} alt="header feature icons" />

            </div>

            <div className="text">

                <div className="lead">Cash Withdraw</div> 
                <p>Withdraw cash from merchants</p>  

            </div>

        </div>

        <div className="hove" onClick={ () => navigate('/features/transfer') } >  

            <div className="featIcon">

                <img src={transferIcons} alt="header feature icons" />

            </div>

            <div className="text">

                <div className="lead">Funds Transfer</div> 
                <p>Send money to friends and families</p>  

            </div>

        </div>

        <div className="hove" onClick={ () => navigate('/features/bills') } >  

            <div className="featIcon">

                <img src={billsIcons} alt="header feature icons" />

            </div>

            <div className="text">

                <div className="lead">Bills Payment</div> 
                <p>Purchase Airtime, Cable & Eletricity bills</p>  

            </div>

        </div>

        <div className="hove" onClick={ () => navigate('/features/chat') } >  

            <div className="featIcon">

                <img src={chatIcons} alt="header feature icons" />

            </div>

            <div className="text">

                <div className="lead">Chat</div> 
                <p>Chat with other feather users for free.</p>  

            </div>

        </div>

        <div className="hoverY">For more information, visit <span>here</span></div>
        

    </motion.div>

  )
}
