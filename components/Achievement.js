import React from 'react'

function Achievement(props) {
    return (
        <div className="w-full text-white block md:flex px-12 py-12 mt-12" style={{background:'black'}}>
            <img src={props.svg} className="img-fluid mb-12 md:mb-0 mx-auto md:mx-0" width="100" alt={props.alt}/>
            <div className="w-full flex justify-start flex-col items-start px-6">
                <h2 className="text-left text-3xl">{props.heading}</h2>
                <h6 className=" mt-4 text-left" style={{lineHeight:'1.5rem',color:'rgba(255,255,255,0.7)'}}>{props.text}</h6>
            </div>
        </div>
    )
}

export default Achievement
