'use client'

import {  useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import * as THREE from "three";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const artPaths = [
    '/arts/gradient.jpg',
    '/arts/gradient1.jpg',
    '/arts/gradient2.jpg',
    '/arts/gradient3.jpg',
    '/arts/gradient4.jpg',
    '/arts/gradient5.jpg',
]

function CSSArtGallery() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!canvasRef.current || !containerRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom-=300 top", // increase end if needed
        scrub: 5,
        markers: true,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-screen relative art-container overflow-hidden bg-black"
    >
      <div className="left-1/2 -translate-1/2 w-full mt-20 z-[12] text-center bg-transparent absolute">
        <p className="text-9xl font-bold name-text duration-500 bg-transparent mt-10 font-silk">
          CSS Art Gallery
        </p>
      </div>

      <Canvas
        style={{ height: "100vh" }}
        className="art-canvas"
        camera={{
          position: [-30, 10, 0],
          rotation: [0, -Math.PI / 2, 0],
          fov: 50,
        }}
        ref={canvasRef as any}
      >
        <Suspense fallback={null}>
          {artPaths.map((art, index) => (
            <ArtModel key={index} map={art} odd={index % 2} index={index} />
          ))}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} />
        </Suspense>
      </Canvas>
    </section>
  );
}

function ArtModel({ map, odd, index }: { map?: string; odd: number; index: number }) {
  const [colorMap] = useTexture([map!]);
  const art = useRef<THREE.Mesh>(null);

  useGSAP(() => {
    if (!art.current) return;
    const container = document.querySelector(".art-container")
    
    gsap.to(art.current.position, {
      x: -50,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom+=100 top",
        scrub: 5,
      },
    });

    gsap.to(art.current.rotation, {
      y: odd ? Math.PI / 2 : -Math.PI / 2,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom+=100 top",
        scrub: 5,
      },
    });
  }, {scope:art});

  return (
    <mesh
      position={[index * 20, 10, odd ? 10 : -10]}
      rotation={[0, odd ? Math.PI / 4 : -Math.PI / 4, 0]}
      ref={art}
    >
      <planeGeometry args={[10, 15]} />
      <meshPhongMaterial
        side={THREE.DoubleSide}
        map={colorMap}
        wireframeLinewidth={100}
        wireframeLinejoin="miter"
      />
    </mesh>
  );
}



export default CSSArtGallery