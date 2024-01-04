import React from 'react'
import UpArrowIcon from './UpArrowIcon'
import WhatsappIcon from './WhatsappIcon'

const FloatingButons = ({scrolltoHome}) => {
  return (
    <div className='floating-cont'>
        <span onClick={scrolltoHome}>
        <UpArrowIcon />
        </span>
        <WhatsappIcon/>
    </div>
  )
}

export default FloatingButons