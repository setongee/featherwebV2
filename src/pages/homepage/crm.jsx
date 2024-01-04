import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import CrmImage from '../../assets/photos/crm.png'


export default function Crm() {

  const openIntercom = () => {

    window.Intercom('show');

  }

  return (
    
        <div className="crm">

            <Guide>

                <div className="crmPoint">

                    <div className="crmImg">
                        <img src={CrmImage} alt="Customer Rep Support - Feather Africa" />
                    </div>

                    <div className="crmContent">


                        <div className="mainText">

                           Yesso! We’re always happy to help you through your journey with feather.

                        </div>

                        <div className="subText">

                            Enjoy powerful services perfectly tailored for you, our driving force is to eliminate your pain points and enhance convenience in transaction.

                        </div>

                        <div className="btnNow" onClick={ () => openIntercom() } > Talk to support now </div>
                        

                    </div>

                </div>

            </Guide>

        </div>

  )
}
