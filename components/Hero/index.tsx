'use client'

import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense } from "react"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TextureLoader } from "three";
import * as THREE from "three";
import Link from "next/link";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const containerEl = container.current
    const videoEl = videoRef.current
   
    if (!containerEl || !videoEl) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerEl.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      gsap.to(videoEl, {
        duration: 0.5,
        x: (x - videoEl.clientWidth) /10,
        y: (y - videoEl.clientHeight) /10,
        transformOrigin: "translate(-50%, -50%)",
        ease: "power4.out",
      })
    }

    containerEl.addEventListener("mousemove", handleMouseMove)

    return () => {
      containerEl.removeEventListener("mousemove", handleMouseMove)
    }
  }, { scope: container })
  return (
    <section ref={container} className="w-full h-screen flex items-center justify-center flex-col  hero-container overflow-hidden bg-black">
        <div className="relative z-[12] px-10 md:px-20  mix-blend-difference">
          <p className="text-4xl sm:text-7xl md:text-8xl text-left font-bol name-text duration-500 mt-28 font-silk">Turning <span className="text-primary font-bold">ideas</span> into purposeful, <span className="text-primary font-bold">human-centered</span> experiences.</p>
          <p className="text-xl sm:text-2xl md:text-4xl w-full sm:w-2/3 mt-10 opacity-0 desc-text text-left leading-12">Building visually refined and accessible experiences that align <br/> with brand vision and deliver measurable business value.</p>
          <div className="flex items-center gap-5 mt-10">
            <Link href={"https://www.linkedin.com/in/shridhar-kamat-1015a41bb/"} className="text-md md:text-xl">LINKEDIN</Link>
            <Link href={"https://github.com/Shridhar-dev"} className="text-md md:text-xl">GITHUB</Link>
            <Link href={"https://www.linkedin.com/in/shridhar-kamat-1015a41bb/"} className="text-md md:text-xl">RESUME</Link>
            <Link href={"https://www.linkedin.com/in/shridhar-kamat-1015a41bb/"} className="text-md md:text-xl">EMAIL</Link>
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-20 right-20 h-[20rem] w-[50rem] object-contain z-0 hidden md:block hero-video opacity-0"
          //@ts-ignore
          ref={videoRef}
        >
          <source src="/collage.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 w-full h-full aspect-borders border-t-[100px] border-b-[100px] border-black z-[10]"></div>
        <Canvas style={{height:"100vh", position:"absolute"}} className="hero" camera={{ position: [-30, 10, 0], rotation:[0,-Math.PI/2,0], fov: 50 }}>
            <Suspense fallback={null}>
                <SphereModel />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} />
            </Suspense>
        </Canvas>
    </section>
  )
}

function SphereModel() {
  const sphere = useRef<THREE.Mesh>(null);
  const sphere2 = useRef<THREE.Mesh>(null);
  const sphereCover = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (sphere.current && sphere2.current) {
      sphere.current.rotation.y += 0.005;
      sphere2.current.rotation.y += 0.005;
    }
  });

  useGSAP(() => {
    const containerOuter = document.querySelector(".hero-container");
    const aspectBorders = document.querySelector(".aspect-borders");
    const nameText = document.querySelector(".name-text");
    const descText = document.querySelector(".desc-text");
    const video = document.querySelector(".hero-video");
    let isBorderVisible = true;
    const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector(".hero"),
                start: "top top",
                end: "bottom top",
                scrub: 5,
                pin: document.querySelector(".hero-container"),
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                  if (self.progress >= 0.95) {
                    gsap.to(aspectBorders, {
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      duration: 0.5,
                      ease: "power1.out",
                    });
                    isBorderVisible = false;
                  }
                  else {
                    if(isBorderVisible) return; 
                    gsap.to(aspectBorders, {
                      borderTopWidth: "100px",
                      borderBottomWidth: "100px",
                      duration: 0.5,
                      ease: "power1.out",
                    });
                    isBorderVisible = true;
                  }
                }
            }
      });
    gsap.to(sphere.current?.position!, {
      y: 10,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(sphere2.current?.position!, {
      y: 10,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(sphereCover.current?.position!, {
      y:10,
      duration: 1,
      ease: "power2.out",
    })


    tl
    .to(nameText, {
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    },0)
    .to(sphere.current?.position!, {
      x: -50,
      duration: 10,
      ease: "power2.in",
    },0)
    .to(sphereCover.current?.position!, {
      x: -50,
      duration: 10,
      ease: "power2.in",
    },0)
    .to(sphere2.current?.position!, {
      x: -50,
      duration: 10,
      ease: "power2.in",
    },0)
    .to(nameText, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
    .to(containerOuter,{
      color: "#ffffff",
      backgroundColor: "#000000",
      duration: 2,
    })
    .to(nameText, {
      marginTop:0,
      duration: 1,
      ease: "power2.out",
    }, "-=1")
    .to(video, {
      opacity:1,
      duration: 1,
      ease: "power2.out",
    }, "-=1")
    .to(descText, {
      display: "block",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }, "-=1")

  }, { scope: sphere });   

  return (
    <>
    <mesh position={[0,0,0]} ref={sphere}>
      <sphereGeometry  args={[10]} />
      <meshPhongMaterial
        color="#ffffff"
        wireframe={true}
        wireframeLinewidth={100}
        wireframeLinejoin="miter"
      />
    </mesh>
    <mesh position={[0,0,0]} ref={sphereCover} scale={0.97}>
      <sphereGeometry  args={[10]} />
      <meshPhongMaterial
        color="#000000"
        wireframeLinewidth={100}
        wireframeLinejoin="miter"
      />
    </mesh>
    <mesh position={[0,0,0]} ref={sphere2} scale={0.95}>
      <sphereGeometry  args={[10]} />
      <meshPhongMaterial
        color="white"
        transparent={true}
        side={THREE.BackSide}
        map={new TextureLoader().load('/roles.png')}
        map-repeat={new THREE.Vector2(2, 2)}
        map-wrapS={THREE.RepeatWrapping}
        map-wrapT={THREE.RepeatWrapping}
        map-anisotropy={16}
        map-magFilter={THREE.NearestFilter}
        map-minFilter={THREE.NearestFilter}
      />
    </mesh>
    </>
  )
}



export default Hero