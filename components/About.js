import MyImg from '../public/Ellipse 4.png'
function About() {
    return (
        <div className="mx-10 md:mx-10 flex justify-center items-center flex-col  py-12 mt-4" >
            <img src={MyImg.src} width="30%" style={{maxWidth:'180px'}} className="img-fluid py-12 mt-12" alt="Img of Shridhar Kamat"/>
            <div className="mx-0 px-6 lg:mx-12 lg:px-12" style={{color:'white',fontWeight:'400'}}>
                <h4 className="text-2xl mx-0 px-0 lg:mx-24 md:px-24 " style={{lineHeight:'2.5rem'}}>I am a front end freelancer, having deep interest into
                  web development and technology. I soon aim to 
                  transition into full stack development and learn more 
                  about it. I love working on web apps and developing
                  solutions. Till date I have delivered sites made with 
                  React and Wordpress. Currently looking into backend and learning more about the 
                  ecosystem 
              </h4>
              </div>
        </div>
    )
}

export default About
