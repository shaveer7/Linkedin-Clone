const ColoredButton = ({title,onClick}) => {
  return (
    <button onClick={onClick} className='bg-white rounded-2xl border border-[#0B65C2] px-3.5 py-1 hover:cursor-pointer hover:border-[#004182] hover:bg-[#eaf1f8] hover:outline-0.5 transition duration-200' >
        <span className="font-semibold text-[#0B65C2]" >{title}</span>
    </button>
  )
}

export default ColoredButton
