import React_img from '../public/SkillItems/react.png'
import Bootstrap from '../public/SkillItems/bootstrap.png'
import Firebase from '../public/SkillItems/firebase.png'
import JS from '../public/SkillItems/js.png'
import HTML from '../public/SkillItems/html.png'
import CSS from '../public/SkillItems/css.png'
import Wordpress from '../public/SkillItems/wordpress.png'

function Skills() {
    return (
        <div className="container text-center  py-5 mt-5" style={{position:'relative',margin:'0% 80%'}}>
            <h1 className="display-5 text-center mb-2 pb-2" style={{fontWeight:'700',color:'white'}}>Skills</h1>
            <div className="d-flex justify-content-center flex-wrap align-items-center">
                <img src={React_img.src}  width="80" className="img-fluid mx-3 my-3"/>
                <img src={Bootstrap.src}  width="80" className="img-fluid mx-3 my-3"/>
                <img src={Firebase.src}  width="60" className="img-fluid mx-3 my-3"/>
                <img src={JS.src}  width="70" className="img-fluid mx-3 my-3"/>
                <img src={HTML.src}  width="80" className="img-fluid mx-3 my-3"/>
                <img src={CSS.src}  width="80" className="img-fluid mx-3 my-3"/>
                <img src={Wordpress.src}  width="80" className="img-fluid mx-3 my-3"/>
            </div>    
        </div>
    )
}

export default Skills
