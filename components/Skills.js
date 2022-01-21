import ReactTooltip from 'react-tooltip';
import Next_img from '../public/SkillItems/nextjs.png'
import React_img from '../public/SkillItems/react.png'
import Tailwind from '../public/SkillItems/tailwind.png'
import Bootstrap from '../public/SkillItems/bootstrap.png'
import Firebase from '../public/SkillItems/firebase.png'
import JS from '../public/SkillItems/js.png'
import HTML from '../public/SkillItems/html.png'
import CSS from '../public/SkillItems/css.png'
import Wordpress from '../public/SkillItems/wordpress.png'
import { useEffect, useState } from 'react';

function Skills() {

    const [windowState, setWindowState] = useState(false);

    useEffect(() => {
        setWindowState(true)
    }, []);
    
    return (
        
        <div className="container text-center  py-12 mt-12" style={{position:'relative',margin:'0% 80%'}}>
            {
                windowState ?  <ReactTooltip /> : <></>
            }
            
            <h1 className="text-5xl text-center mb-2 pb-2" style={{fontWeight:'700',color:'white'}}>Skills</h1>
            <div className="flex justify-center flex-wrap items-center">
                <img data-tip="NextJS" src={Next_img.src}  width="80" className="img-fluid mx-4 my-4 zoom-skills" alt="Img of nextjs"/>
                <img data-tip="ReactJS" src={React_img.src}  width="80" className="img-fluid mx-4 my-4 zoom-skills" alt="Img of reactjs"/>
                <img data-tip="TailwindCSS" src={Tailwind.src}  width="80" className="img-fluid mx-4 my-4 zoom-skills" alt="Img of tailwindcss"/>
                <img data-tip="Bootstrap" src={Bootstrap.src}  width="80" className="img-fluid mx-4 my-4 zoom-skills" alt="Img of bootstrap"/>
                <img data-tip="Firebase" src={Firebase.src}  width="60" className="img-fluid mx-4 my-4 zoom-skills" alt="Img of firebase"/>
                <img data-tip="JavaScript" src={JS.src}  width="70" className="img-fluid mx-4 my-4 zoom-skills" alt="Img of Javascript"/>
                <img data-tip="HTML" src={HTML.src}  width="80" className="img-fluid mx-4 my-4 zoom-skills" alt="Img of html"/>
                <img data-tip="CSS" src={CSS.src}  width="80" className="img-fluid mx-4 my-4 zoom-skills" alt="Img of css"/>
                <img data-tip="Wordpress" src={Wordpress.src}  width="80" className="img-fluid mx-4 my-4 zoom-skills" alt="Img of wordpress"/>
            </div>    
    
        </div>
    )
}

export default Skills
