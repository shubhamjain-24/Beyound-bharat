import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
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

  const redirectToWhatsApp = () => {
    const phoneNumber = '7016522535'; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`whatsapp-button ${isVisible ? 'visible' : ''}`} onClick={redirectToWhatsApp}>
      <div className="whatsapp_icon">
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default WhatsAppButton;
