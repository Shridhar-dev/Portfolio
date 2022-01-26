import Testimonial from './Testimonial'
import Devraj from '../public/devraj.png'
import Hrishi from '../public/hrishi.png'
import Gajesh from '../public/gajesh.png'

function Testimonials() {
    return (
        <div className="mx-10 md:mx-28  py-12" style={{position:'relative'}}>
            <h1 className="text-5xl text-center mb-12 pb-2" style={{fontWeight:'700',color:'white'}}>Testimonials</h1>
            <div className="my-12">
                <Testimonial 
                    dir="left" 
                    alt="Img of Devraj Chatribin, Founder of Design and Code" 
                    name="Devraj Chatribin" 
                    img={Devraj.src} 
                    content="I have worked with Shridhar for a very long time. We have collaborated on various web development projects and I am quite impressed with his development skills, and I am sure that he will be of great value to any company that he is a part of."
                    designation="Founder Design and Code"
                />
                <Testimonial 
                    dir="right" 
                    alt="Img of Hrishikesh Pai, Founder of Evolve" 
                    name="Hrishikesh Pai" 
                    img={Hrishi.src} 
                    content="A very talented, hardworking and most importantly punctual professional to work with. You will never get your job done beyond the timeline. Shridhar is Very responsive and innovative."
                    designation="Founder Evolve Media"
                />
                <Testimonial 
                    dir="left" 
                    alt="Img of Gajesh Naik, Founder of Gaj Finance and Taksh" 
                    name="Gajesh Naik" 
                    img={Gajesh.src}
                    content="Super Fast Delivery"
                    designation="Founder Gaj Finance and Taksh"
                />
                
            </div>
            
        </div>
    )
}

export default Testimonials
