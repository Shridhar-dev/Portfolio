import Testimonial from './Testimonial'

function Testimonials() {
    return (
        <div className="container  py-5 mt-5" style={{position:'relative'}}>
            <h1 className="display-5 text-center mb-5 pb-2" style={{fontWeight:'700',color:'white'}}>Testimonials</h1>
            <div className="my-5">
                <Testimonial dir="left" alt="Img of Gajesh Naik, Founder of Gaj Finance and Taksh"/>
            </div>
            
        </div>
    )
}

export default Testimonials
