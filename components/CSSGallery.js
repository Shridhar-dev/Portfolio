import House from '../public/cssarts/house.PNG';
import Stoa from '../public/cssarts/stoa.PNG'
import OldMan from '../public/cssarts/oldman.png'
import Git from '../public/cssarts/git.png'
import Android from '../public/cssarts/android.png'
import Discord from '../public/cssarts/discord.png'
import AarogyaSetu from '../public/cssarts/AarogyaSetu.png'
import ReactLogo from '../public/cssarts/React.png'

import CSSArt from './CSSArt'
import React from 'react';

function CSSGallery() {
    return (
        <div className="container d-flex flex-column align-items-center  py-5 mt-5">
            <h1 className="art___gallery___heading display-5 text-center" style={{fontWeight:'800',color:'transparent'}} >CSS ART GALLERY</h1>
            <h4 className="text-center" style={{color:'white'}}>Collection of arts made by me in pure CSS</h4>
            
            <div className="text-center mt-5"  style={{background:'black',width:'80%'}}>
                <img src={House.src} className="img-fluid p-5" width="800" />
            </div>

            <div className="d-flex mx-5 mx-md-0 mt-5 pt-2 justify-content-center align-items-center css-scroll" data-scroll data-scroll-speed="5" data-scroll-repeat data-scroll-direction="horizontal">               
                <CSSArt src={Stoa.src}  width={150}/>
                <CSSArt src={OldMan.src} />
                <CSSArt src={Git.src}   width={200}/>
                <CSSArt src={Discord.src}  width={500} />
                <CSSArt src={Android.src}  width={200}/>
                <React.Fragment className="d-block d-md-none">
                    <CSSArt src={AarogyaSetu.src} width={300}/>
                    <CSSArt src={ReactLogo.src}  width={300}/>
                    <CSSArt src={Discord.src}  width={500} />
                    <CSSArt src={Android.src}  width={200}/>
                    <CSSArt src={AarogyaSetu.src} width={300}/>
                    <CSSArt src={ReactLogo.src}  width={300}/>
                </React.Fragment>
            </div>
            <small className="d-block d-md-none pb-5 mb-2 text-left w-100" style={{color:'white',fontSize:'1rem',opacity:'0.7'}}>Scroll ➡️</small>
            <div className="d-none d-md-flex mx-5 mx-md-0 my-5 py-2 justify-content-center align-items-center css-scroll" data-scroll data-scroll-speed="-5" data-scroll-repeat data-scroll-direction="horizontal">
                <CSSArt src={AarogyaSetu.src} width={300}/>
                <CSSArt src={ReactLogo.src}  width={300}/>
                <CSSArt src={Discord.src}  width={500} />
                <CSSArt src={Android.src}  width={200}/>
                <CSSArt src={AarogyaSetu.src} width={300}/>
                <CSSArt src={ReactLogo.src}  width={300}/>
            </div>
            <small style={{color:'white',fontSize:'1.3rem',opacity:'0.7'}}><u>Check all of them on codepen</u></small>
        </div>
    )
}

export default CSSGallery
