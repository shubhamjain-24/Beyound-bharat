import React from 'react'
import './Coaching.css'

const Coaching_card = ({ tittle, data, background }) => {
  return (
    <>
    <div className="coaching_mainCard">
        <div className="coaching_subcard">
            <div className="coaching_imgDiv">
            <img src={process.env.PUBLIC_URL + background} alt="img" className='coachingimg'/>
            </div>
            <div className="coaching_upperTextDiv">
                <div className="coaching_upperHead">{tittle}</div>
                <div className="coaching_uppersub">{data}</div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Coaching_card