'use client';
import Image from "next/image"

import Canon from "@/public/projects/canon.webp";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

type TestimonialCardProps = {
    text: string;
    author: string;
    order?: number; // Optional order prop for positioning
    imageSrc: string;
    imageAlt?: string;
};

const testimonials: TestimonialCardProps[] = [
    {
        text: `Canon Redesign - Reimagine Sheryians`,
        author: "Devraj Chatribin",
        imageSrc: Canon.src,
    },
    {
        text: `"Shridhar is among the youngest developers I have ever worked with and I never realised how young he was while talking to him about the daily work, issues and solutions. Always on the top of his game with amazing skills in literally everything he did. Such a delight to have worked with him 
I would definitely love to work with him again and would commend his impeccable competency."`,
        author: "Atharva Deshpande",
        imageSrc: Canon.src,
    },
    {
        text: `"A very talented, hardworking and most importantly punctual professional to work with. You will never get your job done beyond the timeline. Shridhar is Very responsive and innovative."`,
        author: "Hrishikesh Pai",
        imageSrc: Canon.src,
    },
]

function ProjectCard({ text, author, imageSrc, imageAlt = "Testimonial", order }: TestimonialCardProps) {
    return (
        <div className="absolute" style={{top:`calc(${order! * (Canon.height-200)}px)`, right:order! % 2 === 0 ? "20px" : "auto", left: order! % 2 !== 0 ? "20px" : "auto"}}>
            <div className="flex flex-col  gap-5 mt-5 ">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={Canon.width-1000}
                    height={Canon.height-1000}
                    className="mt-5"
                />
            </div>
        </div>
    );
}


function Projects() {
    const container = useRef<HTMLDivElement>(null);
    const containerPinned = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const containerEl = container.current;
        const containerPinnedEl = containerPinned.current;
        if (!containerEl) return;

        if (!containerPinnedEl) return;
        

        gsap.to(containerPinnedEl, {
            y: -(testimonials.length-1)*Canon.height,
            ease: "none",
            scrollTrigger: {
            trigger: containerEl,
            start: "top top",
            end: `bottom+=${(testimonials.length-1)*Canon.height} top`,
            scrub: 1,
            pin: true,
            pinnedContainer: containerEl,
            anticipatePin: 1,
            },
        })
    }, { scope: containerPinned });

    return (
        <section className="min-h-screen flex items-center justify-center bg-black new-container p-10 overflow-x-hidden" ref={container}>
            <p className="text-4xl sm:text-7xl md:text-9xl font-silk font-normal">PRojects</p>
            <div className="mt-20 flex flex-col gap-10 absolute h-full w-full" ref={containerPinned}>
                {
                    testimonials.map((testimonial, index) => (
                        <ProjectCard
                            key={index}
                            order={index}
                            text={testimonial.text}
                            author={testimonial.author}
                            imageSrc={testimonial.imageSrc}
                            imageAlt={`Testimonial by ${testimonial.author}`}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default Projects;