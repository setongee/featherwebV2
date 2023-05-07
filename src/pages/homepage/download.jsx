import React from 'react'
import Guide from '../../components/displayGuideComp/guide'

import phone from '../../assets/logo/phones.png'
import appStore from '../../assets/logo/appStore.png'
import playstore from '../../assets/logo/playstore.png'
import webapp from '../../assets/logo/webapp.png'

import waves from '../../assets/logo/waves.png'



export default function Download() {


  return (


    <div className="download">

        <div className="wavesBG">
            <img src={waves} alt="waves feather" />
        </div>

        <Guide>

             <div className="flexy">
                  
                <div className='Supermain'>

                   <div className="padi">

                      Padi, no dulling, download the feather app today.

                  </div>

                  <div className="subpadi">

                    No time to check time. Download the app and start sending and receiving cash with ease, no delays.

                  </div>

                  <div className="btn">

                      <div className="btnone">
                        
                          <div className="btngoogle btn-grp">  <img src={playstore} alt="download feather mobile app from playstore for android devices" /> </div>
                          <div className="btnapple btn-grp">  <img src={appStore} alt="download feather mobile app from appstore for apple devices" /> </div>

                      </div>

                      <div className="btntwo">

                        <div className="btnweb btn-grp"> <img src={webapp} alt="Register and Login feather app on the web" /> </div>

                      </div>

                  </div>


                </div>


                <div className="featherphoto">
                    <img src={phone} alt="" />
                </div>

             
             </div>


        </Guide>

    </div>

  )
}
