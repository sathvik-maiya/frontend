import React from 'react'

import './style.css'

const Button = (props) => {
  
  return (
    <div>
      <button type="button" className={`text-black bg-[${props.color}]  font-semibold lg:rounded lg:shadow-2xl text-[16px] px-[26px] py-[10px] text-center btn rounded-xl`}>
        {props.text}
      </button>
    </div>
  )
}

export default Button
