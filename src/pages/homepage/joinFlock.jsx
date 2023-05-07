import React,{useState, useEffect} from 'react'
import axios from 'axios'

import Guide from '../../components/displayGuideComp/guide'
import users from '../../assets/logo/users.png'
import play from '../../assets/logo/downloadPlay.svg'
import app from '../../assets/logo/downloadApp.svg'


const JoinFlock = () => {


    const [stat, setStat] = useState('5,000')

    useEffect(() => {
        
        axios.get('https://featherafrica.co:3300/api/v1/admin/stats')
        .then((e) => setStat(e.data.data.users.totalUsers.toLocaleString()))

        
    }, [stat]);

    

    return (

        <div className="flockJoin">

            <Guide>

                <div className="otherStat">

                    <div className="users">

                        <div className="users_img">
                            <img src={users} alt="join the flock" />
                        </div>

                        <div className="joinText">
                            Join {stat}+ {<br></br>} people on the <span>flock</span>
                        </div>

                    </div>

                    <div className="downloadStores">
                        <div className="downloadBtn_show"> <img src={play} alt="" /> </div>
                        <div className="downloadBtn_show"> <img src={app} alt="" /> </div>
                    </div>

                </div>

            </Guide>

        </div>

    )

}

export default JoinFlock