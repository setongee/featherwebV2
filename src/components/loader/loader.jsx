import React from 'react'
import './loader.scss';
import loader from '../../assets/logo/featherLoad.png'

export default function Loader() {

  return (

    <div className="loader">

        <div className="load">
            <img src={loader} alt="feather loader" />
        </div>
        
    </div>

  )

}
