import House from '../public/cssarts/house.PNG';
import Stoa from '../public/cssarts/stoa.PNG'
import OldMan from '../public/cssarts/oldman.png'
import Git from '../public/cssarts/git.png'
import Android from '../public/cssarts/android.png'
import Discord from '../public/cssarts/discord.png'
import AarogyaSetu from '../public/cssarts/AarogyaSetu.png'
import ReactLogo from '../public/cssarts/React.png'

import CSSArt from './CSSArt'

function CSSGallery() {
    return (
        <div className="container d-flex flex-column align-items-center  py-5 mt-5">
            <h1 className="art___gallery___heading display-5 text-center" style={{fontWeight:'800',color:'transparent'}}>CSS ART GALLERY</h1>
            <h4 className="text-center" style={{color:'white'}}>Collection of arts made by me in pure CSS</h4>
            
            <div className="text-center mt-5"  style={{background:'black',width:'80%'}}>
                <img src={House.src} className="img-fluid p-5" width="800" />
            </div>

            <div className="row d-flex mx-5 mx-md-0 my-5 py-2 justify-content-center align-items-center">
                
                <CSSArt src={Stoa.src} margins={"mx-4"} width={150}/>
                <CSSArt src={OldMan.src} margins={"mx-5 mx-md-0 "}/>
                <CSSArt src={Git.src} margins={"mx-5 mx-md-4"}  width={200}/>

                <CSSArt src={Discord.src} margins={"mt-md-4 mx-4 "} width={500} />
                <CSSArt src={Android.src} margins={"mx-5 mx-md-0 mr-5 mt-md-4"} width={200}/>
                <CSSArt src={AarogyaSetu.src} margins={"mx-5 mx-md-4 mt-md-4"} width={300}/>
                
                <CSSArt src={ReactLogo.src} margins={"mx-5 mx-md-0 ml-5 mt-md-4"} width={300}/>
            </div>
        </div>
    )
}

export default CSSGallery
