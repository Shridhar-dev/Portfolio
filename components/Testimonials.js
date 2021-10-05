import MyImg from '../public/Ellipse 4.png'
import GajImg from '../public/gajesh.jpg'

function Testimonials() {
    return (
        <div className="container  py-5 mt-5" style={{position:'relative'}}>
            <h1 className="display-5 text-center mb-5 pb-2" style={{fontWeight:'700',color:'white'}}>Testimonials</h1>
            <div className="d-flex my-5 justify-content-between align-items-center">
                <div className=" text-center my-5 px-1" style={{fontSize:'1.5rem',lineHeight:'2.5rem',padding:'5rem 0rem',borderRadius:'10px',width:'45%',background:'black',color:'white'}}>
                    &quot; Super Fast Delivery &quot;
                    <small className="mt-5" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>Founder Gaj Finance and Taksh</small>
                </div>
                <div className=" text-center display-6 my-5" style={{width:'45%'}}>
                    <img src={'https://pbs.twimg.com/media/E-WgX5aVUAIRhEc?format=jpg&name=small'} className="img-fluid rounded-circle" width="100" />
                    <small className="mt-4" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>Gajesh Naik</small>
                </div>
            </div>
            <div className="d-flex my-5 justify-content-between align-items-center">
                <div className=" text-center display-6 my-5" style={{width:'45%'}}>
                    <img src={MyImg.src} className="img-fluid" width="100" />
                    <small className="mt-5" style={{opacity:'0.5',fontSize:'1rem',display:'block',color:'white'}}>Founder Gaj Finance and Taksh</small>
                </div>
                <div className=" text-center my-5 px-1" style={{fontSize:'1.5rem',lineHeight:'2.5rem',padding:'5rem 0rem',borderRadius:'10px',width:'45%',background:'black',color:'white'}}>
                    &quot; Super Fast Delivery &quot;
                </div>
            </div>
        </div>
    )
}

export default Testimonials
