import React from 'react'

const TestemonialCard = ({name,message, university,avatar}) => {
  return (
    <div className="testeCard2_mainContainer">
        <div className="testeCard2_box">
            <div className="testeCard2_textContainer">
                {message}
            </div>
        </div>
        <div className="testeCard2_infoDiv">
            <img src={avatar} alt="" className="testeAvatar" />
            <div className="testeCard2_nameDiv">
                <div className="testeCard2_name">
                    {name}
                </div>
                <div className="testeCard2_uni">
                    {university}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestemonialCard