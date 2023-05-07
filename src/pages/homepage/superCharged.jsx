import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import handUltra from '../../assets/logo/HandUltra.png'

const SuperCharged = () => {

    return (

        <div className="supercharged">

            <Guide>

                <div className="charged">

                    <div className="handPhone">
                        <img src={handUltra} alt="" />
                    </div>

                    <div className="textArea">

                        <div className="topText">
                            Super <span>charged</span>⚡ digital wallet in the palm of your hands.                   
                        </div>

                        <div className="subTopText">

                            Enjoy powerful services perfectly tailored for you, our driving force is to eliminate your pain points and enhance convenience in transaction.

                        </div>


                    </div>

                </div>

            </Guide>

        </div>

    )

}

export default SuperCharged