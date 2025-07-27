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
    gsap.to(art.current.position,{
      y:art.current.position.z-10,
      duration:10
    })
  }, {scope:art});

  return (
    <mesh
      position={[0, 10, index*15]}
      rotation={[0, Math.PI / 2, 0]}
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