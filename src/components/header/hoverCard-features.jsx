import React, {useState, useEffect} from 'react'

import {motion} from 'framer-motion'
import Pac1 from './pac1'
import Pac2 from './pac2';

export default function HoverCardFeatures( { cursor, cursorIn } ) {

    const [isPeer, setIsPeer] = useState(true);

    useEffect(() => {

        

    }, [isPeer]);

  return (
    
    <motion.div className="hoverCard" onMouseOver={ () => cursorIn() } onMouseLeave={ () => cursor() }  initial = {{opacity : 0, y : 50}} animate = {{opacity : 1, y : 0 }}>

        <div className="core core2x"> 

            <p onClick={ () => setIsPeer(true) } className = { `${isPeer ? "active" : ""}` }  >For Peers</p>

            <p onClick={ () => setIsPeer(false) } className = { `${!isPeer ? "active" : ""}` }  > For Merchants</p>
        
        </div>

        {
            isPeer ? <Pac1/> : <Pac2 />
        }

        <div className="hoverY">For more information, visit <span>here</span></div>
        

    </motion.div>

  )
}
