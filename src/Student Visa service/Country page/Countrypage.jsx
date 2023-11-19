import React from 'react'
import './Countrypage.css'
import Uk from './UK/uk'
import Us from './US/Us'
import Germany from './Germany/Germany'
import Canada from './Canada/canada'
const Countrypage = () => {
  return (
    <>
    <div className="countryPage_MainContainer">
        <div className="cp_headText">
        Consultation For Major Study Destinations
        </div>
    </div>
    <Uk/>
    <Us/>
    <Germany/>
    <Canada/>
    </>
  )
}

export default Countrypage