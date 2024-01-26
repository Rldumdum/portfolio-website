import HoverVideoPlayer from "react-hover-video-player";
import * as data from "../data";

const { projects } = data;

const Projects = () => {
  return (
    <div className="block text-center justify-center">
      <h1 className="text-black w-full mb-16 text-9xl" id="projects">
        Projects
      </h1>
      <div className="grid md:grid-cols-2  gap-10 justify-center items-center place-items-center w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`w-full md:w-6/12 place-self-${
              project.id % 2 === 0 ? "start" : "end"
            } `}
          >
            <div
              className={
                "relative hover:scale-110 transition-all duration-500 "
              }
            >
              <div className="left-hover absolute z-40 w-1/2 left h-full cursor-pointer  transition-all duration-1000 bg-black bg-opacity-0 opacity-0 hover:bg-opacity-60 hover:opacity-100 flex items-center justify-center ">
                <a href={project.url} className="p-12">
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
                <a href={project.link} className="p-12">
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
                  videoSrc={project.videoSrc}
                  pausedOverlay={
                    <img
                      src={project.src}
                      alt={project.title}
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
            <p className="text-2xl  mt-5 text-black">{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
