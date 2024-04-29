"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef<HTMLElement>(null);
  const link = useRef<HTMLAnchorElement>(null);
  const links = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".text", {
        duration: 4,
        text: {
          value: "SOFTWARE",
          delimiter: " ",
        },
        ease: "none",
        repeat: -1,
      });

      gsap.to(".me", {
        opacity: 0,
        // scale: 0,
        scrollTrigger: {
          trigger: ".me",
          start: "bottom center",
          scrub: true,
          pin: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <>
      <section
        className="w-full h-screen flex justify-center items-center font-light "
        ref={container}
      >
        <div className="ml-5 me">
          <div className="mb-3 ">
            <div className="flex justify-between items-center me -z-50">
              <h1 className="text-4xl md:text-8xl font-semibold">
                ANURAG ANGAL
              </h1>
              <HiOutlineArrowUpRight size={80} />
            </div>
            <h2 className="text-3xl md:text-7xl font-thin">
              <span className="text">FRONTEND</span> - DEVELOPER
            </h2>
          </div>
          <div className="flex justify-between text-3xl md:text-6xl links font-thin z-50">
            <Link href={"#about"} className="link" ref={link}>
              ABOUT
            </Link>
            <Link href={"#skills"} className="link" ref={link}>
              SKILLS
            </Link>
            <Link href={"#projects"} className="link" ref={link}>
              PROJECTS
            </Link>
          </div>
          {/* <div className="mt-5 flex justify-around items-center font-thin">
          <Link href={"https://github.com/anuragcsangal"} target="_blank">
            <SlSocialGithub color="white" size={50} />
          </Link>
          <Link href={"https://linkedin.com/in/anurag-angal"} target="_blank">
            <SlSocialLinkedin color="white" size={50} />
          </Link>
          <Link href={"mailto:anurag.angalcs@gmail.com"} target="_blank">
            <VscMail color="white" size={50} />
          </Link>
          <Link href={"/anurag.jpg"} target="_blank">
            <GrDocument color="white" size={50} />
          </Link>
        </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
