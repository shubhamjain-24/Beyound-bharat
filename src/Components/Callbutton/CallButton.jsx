import React, { useState, useEffect } from 'react';
import { FaPhone } from 'react-icons/fa';
import './CallButton.css';

const CallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 10000); 
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  const makeCall = () => {
    const phoneNumber = ''; 
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, '_blank');
  };

  return (
    <div className={`call-button ${isVisible ? 'visible' : ''}`} onClick={makeCall}>
      <div className="call-icon">
        <FaPhone />
      </div>
    </div>
  );
};

export default CallButton;
