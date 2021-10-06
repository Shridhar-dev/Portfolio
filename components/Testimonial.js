import React from 'react'

function Testimonial(props) {
    return(
    props.dir === "right" ? 

        <>
            <div  className="d-flex align-items-center justify-content-center col-12 col-md-6">
                <div className=" text-center my-5 px-1" style={{fontSize:'1.5rem',lineHeight:'2.5rem',padding:'5rem 0rem',borderRadius:'10px',width:'100%',background:'black',color:'white'}}>
                    &quot; Super Fast Delivery &quot;
                    <small className="mt-5" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>Founder Gaj Finance and Taksh</small>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center col-12 col-md-6">
                    <div className=" text-center display-6 my-5" style={{width:'100%'}}>
                    <img src={'https://pbs.twimg.com/media/E-WgX5aVUAIRhEc?format=jpg&name=small'} className="img-fluid rounded-circle" width="100" />
                    <small className="mt-4" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>Gajesh Naik</small>
                </div>
            </div>
        </>
    :
        <>
            <div className="d-flex align-items-center justify-content-center col-12 col-md-6">
                    <div className=" text-center display-6 my-5" style={{width:'100%'}}>
                    <img src={'https://pbs.twimg.com/media/E-WgX5aVUAIRhEc?format=jpg&name=small'} className="img-fluid rounded-circle" width="100" />
                    <small className="mt-4" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>Gajesh Naik</small>
                </div>
            </div>
            <div  className="d-flex align-items-center justify-content-center col-12 col-md-6">
                <div className=" text-center my-5 px-1" style={{fontSize:'1.5rem',lineHeight:'2.5rem',padding:'5rem 0rem',borderRadius:'10px',width:'100%',background:'black',color:'white'}}>
                    &quot; Super Fast Delivery &quot;
                    <small className="mt-5" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>Founder Gaj Finance and Taksh</small>
                </div>
            </div>
        </>
        )
}

export default Testimonial
