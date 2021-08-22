import MyImg from '../public/Ellipse 4.png'

function Testimonials() {
    return (
        <div className="container  py-5 mt-5" style={{position:'relative'}}>
            <h1 className="display-5 text-center mb-5 pb-2" style={{fontWeight:'700',color:'white'}}>Testimonials</h1>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{overflow:'visible'}}>
                    <div className="carousel-item active">
                    <div  style={{background:'black',height:'35ch',borderRadius:'10px',margin:'0% 15%',objectFit:'contain'}}>
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item" style={{overflow:'visible'}}>
                    <div className="d-flex justify-content-center pt-0 mt-0 pt-md-5 mt-md-5"  style={{background:'black',height:'35ch',borderRadius:'10px',margin:'0% 15%',overflow:'visible',maxHeight:'fit-content'}}>
                        <img src={MyImg.src} className="img-fluid testimonial-img" width="30%" />
                    </div>
                    <div className="carousel-caption pb-5 d-md-block">
                        <h5>Lorem Ipsum</h5>
                        <small className="">Lorem Ipsum</small>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <div  style={{background:'black',height:'35ch',borderRadius:'10px',margin:'0% 15%'}}>
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Testimonials
