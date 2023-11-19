import React from 'react'

const TestemonialCard = ({name,message, university,avatar}) => {
  return (
    <div className="testeCard_mainContainer">
        <div className="testeCard_box">
            <div className="testeCard_textContainer">
                {message}
            </div>
        </div>
        <div className="testecard_infoDiv">
            <img src={avatar} alt="" className="testeAvatar" />
            <div className="testecard_nameDiv">
                <div className="testecard_name">
                    {name}
                </div>
                <div className="testecard_uni">
                    {university}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestemonialCard