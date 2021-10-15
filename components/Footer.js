
function Footer() {
    return (
        <div  className="container-fluid d-flex justify-content-center py-5" style={{background:'#1DA1F2',maxWidth:'100vw'}}>
             <div className="d-flex flex-column justify-content-center align-items-center py-0 py-md-4" style={{maxWidth:'1400px'}}>
                <div className="display-3  mb-0 mb-md-5">
                    <span className="footer___contact" style={{fontWeight:'700',color:'transparent'}}> Contact Us </span>
                   <strong className="d-none d-md-inline"> 👋  </strong>
                </div>
                <div className="display-3 my-0 my-md-5 pt-5 pt-md-5 footer___email" style={{fontWeight:'800'}}>
                    shridharkamat10@gmail.com 
                </div>
                <div className="d-flex flex-wrap w-100 justify-content-between mt-5 mt-md-5 pt-0 pt-md-5 footer___links" >
                    <h1>GitHub</h1>
                    <h1>Twitter</h1>
                    <h1>LinkedIn</h1>
                    <h1>CodePen</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
