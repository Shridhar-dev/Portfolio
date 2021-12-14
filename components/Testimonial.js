import React from 'react'

function Testimonial(props) {
    return(
    props.dir === "right" ? 

        <div className="row my-5">
            <div  className="d-flex align-items-center justify-content-center col-12 col-md-7 order-1 order-md-12">
                <div className=" text-center my-5 px-5" style={{fontSize:'1.2rem',lineHeight:'2.5rem',padding:'5rem 0rem',borderRadius:'10px',width:'100%',background:'black',color:'white'}}>
                    &quot; {props.content} &quot;
                    <small className="mt-5" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>{props.designation}</small>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center col-12 col-md-5 order-12 order-md-1">
                    <div className=" text-center display-6 mb-0 my-md-5 " style={{width:'100%'}}>
                    <img src={props.img} className="img-fluid rounded-circle" width="100" alt={props.alt}/>
                    <small className="mt-4" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>{props.name}</small>
                </div>
            </div>
        </div>
    :
        <div className="row my-5">
            <div className="d-flex align-items-center justify-content-center col-12 col-md-5">
                    <div className=" text-center display-6 mb-0 my-md-5 " style={{width:'100%'}}>
                    <img src={props.img} className="img-fluid rounded-circle" width="100" alt={props.alt}/>
                    <small className="mt-4" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>{props.name}</small>
                </div>
            </div>
            <div  className="d-flex align-items-center justify-content-center col-12 col-md-7">
                <div className=" text-center my-5 px-5" style={{fontSize:'1.2rem',lineHeight:'2.5rem',padding:'5rem 0rem',borderRadius:'10px',width:'100%',background:'black',color:'white'}}>
                    &quot; {props.content} &quot;
                    <small className="mt-5" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>{props.designation}</small>
                </div>
            </div>
        </div>
        )
}

export default Testimonial
