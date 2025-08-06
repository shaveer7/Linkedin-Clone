import React from 'react'

const GrayedButton = ({title}) => {
  return (
    <button className='bg-[#E8E8E8] rounded-2xl px-3.5 py-1 font-semibold text-[#A2A2A2] hover:cursor-pointer' >
        {title}
    </button>
  )
}

export default GrayedButton
