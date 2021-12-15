import Head from 'next/head'
import About from '../components/About'
import CSSGallery from '../components/CSSGallery'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from "react";
import Skills from '../components/Skills'
import Achievements from '../components/Achievements'
import Misc from '../components/Misc'

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
        }
      }
      watch={
        [
          containerRef
        ]
      }
      containerRef={containerRef}
    >
    <div data-scroll-container ref={containerRef}>
      <Head>
        <title>Shridhar Kamat - Portfolio Site</title>
        <meta name="title" content="Shridhar Kamat - Portfolio Site"/>
        <meta name="description" content="A front-end web developer and freelancer based in Goa"/>


        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://shridharkamat.dev/"/>
        <meta property="og:title" content="Shridhar Kamat - Portfolio Site"/>
        <meta property="og:description" content="A front-end web developer and freelancer based in Goa"/>
        <meta property="og:image" content="thumbnail.png"/>


        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Shridhar Kamat - Portfolio Site"/>
        <meta name="twitter:description" content="A front-end web developer and freelancer based in Goa"/>
        <meta name="twitter:site" content="@shridhar_kdev"/>
        <meta name="twitter:image" content="https://i.ibb.co/0FdNgg9/Frame-3-1.png"/>
        <meta name="twitter:creator" content="@shridhar_kdev"/>
        <meta property="twitter:url" content="https://shridharkamat.dev/"/>

        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div data-scroll-section>
        <Header />

        <div className="container-fluid d-flex justify-content-center align-items-center flex-column" style={{maxWidth:'1400px',overflow:'hidden'}} >
            <About />
            <Skills />
            <CSSGallery />
            <Achievements />
            <Projects />
            <Misc />
            <Testimonials />
        </div>
        
        <Footer />
        </div>
    </div>
    </LocomotiveScrollProvider>
    
  )
}
