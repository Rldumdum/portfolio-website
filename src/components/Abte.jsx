import { useState } from "react";
import * as data from "../data";
const { items, languages } = data;
const Abte = () => {
  const [isHover, setIsHover] = useState();
  const [opacity, setOpacity] = useState(0);
  return (
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
                things and rethink my learnings. Growing up as a curious kid, I
                used to play lots of video games. I always wonder what goes
                behind the creation of each thing. I brought that attitude with
                me through adulthood and now learning a lot of technologies and
                specializing in web development. I dabble in a lot of
                technologies prior to programming, I do a lot of editing
                photos/video and I am always open to learning new things until
                now I never get tired of it.
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
                Sept 2023 - Jan 2024 ADukasyon Mobile App Developer Intern
                <p>Sept 2023 - Jan 2024 ADukasyon NextJs Fullstack Bootcamp</p>
                <p>
                  2021 - 2022 Bachelor of Science In Information and Technology
                  Holy Cross of Davao College (undergraduate)
                </p>
                <span className="block mt-10 text-green-400">
                  See my resume for more details.
                </span>
              </p>
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default Abte;
