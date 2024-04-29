import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="w-[90%] h-auto grid grid-cols-2 grid-rows-1">
        <div className="grid-cols-1 grid-rows-3 flex flex-col justify-center items-start">
          <p className="p-2 font-bold text-3xl">Go CLI Todo App</p>
          <Link href={'https://github.com/anuragcsangal/gsdlist'} target="_blank">
            <Image
              alt="Go CLI App"
              src={"/gsdlist.png"}
              width={300}
              height={300}
            />
          </Link>
          <p className="w-[60%] h-auto p-2 text-2xl">
            Command line Todo application which saves todo to a json file
          </p>
        </div>
        <div className="grid-cols-1 grid-rows-3 flex flex-col justify-center items-start">
          <p className="text-3xl p-2 font-bold">Apple airpods pro clone (version 2022)</p>
          <Link href={'https://anuragcsangal.github.io/airpods-2022-clone/'} target="_blank">
            <Image
              alt="Airpods pro clone"
              src={"/apple.png"}
              width={300}
              height={300}
            />
          </Link>
          <p className="w-[60%] h-auto p-2 text-2xl">
            Apple Airpods pro clone built with HTML, CSS, JS and GSAP
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
