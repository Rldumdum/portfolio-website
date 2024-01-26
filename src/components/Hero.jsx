import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <div className="hero flex max-w-16  items-center justify-center m-auto p-20 ">
        <div className=" flex-1  ">
          <div className="w-3/4 ">
            <h2 className="text-4xl w-full lg:ml-20 xl:text-7xl xl:ml-0 transition-all duration-700 text-black mt-10">
              <span className="p-5 md:p-0">HI! I am</span>
            </h2>
            <h1 className="font-bold w-full  text-6xl lg:ml-20 xl:text-9xl xl:ml-0 transition-all duration-700 text-black mt-5">
              <p className="px-5 md:p-0">
                RL <br /> DUMDUM
              </p>
            </h1>
            <h3 className="text-3xl lg:ml-20 xl:text-6xl xl:ml-0 tracking-tight transition-all duration-700 text-black mt-5 lg:w-[700px]">
              <span className="p-5 md:p-0">WEB DEVELOPER</span>
            </h3>
            <p className="text-xl mt-10 w-screen lg:w-[800px]   lg:ml-20 xl:text-2xl xl:ml-0 transition-all duration-700 tracking-wider ">
              <p className="px-5 md:p-0">
                My aim is to use my diverse skills to create your product. I can
                certainly bring your ideas to life and achieve great things!
              </p>
            </p>
          </div>
        </div>
        {/* big screen */}
        <div className="hidden flex-1 ml-36 transition-all duration-700 relative xl:block">
          <img
            src="/portfolio-website/images/myPhoto.png"
            alt="RL DUMDUM"
            width={900}
          />
          <div className="bg-black w-full h-0.5 relative" />
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className=" text-1xl"
          >
            <button className="bg-black text-white mt-10 py-6 px-0 w-80 justify-center flex ">
              View My Work
            </button>
          </Link>
        </div>
      </div>
      {/* small screen */}
      <div className="xl:hidden flex flex-col  items-center transition-all duration-700  justify-center w-full ">
        <img
          src="/portfolio-website/images/myPhoto.png"
          alt="RL DUMDUM"
          width={300}
          className="place-self-center justify-self-center"
        />
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" text-1xl"
        >
          <button className="bg-black text-white mt-10 py-6 px-0 w-72 justify-center flex ">
            View My Work
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
