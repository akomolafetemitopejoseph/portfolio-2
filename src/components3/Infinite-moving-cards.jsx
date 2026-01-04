"use client";

import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Working with Temitope was a game-changer for our business. He delivered a clean, responsive website that not only looked amazing but also performed flawlessly on all devices. Highly recommended! ",
    name: "Sarah O",
    title: "Small Business Owner",
  },

  {
    quote:
      "Temitope brought our vision to life better than we imagined. His attention to detail and creative UI/UX design made our brand stand out online. We'll definitely work with him again! ",
    name: "Michael A",
    title: "Marketing Director",
  },

  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business. ",
    name: "Fatima D",
    title: "Non-Profit Organizer",
  },

  {
    quote:
      "Professional, fast, and reliable. Temitope created a custom web solution for us that was not only beautiful but also easy to manage. We’ve seen an increase in user engagement since launch. ",
    name: "Paul Deborah T",
    title: "Business owner",
  },

  {
    quote:
      "From concept to launch, Temitope handled everything with excellence. His frontend skills, especially with React and Tailwind CSS, made our app feel modern and user-friendly. A true frontend expert! ",
    name: "David K",
    title: "Tech Startup Founder",
  },
];

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "right") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <>
      <div>
        <h1
          className="text-center  text-xl 
          md:text-2xl lg:text-3xl font-bold mt-2 lg:mt-10 text-white underline underline-offset-10 decoration-10 under"
        >
          Testimonials
        </h1>
      </div>
      <div
        id="testimonial"
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {testimonials.map((item, idx) => (
            <li
              key={idx}
              className="relative mt-5 lg:mt-10 w-[300px] lg:w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
