import React from 'react'

function Testimonial(props) {
    return(
    props.dir === "right" ? 

        <div className="grid grid-cols-12 grid-flow-row gap-4 my-12">
            <div  className="flex items-center justify-center col-span-12 md:col-span-7 order-12 md:order-1">
                <div className=" text-center my-12 px-12" style={{fontSize:'1.2rem',lineHeight:'2.5rem',padding:'5rem 3rem',borderRadius:'10px',width:'100%',background:'black',color:'white'}}>
                    &quot; {props.content} &quot;
                    <small className="mt-12" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>{props.designation}</small>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-12 md:col-span-5 order-1 md:order-12">
                    <div className=" text-center text-6xl mb-0 md:my-12 " style={{width:'100%'}}>
                    <img src={props.img} className="img-fluid rounded-full mx-auto" width="100" alt={props.alt}/>
                    <small className="mt-6" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>{props.name}</small>
                </div>
            </div>
        </div>
    :
        <div className="grid grid-cols-12 grid-flow-row gap-4 my-12">
            <div className="flex items-center justify-center col-span-12 md:col-span-5">
                    <div className=" text-center text-6xl mb-0 md:my-5" style={{width:'100%'}}>
                    <img src={props.img} className="img-fluid rounded-full mx-auto" width="100" alt={props.alt}/>
                    <small className="mt-6" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>{props.name}</small>
                </div>
            </div>
            <div  className="flex items-center justify-center col-span-12 md:col-span-7">
                <div className=" text-center my-12 px-12" style={{fontSize:'1.2rem',lineHeight:'2.5rem',padding:'5rem 3rem',borderRadius:'10px',width:'100%',background:'black',color:'white'}}>
                    &quot; {props.content} &quot;
                    <small className="mt-12" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>{props.designation}</small>
                </div>
            </div>
        </div>
        )
}

export default Testimonial
