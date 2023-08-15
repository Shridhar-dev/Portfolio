import House from '../public/cssarts/house.PNG';
import Stoa from '../public/cssarts/stoa.PNG'
import OldMan from '../public/cssarts/oldman.png'
import Git from '../public/cssarts/git.png'
import Android from '../public/cssarts/android.png'
import Discord from '../public/cssarts/discord.png'
import AarogyaSetu from '../public/cssarts/AarogyaSetu.png'
import ReactLogo from '../public/cssarts/React.png'
import Crt from '../public/cssarts/crt.PNG'
import Orbit from '../public/cssarts/orbit.PNG'
import Drop from '../public/cssarts/drop.PNG'
import CSSArt from './CSSArt'
import CSSArtSingle from './CSSArtSingle'
import React from 'react';

function CSSGallery() {
    return (
        <div className="container flex flex-col items-center py-12 mt-12">
            <h1 className="art___gallery___heading text-5xl text-center" style={{fontWeight:'800',color:'transparent'}} >CSS ART GALLERY</h1>
            <h4 className="text-center text-2xl mt-2" style={{color:'white'}}>Collection of arts made by me in pure CSS</h4>
            
            <div className="text-center mt-12"  style={{background:'black',width:'80%'}}>
                <img src={House.src} className="img-fluid p-12 mx-auto" width="800" alt="Img of House made in Pure CSS"/>
            </div>

            {/*First animated row*/}
            <div className="hidden lg:flex mx-12 mx-md-0 mt-12 pt-2 justify-center items-center css-scroll" data-scroll data-scroll-speed="5" data-scroll-repeat data-scroll-direction="horizontal">               
                <CSSArt src={Crt.src}  width={200} alt="Img of an old CRT monitor made in Pure CSS"/>
                <CSSArt src={Stoa.src}  width={150} alt="Img of Stoa Logo made in Pure CSS"/>
                <CSSArt src={OldMan.src} alt="Img of Old Man Illustrations made in Pure CSS"/>
                <CSSArt src={Git.src} width={200} alt="Img of Git Logo made in Pure CSS"/>
                <CSSArt src={Discord.src}  width={500} alt="Img of Discord Logo made in Pure CSS"/>
            </div>

            {/*Hidden animated row*/}
            <div className="flex lg:hidden css-scroll overflow-auto flex-1 px-10">
                <CSSArtSingle src={Crt.src}  width={200} alt="Img of an old CRT monitor made in Pure CSS"/>
                <CSSArtSingle src={Stoa.src}  width={150} alt="Img of Stoa Logo made in Pure CSS"/>
                <CSSArtSingle src={OldMan.src} alt="Img of Old Man Illustrations made in Pure CSS"/>
                <CSSArtSingle src={Git.src} width={200} alt="Img of Git Logo made in Pure CSS"/>
                <CSSArtSingle src={Discord.src}  width={500} alt="Img of Discord Logo made in Pure CSS"/>
                <CSSArtSingle src={Orbit.src}  width={500} alt="Img of Orbit made in Pure CSS"/>
                <CSSArtSingle src={Android.src}  width={200} alt="Img of Android made in Pure CSS"/>
                <CSSArtSingle src={AarogyaSetu.src} width={300} alt="Img of Aarogya Setu Logo made in Pure CSS"/>
                <CSSArtSingle src={ReactLogo.src}  width={300} alt="Img of React Logo made in Pure CSS"/>
                <CSSArtSingle src={Drop.src}  width={300} alt="Img of drop made in Pure CSS"/>
            </div>

            <small className="block lg:hidden pb-12 mb-2 text-left w-full px-10" style={{color:'white',fontSize:'1rem',opacity:'0.7'}}>Scroll ➡️</small>
            
            {/*Second animated row*/}
            <div className="hidden lg:flex mx-12 md:mx-0 my-12 py-2 justify-center items-center css-scroll" data-scroll data-scroll-speed="-5" data-scroll-repeat data-scroll-direction="horizontal">
                <CSSArt src={Orbit.src}  width={500} alt="Img of Orbit made in Pure CSS"/>
                <CSSArt src={Android.src}  width={200} alt="Img of Android made in Pure CSS"/>
                <CSSArt src={AarogyaSetu.src} width={300} alt="Img of Aarogya Setu Logo made in Pure CSS"/>
                <CSSArt src={ReactLogo.src}  width={300} alt="Img of React Logo made in Pure CSS"/>
                <CSSArt src={Drop.src}  width={300} alt="Img of drop made in Pure CSS"/>
            
            </div>
            <a target="_blank" href="/css">
                <small style={{color:'white',fontSize:'1.3rem',opacity:'0.7'}}><u>Check all of them on codepen</u></small>
            </a>
        </div>
    )
}

export default CSSGallery
