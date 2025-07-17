'use client'

import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense } from "react"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { is } from "@react-three/fiber/dist/declarations/src/core/utils";
import { Asterisk, GithubIcon, Globe2Icon } from "lucide-react";
import { TextureLoader } from "three";
import * as THREE from "three";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  return (
    <section className="w-full h-screen flex items-center justify-center flex-col relative hero-container overflow-hidden bg-black">
        <div className="relative z-[12] text-center">
          <p className="text-9xl font-bold name-text duration-500 mt-28 font-silk">Shridhar Kamat</p>
          <p className="text-4xl w-2/3 mt-10 mx-auto opacity-0 desc-text">Full-stack developer crafting performant, intuitive digital experiences. I build scalable web apps that merge design with functionality. Bringing creative solutions to life with code and curiosity.</p>
        </div>
        
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
  const sphere = useRef();
  const sphere2 = useRef();
  const sphereCover = useRef();
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
    const gradientCta = document.querySelector(".gradient-cta");
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
    gsap.to(sphere.current.position, {
      y: 10,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(sphereCover.current.position, {
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
    .to(sphere.current.position, {
      x: -50,
      duration: 10,
      ease: "power2.in",
    },0)
    .to(sphereCover.current.position, {
      x: -50,
      duration: 10,
      ease: "power2.in",
    },0)
    .to(sphere2.current.position, {
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
      color: "#000000",
      backgroundColor: "#ffffff",
      duration: 2,
    })
    .to(nameText, {
      marginTop:0,
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
    <mesh position={[0,0,0]} castShadow receiveShadow ref={sphere}>
      <sphereGeometry  args={[10]} />
      <meshPhongMaterial
        color="#ffffff"
        wireframe={true}
        wireframeLinewidth={100}
        wireframeLinejoin="miter"
      />
    </mesh>
    <mesh position={[0,0,0]} castShadow receiveShadow ref={sphereCover} scale={0.97}>
      <sphereGeometry  args={[10]} />
      <meshPhongMaterial
        color="#000000"
        wireframeLinewidth={100}
        wireframeLinejoin="miter"
      />
    </mesh>
    <mesh position={[0,10,0]} castShadow receiveShadow ref={sphere2} scale={0.95}>
      <sphereGeometry  args={[10]} />
      <meshPhongMaterial
        color="white"
        transparent={true}
        side={THREE.BackSide}
        map={new TextureLoader().load('/roles.png')}
      />
    </mesh>
    </>
  )
}



export default Hero