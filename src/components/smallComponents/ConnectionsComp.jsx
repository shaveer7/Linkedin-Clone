import React from 'react'

const ConnectionsComp = ({label, count}) => {
  return (
    <div className='flex justify-between items-center' >
      <div className='text-xs font-semibold hover:underline hover:cursor-pointer' >{label}</div>
      <div className='text-sm font-semibold text-[#004182]' >{count}</div>
    </div>
  )
}

export default ConnectionsComp
