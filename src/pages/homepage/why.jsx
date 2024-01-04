import React,{useEffect, useState} from 'react'
import axios from 'axios'

import Guide from '../../components/displayGuideComp/guide'

import {motion} from 'framer-motion'

// photos of the cards

import card1 from '../../assets/photos/wallet-d.svg'
import card2 from '../../assets/photos/pain.svg'
import card3 from '../../assets/photos/pink.svg'

import checks from '../../assets/photos/checkss.png'

export default function Why() {


    const [stat, setStat] = useState('5,000')
    const [transact, setTransact] = useState('5,000')

    useEffect(() => {
        
        axios.get('https://featherafrica.co/api/v1/admin/stats')
        .then((e) => {

            setStat(e.data.data.users.totalUsers.toLocaleString())
            setTransact(e.data.data.totalTransactions.toLocaleString())

        })

        
    }, [stat, transact]);

    const cards = [

        {
            img : card1,
            title : "Amazing features tailor-fit to your needs",
            sub : "We are a social mobile money market place that connects you to others. Place that connects you to others."
        }

    ]


  return (

    <div className="why">
        
        <Guide>

            <div className="why_area">

                <div className="feed">
                    <img src={checks} alt="" />
                </div>

                <div className="headTag"> 

                    <div className="headings">Trusted by {stat}+ users and {transact}+ transactions</div>
                    <p>Thousands of users trust Feather to aid them in their day-to-day financial needs. From withdrawing their cash with ease, to making payments a breeze</p>

                </div>

                <div className="cards">

                    <motion.div className="card"  initial = {{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 1}} viewport={{once : true}} >

                        <div className="cardImg"> <img src={card1} alt="cards1" /> </div>

                        <div className="title"> Features tailor-fit to your needs</div>

                        <div className="sub">We are a social mobile money market place that connects you to others.</div>

                        <div className="link">Get the App</div>

                    </motion.div>

                    <motion.div className="card"  initial = {{opacity : 0, x : -150}} whileInView={{opacity : 1, x : 0}} transition={{duration : 1, delay : 0.1, type : "spring"}} viewport={{once : true}} >

                        <div className="cardImg"> <img src={card2} alt="cards1" /> </div>

                        <div className="title">Industry grade encrypted security.</div>

                        <div className="sub">We are a social mobile money market place that connects you to others.</div>

                        <div className="link">Get the App</div>

                    </motion.div>

                    <motion.div className="card"  initial = {{opacity : 0, x : -100}} whileInView={{opacity : 1, x : 0}}  transition={{duration : 1, delay : 0.3, type : "spring"}} viewport={{once : true}} >

                        <div className="cardImg"> <img src={card3} alt="cards1" /> </div>

                        <div className="title"> Fast support and quick responses</div>

                        <div className="sub">We are a social mobile money market place that connects you to others.</div>

                        <div className="link">Get the App</div>

                    </motion.div>


                </div>

            </div>

        </Guide>

    </div>

  )

}
