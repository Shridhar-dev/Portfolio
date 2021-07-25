import Gossip from '../public/Gossip.png'
import Discord from '../public/Discord.png'
import Project from './Project'

function Projects(props) {
    return (
        <div className="container  py-5 mt-5" style={{position:'relative'}}>
            <h1 className="display-5 text-center mb-5 pb-2" style={{fontWeight:'700',color:'white'}}>Featured Projects</h1>
            <div className="row">
               
               <Project src={Gossip.src} title={'Gossip'} text={'A simple chat app'}/>
               <Project src={Discord.src} title={'Discord'} text={'UI clone of Discord'}/>

                        
            </div>
        </div>
    )
}

export default Projects
