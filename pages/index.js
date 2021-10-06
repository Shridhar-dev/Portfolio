import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import CSSGallery from '../components/CSSGallery'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import { Client, APIErrorCode } from "@notionhq/client"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from "react";
import Skills from '../components/Skills'

export default function Home() {
  
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          smartphone:{
            smooth:false,
          },
          tablet:{
            smooth:false
          },
          
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          containerRef
          //...all the dependencies you want to watch to update the scroll
        ]
      }
      containerRef={containerRef}
    >
    <div data-scroll-container ref={containerRef}>
      <Head>
        <title>Shridhar Kamat</title>
        <meta name="title" content="Shridhar Kamat - Personal Site"/>
        <meta name="description" content="A front-end developer and freelancer based in Goa"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-scroll-section>
        <Header />

        <div className="container-fluid d-flex justify-content-center align-items-center flex-column" style={{maxWidth:'1400px',overflow:'hidden'}} >
            <About />
            <Skills />
            <CSSGallery />
            <Projects />
            <Testimonials />
        </div>
        
        <Footer />
        </div>
    </div>
    </LocomotiveScrollProvider>
    
  )
}
