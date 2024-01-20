import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import Box2 from "./components/Box2";
import HoverVideoPlayer from "react-hover-video-player";
import * as data from "./data";
import { Link } from "react-scroll";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const { items, projects, languages } = data;

function App() {
  const [isHover, setIsHover] = useState();
  const [opacity, setOpacity] = useState(0);

  // console.log(isHover);
  return (
    <div className=" app_div " id="hero">
      {/* Small Desktop Size */}

      <div className="">
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
                  My aim is to use my diverse skills to create your product. I
                  can certainly bring your ideas to life and achieve great
                  things!
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

      <Box />
      <ul
        className="infos flex flex-col xl:flex-row px-36 pb-36 gap-4  "
        id="abte"
      >
        {items.map((item) => (
          <li
            key={item.id}
            className={
              " h-96 bg-black rounded-3xl transition-all duration-1000 ease-in-out flex items-center justify-center " +
              (isHover === item.id
                ? "w-full flex-col "
                : isHover
                ? "w-1/4 "
                : "w-full ")
            }
            onMouseEnter={() => {
              setIsHover(item.id);
            }}
            onMouseLeave={() => {
              setIsHover(null);
              setOpacity(0);
            }}
          >
            <h1
              className={
                "  text-center justify-center transition-all duration-700 ease-in-out text-white relative  " +
                (isHover === item.id
                  ? " text-sm -top-36 "
                  : isHover
                  ? " text-5xl blur-sm top-0"
                  : " xl:text-4xl 2xl:text-7xl top-0 ")
              }
            >
              {item.title}
            </h1>
            {isHover === item.id && item.title === "About Me" ? (
              <div
                onMouseEnter={() => setOpacity(100)}
                onMouseLeave={() => setOpacity(0)}
                className={
                  `xl:w-5/12 2xl:w-6/12 h-72 mt-10 absolute transition-all duration-1000 delay-150 cursor-crosshair ease-in-out ` +
                  (opacity === 100 ? "opacity-100" : "opacity-0 ")
                }
              >
                <p className="xl:text-lg mx-12 xl:mx-0  2xl:text-xl  text-white leading-relaxed">
                  Hi, Let me introduce myself again. <br /> <br />
                  My name is RL. I am a passionate person, willing to learn new
                  things and rethink my learnings. Growing up as a curious kid,
                  I used to play lots of video games. I always wonder what goes
                  behind the creation of each thing. I brought that attitude
                  with me through adulthood and now learning a lot of
                  technologies and specializing in web development. I dabble in
                  a lot of technologies prior to programming, I do a lot of
                  editing photos/video and I am always open to learning new
                  things until now I never get tired of it.
                </p>
              </div>
            ) : isHover === item.id && item.title === "Tech" ? (
              <div
                onMouseEnter={() => setOpacity(100)}
                onMouseLeave={() => setOpacity(0)}
                className={`w-4/12 h-72 mt-10  place-items-center grid grid-cols-5 absolute cursor-crosshair transition-all duration-1000 delay-150 ease-in-out opacity-${opacity} `}
              >
                {languages.map((language) => (
                  <div
                    key={language.id}
                    className="bg-white h-14 w-14 lg:h-auto lg:w-auto p-3 rounded-3xl"
                  >
                    <img
                      src={language.src}
                      alt={language.title}
                      className="rounded-xl "
                      width={56}
                      height={56}
                    />
                  </div>
                ))}
              </div>
            ) : isHover === item.id &&
              item.title === "Experiences & Education" ? (
              <div
                onMouseEnter={() => setOpacity(100)}
                onMouseLeave={() => setOpacity(0)}
                className={`xl:w-5/12 2xl:w-6/12 h-72 mt-10  absolute transition-all cursor-crosshair duration-1000 delay-150 ease-in-out opacity-${opacity} `}
              >
                <p className="text-xl mx-12 xl:mx-0  text-white leading-relaxed">
                  I went to college for 2nd year then I stopped taking BSIT, and
                  decided to self-learn everything on a fast-faced environment.
                  I also went to a coding boot camp and got an internship and
                  that&apos;s where my professional coding journey begins.
                  <span className="block mt-10 text-green-400">
                    See my resume for more details.
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
      <div>
        {/* projects */}
        <Box2 />
        <div className="block text-center justify-center">
          <h1 className="text-black w-full mb-16 text-9xl" id="projects">
            Projects
          </h1>
          <div className="grid md:grid-cols-2  gap-10 justify-center items-center place-items-center w-full">
            <div className="w-full md:w-6/12 place-self-end ">
              <div
                className={
                  "relative hover:scale-110  transition-all duration-500 "
                }
              >
                <div className="left-hover absolute z-40 w-1/2 left h-full cursor-pointer  transition-all duration-1000 bg-black bg-opacity-0 opacity-0 hover:bg-opacity-60 hover:opacity-100 flex items-center justify-center ">
                  <a
                    href="https://github.com/Rldumdum/memory-game"
                    className="p-12"
                  >
                    <span className=" text-white justify-center items-center flex flex-col">
                      <img
                        src="/portfolio-website/images/github.svg"
                        width={40}
                        className="mb-3"
                      ></img>
                      <p>Github Repo</p>
                    </span>
                  </a>
                </div>
                <div className="right-hover absolute right-0  z-40 w-1/2 h-full cursor-pointer transition-all duration-1000 bg-slate-500 bg-opacity-0 opacity-0 hover:bg-opacity-60 hover:opacity-100 flex items-center justify-center">
                  <a
                    href="https://rldumdum.github.io/memory-game/"
                    className="p-12"
                  >
                    <span className=" text-white justify-center items-center flex flex-col">
                      <img
                        src="/portfolio-website/images/demo.svg"
                        width={40}
                        className="mb-3"
                      ></img>
                      <p>Live Demo</p>
                    </span>
                  </a>
                </div>
                <div className="flex justify-center ">
                  <div className="w-10 h-10 bg-white shadow-black drop-shadow-xl rounded-full absolute z-50 bottom-2 pointer-events-none transition-all ">
                    <img
                      src="/portfolio-website/images/pulsatingcircle.gif"
                      className="rounded-full "
                    />
                  </div>
                  <HoverVideoPlayer
                    videoStyle={{
                      height: "300px",
                      borderRadius: "1.5rem",
                    }}
                    className="rounded-3xl transition-all duration-500"
                    videoSrc="/portfolio-website/video/memory-game.mp4"
                    pausedOverlay={
                      <img
                        src={projects[0].src}
                        alt=""
                        style={{
                          // Make the image expand to cover the video's dimensions
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "1.5rem",
                        }}
                      />
                    }
                    pausedOverlayWrapperStyle={{
                      borderRadius: "1.5rem",
                    }}
                    objectFit="cover"
                    loadingOverlay={
                      <div className="loading-overlay">
                        <div className="loading-spinner" />
                      </div>
                    }
                  ></HoverVideoPlayer>
                </div>
              </div>
              <p className="text-2xl  mt-5 text-black">{projects[0].title}</p>
            </div>
            <div className="w-full md:w-6/12  place-self-start">
              <div
                className={
                  "relative hover:scale-110 transition-all duration-500 "
                }
              >
                <div className="left-hover absolute z-40 w-1/2 left h-full cursor-pointer  transition-all duration-1000 bg-black bg-opacity-0 opacity-0 hover:bg-opacity-60 hover:opacity-100 flex items-center justify-center ">
                  <a
                    href="https://github.com/Rldumdum/new-year-countdown"
                    className="p-12"
                  >
                    <span className=" text-white justify-center items-center flex flex-col">
                      <img
                        src="/portfolio-website/images/github.svg"
                        width={40}
                        className="mb-3"
                      ></img>
                      <p>Github Repo</p>
                    </span>
                  </a>
                </div>
                <div className="right-hover absolute right-0  z-40 w-1/2 h-full cursor-pointer transition-all duration-1000 bg-slate-500 bg-opacity-0 opacity-0 hover:bg-opacity-60 hover:opacity-100 flex items-center justify-center ">
                  <a
                    href="https://thecountdown2024.vercel.app/"
                    className="p-12"
                  >
                    <span className=" text-white justify-center items-center flex flex-col">
                      <img
                        src="/portfolio-website/images/demo.svg"
                        width={40}
                        className="mb-3"
                      ></img>
                      <p>Live Demo</p>
                    </span>
                  </a>
                </div>
                <div className="flex justify-center ">
                  <div className="w-10 h-10 bg-white shadow-black drop-shadow-xl rounded-full absolute z-50 bottom-2 pointer-events-none transition-all ">
                    <img
                      src="/portfolio-website/images/pulsatingcircle.gif"
                      className="rounded-full"
                    />
                  </div>
                  <HoverVideoPlayer
                    videoStyle={{ height: "300px", borderRadius: "1.5rem" }}
                    className="rounded-3xl transition-all duration-500"
                    videoSrc="/portfolio-website/video/new-year-countdown.mp4"
                    pausedOverlay={
                      <img
                        src={projects[1].src}
                        alt=""
                        style={{
                          // Make the image expand to cover the video's dimensions
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "1.5rem",
                        }}
                      />
                    }
                    pausedOverlayWrapperStyle={{
                      borderRadius: "1.5rem",
                    }}
                    objectFit="cover"
                    loadingOverlay={
                      <div className="loading-overlay">
                        <div className="loading-spinner" />
                      </div>
                    }
                  />
                </div>
              </div>
              <p className="text-2xl mt-5 text-black">{projects[1].title}</p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
