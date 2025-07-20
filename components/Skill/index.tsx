
function Skill({name}:{name:string}) {
  return (
    <div className='skill-tag cursor-grab bg-black absolute z-[999999] rounded-full pointer-events-none py-5 px-20'>
        <p className="text-white text-xl">{name}</p>
    </div>
  )
}

export default Skill