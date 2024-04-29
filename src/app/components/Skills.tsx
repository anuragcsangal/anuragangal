import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Skills = () => {
  return (
    <section className="w-full h-screen font-normal px-5" id="skills">
      <h1 className="text-4xl md:text-8xl p-4">Skills</h1>
      <div className="w-full border border-neutral-100 h-[75%] rounded-xl">
        <ul className="text-3xl p-10">
          <li><BiRightArrow className="inline-block" /> HTML</li>
          <li><BiRightArrow className="inline-block" /> CSS</li>
          <li><BiRightArrow className="inline-block" /> Javascript</li>
          <li><BiRightArrow className="inline-block" /> Golang</li>
          <li><BiRightArrow className="inline-block" /> Git & Github</li>
          <li><BiRightArrow className="inline-block" /> Figma</li>
          <li><BiRightArrow className="inline-block" /> React</li>
          <li><BiRightArrow className="inline-block" /> NextJS</li>
          <li><BiRightArrow className="inline-block" /> GSAP</li>
          <li><BiRightArrow className="inline-block" /> Framer-motion</li>
          <li><BiRightArrow className="inline-block" /> Threejs & React-three-fiber</li>
        </ul>
      </div>
    </section >
  );
};

export default Skills;
