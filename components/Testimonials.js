import MyImg from '../public/Ellipse 4.png'
import GajImg from '../public/gajesh.jpg'
import Testimonial from './Testimonial'

function Testimonials() {
    return (
        <div className="container  py-5 mt-5" style={{position:'relative'}}>
            <h1 className="display-5 text-center mb-5 pb-2" style={{fontWeight:'700',color:'white'}}>Testimonials</h1>
            <div className="row my-5 ">
                <Testimonial dir="right"/>
                <Testimonial dir="left"/>
            </div>
            
        </div>
    )
}

export default Testimonials
