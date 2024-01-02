import React from 'react'
import WhatsappPng from "../images/whatsappicon.png"
const WhatsappIcon = () => {
  return (
    <div className="whatsapp-icon-cont">
      <a href="https://api.whatsapp.com/send?phone=541128712555">
      <img src={WhatsappPng} alt="Logo de whatsapp"  />
      </a>
     
    </div>
  )
}

export default WhatsappIcon