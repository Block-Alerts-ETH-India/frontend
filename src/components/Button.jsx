import React from 'react'
import '../styles/Button.scss'

const Button = ({prefixLogo,text,suffixLogo, customClass}) => {
  return (
    <div className={`${customClass} button p-2 rounded-lg`}>
        {prefixLogo}
        <p className='text-md font-semibold'>{text}</p>
        {suffixLogo}
    </div>
  )
}

export default Button