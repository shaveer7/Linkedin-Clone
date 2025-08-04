import React from 'react'

const PostReactionButton = ({name,Icon}) => {
  return (
    <div className='flex flex-row space-x-1 px-4 py-2 items-center rounded-xs hover:bg-[#F3F3F3] hover:cursor-pointer' >
        <Icon />
       <button className="pl-1">{name}</button>
    </div>
  )
}

export default PostReactionButton
