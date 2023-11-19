import React from 'react'

const Countrycard = ({ tittle, data,background}) => {
  return (
    <>
    <div className="countryCard_mainContainer">
        <img src={background} alt="" className="countrycard_img" />
        <div className="countrycard_textDiv">

        <div className='countryCard_tittle'>{tittle}</div>
        <div className='countryCard_data'>{data}</div>
        </div>
    </div>
    
    </>
  )
}

export default Countrycard