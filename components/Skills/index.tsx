'use client'
import { useEffect, useRef } from 'react'
import { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint, Body } from 'matter-js'

function Skills() {
    const canvas = useRef<HTMLDivElement>(null);
    const whiteBoxRef = useRef<HTMLDivElement>(null);
    const engine = useRef(Engine.create());
    const render = useRef<Render>();
    const runner = useRef<Runner>();
    const mouseConstraint = useRef<MouseConstraint>();
    const grainRef = useRef<Body | null>(null);

    useEffect(() => {
        initializeRenderer();
        addGrain();
        trackGrain();

        return () => {
            clearRenderer();
        };
    }, []);

    const initializeRenderer = () => {
        if (!canvas.current) return;

        const height = canvas.current.offsetHeight;
        const width = canvas.current.offsetWidth;

        render.current = Render.create({
            element: canvas.current,
            engine: engine.current,
            options: {
                width: width,
                height: height,
                wireframes: false,
                background: '#BBBBBB'
            }
        });

        World.add(engine.current.world, [
            Bodies.rectangle(width / 2, -10, width, 20, { isStatic: true }),
            Bodies.rectangle(width / 2, height + 10, width, 20, { isStatic: true }),
            Bodies.rectangle(width + 10, height / 2, 20, height, { isStatic: true }),
            Bodies.rectangle(-10, height / 2, 20, height, { isStatic: true }),
        ]);

        const mouse = Mouse.create(render.current.canvas);
        mouseConstraint.current = MouseConstraint.create(engine.current, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
        
        World.add(engine.current.world, mouseConstraint.current);
        render.current.mouse = mouse;
        Engine.run(engine.current);
        runner.current = Runner.create();
        Runner.run(runner.current, engine.current);
    };

    const addGrain = () => {
        const grain = Bodies.circle(100, 100, 20, {
            friction: 0.1,
            restitution: 0.8,
            density: 0.01,
            render: {
                fillStyle: '#888888',
                strokeStyle: '#333333',
                lineWidth: 3
            }
        });

        grainRef.current = grain;
        World.add(engine.current.world, [grain]);
    };

    const trackGrain = () => {
        const update = () => {
            if (grainRef.current && whiteBoxRef.current) {
                const { x, y } = grainRef.current.position;
                // Move white box to grain position
                whiteBoxRef.current.style.top = `${y-40}px`; // offset by half box size
                whiteBoxRef.current.style.left = `${x-40}px`; // offset by half box size
            }
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };

    const clearRenderer = () => {
        if (render.current) {
            Render.stop(render.current);
            render.current.canvas.remove();
            render.current.textures = {};
        }

        if (runner.current) {
            Runner.stop(runner.current);
        }

        if (engine.current) {
            World.clear(engine.current.world);
            Engine.clear(engine.current);
        }
    };

    return (
        <div className='h-screen flex items-center justify-center bg-primary relative overflow-hidden'>
            <div className='h-full w-full absolute top-0 left-0 flex items-center justify-center' ref={canvas}></div>
            <p className='text-9xl text-black font-silk font-bold z-10'>EXPERTISE</p>
            <div
                ref={whiteBoxRef}
                className='h-20 w-20 bg-white absolute z-10 rounded-full pointer-events-none'
            />
        </div>
    );
}

export default Skills;
