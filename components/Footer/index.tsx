import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-primary h-screen p-20 font-sans relative'>
      <p className='text-9xl text-black font-black '>Let’s build what the future’s waiting for.</p>
      <div className='text-5xl mt-10 flex items-center gap-5 text-black'>
        <p>Contact Me</p>
        <div className='h-20 w-20 flex items-center justify-center rounded-full cursor-pointer bg-white'>
          <ArrowUpRight className=' duration-500 h-10 w-10 hover:translate-x-1.5 hover:-translate-y-1.5'/>
        </div>
      </div>
      <div className='grid grid-cols-3 mt-20'>
        <div>
          <p className='text-2xl font-bold text-black'>Say Hello</p>
          <ul className='text-xl text-black'>
            <li className='mt-2'><Link href="">Shridhar Kamat</Link></li>
            <li className='mt-2'><Link href="">Goa, India</Link></li>
            <li className='mt-2'><Link href="">shridharkamat10@gmail.com</Link></li>
            <li className='mt-2'><Link href="">hello@kairostudio.org</Link></li>
          </ul>
        </div>
        <div>
          <p className='text-2xl font-bold text-black'>Sitemap</p>
          <ul className='text-xl text-black'>
            <li className='mt-2'><Link href="">Home</Link></li>
            <li className='mt-2'><Link href="">About</Link></li>
            <li className='mt-2'><Link href="">Testimonials</Link></li>
            <li className='mt-2'><Link href="">Skills</Link></li>
            <li className='mt-2'><Link href="">Experience</Link></li>
            <li className='mt-2'><Link href="">Projects</Link></li>
          </ul>
        </div>
        <div>
          <p className='text-2xl font-bold text-black'>Links</p>
          <ul className='text-xl text-black'>
            <li className='mt-2'><Link href="">LinkedIn</Link></li>
            <li className='mt-2'><Link href="">GitHub</Link></li>
            <li className='mt-2'><Link href="">Resume</Link></li>
            <li className='mt-2'><Link href="">Email</Link></li>
          </ul>
        </div>
      </div>
      <p className='text-black absolute bottom-10'>© Shridhar Kamat 2025</p>
    </footer>
  )
}

export default Footer