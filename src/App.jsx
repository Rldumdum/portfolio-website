import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

let items = [
  { id: 1, title: "About Me" },
  { id: 2, title: "Tech Stack" },
  { id: 3, title: "Experiences & Education" },
];

function App() {
  const [isHover, setIsHover] = useState();

  console.log(isHover);
  return (
    <div>
      <div className="hero flex p-20 ">
        <div className="left flex-1  ">
          <div className="w-3/4 ">
            <h2 className="text-7xl text-black mt-10">HI! I am</h2>
            <h1 className="font-bold text-9xl text-black mt-5">
              RL <br /> DUMDUM
            </h1>
            <h3 className="text-6xl tracking-tight text-black mt-5 w-[700px]">
              SOFTWARE DEVELOPER
            </h3>
            <p className="text-2xl mt-10 w-[800px] tracking-wider ">
              My mission is to help you build your projects with my versatility
              and my ability to adapt to different situations. Together, let's
              turn your ideas into great projects!
            </p>
          </div>
        </div>
        <div className="right flex-1 ml-36">
          <img src="/images/myPhoto.png" alt="RL DUMDUM" width={450} />
          <div className="bg-black w-full h-0.5 relative right-20" />
          <button
            className="bg-black text-white mt-10 py-10 px-20 "
            onClick={() => setIsHover(3)}
          >
            <p className=" text-3xl">View My Work</p>
          </button>
        </div>
      </div>
      <Box />
      <ul className="infos flex px-36 pb-36 gap-4  ">
        {items.map((item) => (
          <li
            key={item.id}
            className={
              " h-96 bg-black rounded-3xl transition-all duration-1000 ease-in-out flex  items-center justify-center " +
              (isHover === item.id ? "w-full flex-col " : isHover ? "w-1/4 " : "w-full ")
            }
            onMouseEnter={() => {
              setIsHover(item.id);
            }}
            onMouseLeave={() => {
              setIsHover(null);
            }}
          >
            <h1
              className={
                "text-center justify-center transition-all duration-700 ease-in out text-white relative top-0 " +
                (isHover === item.id
                  ? "text-sm -top-36 "
                  : isHover
                  ? " text-5xl blur-sm"
                  : "text-7xl")
              }
            >
              {item.title}
            </h1>
            {isHover === item.id && item.title === "About Me" && (
              <div className="bg-red-500">
                <p>Hello My name is rl dumum</p>

              </div>
            )
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
