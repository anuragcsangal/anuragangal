"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const About = () => {
  const about = useRef<HTMLElement>(null);
  const paragraph = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: about,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <section
      id="about"
      ref={about}
      className="w-full h-screen flex justify-center items-center"
    >
        <motion.p className="p-10 text-3xl md:text-6xl font-extralight text flex flex-wrap" style={{opacity: scrollYProgress}}>Hi, I&apos;m Anurag. I like to create beautiful as well as functional websites, cli tools, or anything related to software. I like to develop and debug all kinds of systems. I like to do Frontend development because it not only consists of programming, but also art, psychology and interactions with humans.</motion.p>
    </section>
  );
};

export default About;
