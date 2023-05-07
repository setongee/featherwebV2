import React, { Children } from 'react'
import './guide.scss'

const Guide = (props) => {

    return (

        <div className='guidePack'> {props.children} </div>

    )

}

export default Guide