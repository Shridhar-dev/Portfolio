import MyImg from '../public/Ellipse 4.png'
function About() {
    return (
        <div className="container d-flex justify-content-center align-items-center flex-column  py-5 mt-3" >
            <img src={MyImg.src} width="30%" style={{maxWidth:'180px'}} className="img-fluid py-5 mt-5" alt="Img of Shridhar Kamat"/>
            <div className="mx-0 px-4 mx-md-5 px-md-5" style={{color:'white',fontWeight:'400'}}>
                <h4 className="mx-0 px-0 mx-md-5 px-md-5" style={{lineHeight:'2.5rem'}}>I am a front end freelancer, having deep interest into
                  web development and technology. I soon aim to 
                  transition into full stack development and learn more 
                  about it. I love working on web apps and developing
                  solutions. Till date I have delivered sites made with 
                  React and Wordpress. Currently venturing into the
                  blockchain space and learning more about the 
                  ecosystem 
              </h4>
              </div>
        </div>
    )
}

export default About
