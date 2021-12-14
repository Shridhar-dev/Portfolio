import Testimonial from './Testimonial'

function Testimonials() {
    return (
        <div className="container  py-5 mt-5" style={{position:'relative'}}>
            <h1 className="display-5 text-center mb-5 pb-2" style={{fontWeight:'700',color:'white'}}>Testimonials</h1>
            <div className="my-5">
                <Testimonial 
                    dir="right" 
                    alt="Img of Hrishikesh Pai, Founder of Evolve" 
                    name="Hrishikesh Pai" 
                    img="https://scontent.fgoi1-1.fna.fbcdn.net/v/t1.18169-1/p100x100/21731262_1537301149649797_4992030839776186592_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=yp1i6vdrNkEAX8BwtbV&_nc_ht=scontent.fgoi1-1.fna&oh=0ab03884e495259c330b3f726d8d5945&oe=61DA75A3" 
                    content="A very talented, hardworking and most importantly punctual professional to work with. You will never get your job done beyond the timeline. Shridhar is Very responsive and innovative."
                    designation="Founder Evolve Media"
                />
                <Testimonial 
                    dir="left" 
                    alt="Img of Gajesh Naik, Founder of Gaj Finance and Taksh" 
                    name="Gajesh Naik" 
                    img="https://pbs.twimg.com/media/E-WgX5aVUAIRhEc?format=jpg&name=small" 
                    content="Super Fast Delivery"
                    designation="Founder Gaj Finance and Taksh"
                />
                
            </div>
            
        </div>
    )
}

export default Testimonials
