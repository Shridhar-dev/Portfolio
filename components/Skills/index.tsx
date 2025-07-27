'use client'
import { useEffect, useRef } from 'react'
import { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint, Body } from 'matter-js'

const skills = [
  // Languages
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Python', color: '#3776AB' },
  { name: 'C', color: '#A8B9CC' },
  { name: 'C++', color: '#00599C' },
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' },

  // Frontend
  { name: 'React.js', color: '#61DAFB' },
  { name: 'Next.js', color: '#000000' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'GSAP', color: '#88CE02' },
  { name: 'Three.js', color: '#000000' },
  { name: 'Framer Motion', color: '#E430A5' },
  { name: 'ShadCN/UI', color: '#6366F1' },
  { name: 'Lucide React', color: '#6E6E6E' },

  // Mobile
  { name: 'React Native', color: '#61DAFB' },

  // Backend & APIs
  { name: 'Node.js', color: '#339933' },
  { name: 'Express.js', color: '#000000' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'JWT', color: '#000000' },
  { name: 'Socket.IO', color: '#010101' },

];

function Skills() {
  const canvas = useRef<HTMLDivElement>(null)
  const engine = useRef(Engine.create())
  const render = useRef<Render>(null)
  const runner = useRef<Runner>(null)
  const mouseConstraint = useRef<MouseConstraint>(null)

  // Track skill DOM elements and their bodies
  const skillElements = useRef<{ element: HTMLDivElement, body: Body }[]>([])

  useEffect(() => {
    initializeRenderer()
    addSkills()
    trackSkills()

    return () => {
      clearRenderer()
    }
  }, [])

  const initializeRenderer = () => {
    if (!canvas.current) return

    const height = canvas.current.offsetHeight
    const width = canvas.current.offsetWidth

    render.current = Render.create({
      element: canvas.current,
      engine: engine.current,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: 'transparent', // <--- make background transparent
        pixelRatio: window.devicePixelRatio,
      },
    })

    World.add(engine.current.world, [
      Bodies.rectangle(width / 2, 5, width, 20, { isStatic: true }),
      Bodies.rectangle(width / 2, height-10, width, 20, { isStatic: true }), //floor
      Bodies.rectangle(width, height / 2, 20, height, { isStatic: true }),
      Bodies.rectangle(5, height / 2, 20, height, { isStatic: true }),
    ])

    const mouse = Mouse.create(render.current.canvas)
    mouseConstraint.current = MouseConstraint.create(engine.current, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    })

    World.add(engine.current.world, mouseConstraint.current)
    render.current.mouse = mouse
    Engine.run(engine.current)
    runner.current = Runner.create()
    Runner.run(runner.current, engine.current)
  }

  const addSkills = () => {
    skills.forEach((skill, i) => {
      // Create DOM element
      const skillElement = document.createElement('div')
      skillElement.className =
  'absolute z-10 pointer-events-none h-[30rem] w-20 cursor-grab flex justify-center items-center font-silk bg-white text-black rounded-md'
skillElement.innerHTML = `<p class="text-xl -rotate-90 font-semibold">${skill.name}</p>`
      canvas.current?.appendChild(skillElement)

      // Create Matter.js body
      const body = Bodies.rectangle(
  60 + i * 82, // X position: staggered
  100, // Y position: start from above
  80, // width (narrow side)
  480, // height (tall side)
  {
    friction: 0.9,
    restitution: 0.2,
    density: 0.01,
    inertia: Infinity, // prevent rotation to keep it standing straight
    render: {
      visible:false
    }
  }
)
      World.add(engine.current.world, [body])
      skillElements.current.push({ element: skillElement, body })
    })
  }

  const trackSkills = () => {
    const update = () => {
      skillElements.current.forEach(({ element, body }) => {
        const { x, y } = body.position
        const angle = body.angle
        element.style.top = `${y-240}px` // offset to center
        element.style.left = `${x-40}px`
        element.style.transform = `rotate(${angle}rad)`
      })
      requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }

  const clearRenderer = () => {
    if (render.current) {
      Render.stop(render.current)
      render.current.canvas.remove()
      render.current.textures = {}
    }

    if (runner.current) {
      Runner.stop(runner.current)
    }

    if (engine.current) {
      World.clear(engine.current.world, false)
      Engine.clear(engine.current)
    }
  }

  return (
    <div className='h-screen p-5 relative overflow-hidden  bg-black text-white'>
      <div className='h-full w-full absolute top-0 left-0' ref={canvas}></div>
      <p className='text-[20rem] text-center text-primary font-silk font-bold z-20 pointer-events-none'>SKILLS</p>
    </div>
  )
}

export default Skills
