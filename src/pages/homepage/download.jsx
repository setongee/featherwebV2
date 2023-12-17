import React from 'react'
import Guide from '../../components/displayGuideComp/guide'

import phone from '../../assets/logo/phones.png'
import appStore from '../../assets/logo/appStore.png'
import playstore from '../../assets/logo/playstore.png'
import webapp from '../../assets/logo/webapp.png'
import patterns from '../../assets/photos/pattern_feather_x.png'

import waves from '../../assets/logo/waves.png'

import {motion} from 'framer-motion'



export default function Download() {


  return (


    <div className="download">

        <div className="wavesBG">
            <img src={waves} alt="waves feather" />
        </div>

        <Guide>

             <motion.div className="flexy" initial = {{opacity : 0, scale : 0.8}} whileInView = {{opacity : 1, scale : 1}} transition={{duration : .2, ease : 'easeInOut'  }} viewport={{once : true}}>

                <div className="pattern">
                    <img src={patterns} alt="feather patterns" />
                </div>
                  
                  <div className="superBox">


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

                          </div>

                      </div>


                      <div className="featherphoto">

                          <img src={phone} alt="" />

                      </div>


                  </div>

             
              </motion.div>


        </Guide>

    </div>

  )
}
