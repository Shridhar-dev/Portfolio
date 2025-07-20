'use client';
import Image from "next/image"
import Devraj from "@/public/testimonials/devraj.webp";
import Atharva from "@/public/testimonials/atharva.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

type TestimonialCardProps = {
    text: string;
    author: string;
    imageSrc: string;
    imageAlt?: string;
};

const testimonials: TestimonialCardProps[] = [
    {
        text: `"I have worked with Shridhar for a very long time. We have collaborated on various web development projects and I am quite impressed with his development skills, and I am sure that he will be of great value to any company that he is a part of."`,
        author: "Devraj Chatribin",
        imageSrc: Devraj.src,
    },
    {
        text: `"Shridhar is among the youngest developers I have ever worked with and I never realised how young he was while talking to him about the daily work, issues and solutions. Always on the top of his game with amazing skills in literally everything he did. Such a delight to have worked with him 
I would definitely love to work with him again and would commend his impeccable competency."`,
        author: "Atharva Deshpande",
        imageSrc: Atharva.src,
    },
    {
        text: `"I have worked with Shridhar for a very long time. We have collaborated on various web development projects and I am quite impressed with his development skills, and I am sure that he will be of great value to any company that he is a part of."`,
        author: "Devraj Chatribin",
        imageSrc: Devraj.src,
    },
    {
        text: `"Shridhar is among the youngest developers I have ever worked with and I never realised how young he was while talking to him about the daily work, issues and solutions. Always on the top of his game with amazing skills in literally everything he did. Such a delight to have worked with him 
I would definitely love to work with him again and would commend his impeccable competency."`,
        author: "Atharva Deshpande",
        imageSrc: Atharva.src,
    },
    {
        text: `"I have worked with Shridhar for a very long time. We have collaborated on various web development projects and I am quite impressed with his development skills, and I am sure that he will be of great value to any company that he is a part of."`,
        author: "Devraj Chatribin",
        imageSrc: Devraj.src,
    },
    {
        text: `"Shridhar is among the youngest developers I have ever worked with and I never realised how young he was while talking to him about the daily work, issues and solutions. Always on the top of his game with amazing skills in literally everything he did. Such a delight to have worked with him 
I would definitely love to work with him again and would commend his impeccable competency."`,
        author: "Atharva Deshpande",
        imageSrc: Atharva.src,
    },
]

function TestimonialCard({ text, author, imageSrc, imageAlt = "Testimonial" }: TestimonialCardProps) {
    return (
        <div className="testimonial-card hover:brightness-120 min-w-[500px] md:min-w-[800px] flex flex-col bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.1)] p-10 rounded-2xl shadow-lg w-full">
            <p className="text-xl md:text-2xl leading-10">{text}</p>
            <div className="flex items-center  gap-5 mt-5 ">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={50}
                    height={50}
                    className="rounded-full mt-5"
                />
                <p className="mt-5 text-xl font-semibold">- {author}</p>
            </div>
        </div>
    );
}


function Testimonials() {
    const container = useRef<HTMLDivElement>(null);
    const containerPinned = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const containerEl = container.current;
        const containerPinnedEl = containerPinned.current;
        if (!containerEl) return;

        if (!containerPinnedEl) return;
        const testimonialCards = containerPinnedEl.querySelectorAll('.testimonial-card');
        if (testimonialCards.length === 0) return;

        const containerWidth = containerEl.offsetWidth;
        const cardsWidth = Array.from(testimonialCards).reduce(
            (acc, card) => acc + (card as HTMLElement).offsetWidth + 40, 
            0
        );
        const maxScroll = cardsWidth - containerWidth;

        gsap.to(containerPinnedEl, {
            x: -maxScroll,
            ease: "none",
            scrollTrigger: {
            trigger: containerEl,
            start: "top top",
            end: () => `+=${maxScroll}`,
            scrub: 2,
            pin: true,
            pinnedContainer: containerEl,
            anticipatePin: 1,
            },
        });
    }, { scope: containerPinned });

    return (
        <section className="min-h-screen bg-black new-container p-10 overflow-x-hidden" ref={container}>
            <p className="text-4xl sm:text-7xl md:text-8xl font-silk">Testimonials</p>
            <p className="text-2xl md:text-3xl mt-10 leading-10">
                Over the years, I’ve had the privilege of working with some amazing people, <br className="hidden md:block"/>
                here’s what they’ve had to say about our time working together.
            </p>
            <div className="mt-20 flex gap-10 relative" ref={containerPinned}>
                {
                    testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
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

export default Testimonials;