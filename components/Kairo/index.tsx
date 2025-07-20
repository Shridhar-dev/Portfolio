'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

function Kairo() {
  const container = useRef<HTMLDivElement>(null)
  const gradientBlobRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const containerEl = container.current
    const blobEl = gradientBlobRef.current
    /*const experienceText = document.querySelector('.experience-text')
    if (experienceText) {
      gsap.fromTo(experienceText, { opacity: 0, y:100 }, { opacity: 1, y:0, duration: 2 })
    }*/
    if (!containerEl || !blobEl) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerEl.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      gsap.to(blobEl, {
        duration: 0.5,
        x: x - blobEl.clientWidth ,
        y: y - blobEl.clientHeight ,
        rotate:Math.atan2(y - rect.height / 2, x - rect.width / 2) * (180 / Math.PI),
        ease: "power4.out",
      })
    }

    containerEl.addEventListener("mousemove", handleMouseMove)

    return () => {
      containerEl.removeEventListener("mousemove", handleMouseMove)
    }
  }, { scope: container })

  return (
    <section
      ref={container}
      className='h-screen p-10 relative bg-black flex items-center justify-center overflow-x-clip'
    >
      <p className='text-3xl md:text-8xl text-center font-silk leading-10 sm:leading-20 md:leading-32 relative z-20 experience-text'>
        Creating experiences <br /> that Convert
      </p>
      <div
        ref={gradientBlobRef}
        className="gradient-blob pointer-events-none absolute duration-500 opacity-80 w-[491px] h-[461px] left-[273px] top-[278px] [background:conic-gradient(from_180deg_at_50%_50%,_#000000_-190.38deg,_#1DA1F2_55.2deg,_#000000_169.62deg,_#1DA1F2_415.2deg)] blur-[400px]"
      />
    </section>
  )
}

export default Kairo
