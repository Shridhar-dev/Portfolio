
function Footer() {
    return (
        <div  className="w-screen flex justify-center py-16" style={{background:'#1DA1F2',maxWidth:'100vw'}}>
             <div className="flex flex-col justify-center items-center py-0 md:py-6" style={{maxWidth:'1400px'}}>
                <div className="text-6xl  mb-0 mb-md-12">
                    <span className="footer___contact" style={{fontWeight:'700',color:'transparent'}}> Contact Us </span>
                   <strong className="hidden md:inline"> 👋  </strong>
                </div>
                <div className="text-6xl my-0 md:my-12 pt-12 md:pt-24 footer___email" style={{fontWeight:'800'}}>
                    shridharkamat10@gmail.com 
                </div>
                <div className="flex flex-wrap w-full justify-between mt-12 md:mt-24 pt-0 md:pt-5 footer___links" >
                    <a href="https://github.com/Shridhar-dev">
                        <h1 className="text-4xl">GitHub</h1>
                    </a>
                    <a href="https://twitter.com/shridhar_kdev">
                        <h1 className="text-4xl">Twitter</h1>
                    </a>
                    <a href="https://www.linkedin.com/in/shridhar-kamat-1015a41bb/">
                        <h1 className="text-4xl">LinkedIn</h1>
                    </a>
                    <a href="https://codepen.io/shridhar-dev">
                        <h1 className="text-4xl">CodePen</h1>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
