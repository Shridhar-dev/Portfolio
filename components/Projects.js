import Gossip from '../public/Gossip.png'
import Discord from '../public/Discord.png'
import Project from './Project'

function Projects(props) {
    return (
        <div className="container text-center py-5 mt-5" style={{position:'relative'}}>
            <div className="display-5 text-center pb-5" style={{fontWeight:'700',color:'white'}}>
                <span>Featured</span>
                <span> Projects</span>
            </div>
            <div className="row mb-5">
               
               <Project src={Gossip.src} title={'Gossip'} text={'A simple chat app'}/>
               <Project src={Discord.src} title={'Discord'} text={'UI clone of Discord'}/>

                        
            </div>
            <small style={{color:'white',fontSize:'1.3rem',opacity:'0.7'}}><u>Check all the projects here </u></small>
        </div>
    )
}

export default Projects
