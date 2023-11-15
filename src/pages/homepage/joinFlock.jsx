import React,{useState, useEffect} from 'react'
import axios from 'axios'

import Guide from '../../components/displayGuideComp/guide'
import users from '../../assets/logo/popu.svg'
import play from '../../assets/logo/downloadPlay.svg'
import app from '../../assets/logo/downloadApp.svg'


const JoinFlock = () => {


    const [stat, setStat] = useState('5,000')

    useEffect(() => {
        
        axios.get('https://featherafrica.co/api/v1/admin/stats')
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
                            Join {stat}+ people on the <span>flock</span>
                        </div>

                    </div>

                    <div className="downloadStores">
                        <a className="downloadBtn_show" href='https://play.google.com/store/apps/details?id=feather.peer&hl=en&gl=NG' target='_blank' > <img src={play} alt="" /> </a>
                        <a className="downloadBtn_show" href='https://apps.apple.com/ng/app/feather-cash-on-the-go/id6447082427' target='_blank' > <img src={app} alt="" /> </a>
                    </div>

                </div>

            </Guide>

        </div>

    )

}

export default JoinFlock