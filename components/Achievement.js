import React from 'react'

function Achievement(props) {
    return (
        <div className="w-100 text-white d-block d-md-flex px-5 py-5 mt-5" style={{background:'black'}}>
            <img src={props.svg} className="img-fluid mb-5 mb-md-0" width="100"/>
            <div className="w-100 d-flex justify-content-start flex-column align-items-start px-4">
                <h2 className="text-start">{props.heading}</h2>
                <h6 className="mt-3 text-start" style={{lineHeight:'1.4rem',color:'rgba(255,255,255,0.7)'}}>{props.text}</h6>
            </div>
        </div>
    )
}

export default Achievement
