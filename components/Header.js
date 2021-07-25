function Header() {
    return (
        <div  className="container-fluid d-flex justify-content-center py-5" style={{background:'#1DA1F2'}}>
            <div className="d-flex flex-column justify-content-center align-items-center py-4" style={{maxWidth:'1400px'}}>
                <h1 className="head-line" style={{fontWeight:'700',color:'black'}} >Shridhar</h1>
                <h5 className="text-center mt-4" style={{fontSize:'1.5rem'}}>A front end developer based in Goa</h5>
                <div className="d-flex justify-content-between flex-wrap mt-5" style={{width:'70%'}}>
                    <div>
                        <h5 className="my-3">About</h5>
                        <h5 className="my-3">CSS Art Gallery</h5>
                        <h5 className="my-3">Testimonials</h5>
                    </div>
                    <div>
                        <h5 className="my-3">Projects</h5>
                        <h5 className="my-3">Skills</h5>
                        <h5 className="my-3">Contact</h5>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header
