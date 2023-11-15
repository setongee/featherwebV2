import React from 'react'
import Guide from '../../components/displayGuideComp/guide'
import patterns from '../../assets/photos/pattern_feather_x.png'
import featherHands from '../../assets/photos/feather_change.gif'
import bolt from '../../assets/photos/bolt.gif'

const SuperCharged = () => {

    return (

        <div className="supercharged">

            <Guide>

                <div className="charged">

                    <div className="bolt">
                        <img src={bolt} alt="" />
                    </div>

                    <div className="textArea">

                        <div className="texting">
                            <div className="topText">
                                Super <span>charged</span> digital wallet in {<br></br>} the palm of your hands.                   
                            </div>

                            <div className="subTopText">

                                Enjoy powerful services perfectly tailored for you, our driving force is to eliminate your pain points and enhance convenience in transaction.

                            </div>

                            <div className="explore">
                                Explore our features
                            </div>
                        </div>

                        <div className="pattern">
                            <img src={patterns} alt="feather patterns" />
                        </div>


                    </div>

                    <div className="handPhone">
                        <img src={featherHands} alt="" />
                    </div>

                </div>

            </Guide>

        </div>

    )

}

export default SuperCharged