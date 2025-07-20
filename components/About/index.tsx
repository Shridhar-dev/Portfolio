import React from 'react'

function About() {
  return (
    <section className='h-screen p-5 sm:p-10 bg-black'>
        <div className='border text-white border-white rounded-4xl h-full w-full p-10'>
            <p className='font-silk text-3xl sm:text-7xl md:text-8xl'>About Me</p>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <p className='text-xl sm:text-3xl md:text-4xl leading-10 md:leading-16 mt-10'>Hello! I am Shridhar, a Full Stack Developer, highly skilled Frontend Developer proficient in Next.js and React.js and a Freelance Developer. Am passionate about leveraging technology to create seamless and scalable web experiences.</p>
                </div>
                <div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About