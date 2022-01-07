import DeInstagram from '../public/DeInstagram.png'
import Gossip from '../public/Gossip.png'
import Discord from '../public/Discord.png'
import PromiseNFT from '../public/PromiseNFT.PNG'
import Blockcast from '../public/blockcast.png'
import Project from './Project'

function Projects() {
    return (
        <div className="container text-center py-5 mt-5" style={{position:'relative'}}>
            <div className="display-5 text-center pb-5" style={{fontWeight:'700',color:'white'}}>
                <span>Featured</span>
                <span> Projects</span>
            </div>
            <div className="row mb-5">
               <Project src={Blockcast.src} title={'Blockcast'} text={'A decentralized podcasting platform'} link="https://blockcast.vercel.app/"/>
               <Project src={PromiseNFT.src} title={'Promise NFT Marketplace'} text={'An nft marketplace that lets you sell your promises'} link="http://promise-nft-marketplace.vercel.app/"/>
               <Project src={DeInstagram.src} title={'Decentralised Instagram'} text={'Decentralized version of Instagram'} link="https://decentralized-instagram.vercel.app/"/>
               <Project src={Gossip.src} title={'Gossip'} text={'A simple chat app'}  link="https://gossip-5c9ef.web.app/"/>
               <Project src={Discord.src} title={'Discord'} text={'UI clone of Discord'} link="https://disord-clone.netlify.app/"/>         
            </div>
            <a href="https://shridhar-dev.notion.site/0673abc5fd5a4b759095079e0e7cd289?v=61eeb3fb0a0c4a10ac6a6eceafae6215">
                <small style={{color:'white',fontSize:'1.3rem',opacity:'0.7'}}><u>Check all the projects here </u></small>
            </a>
        </div>
    )
}

export default Projects
