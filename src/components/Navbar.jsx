import "../styles/navBar.css";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  const smallNavHandler = () => {
    setOpenNav((prevNav) => !prevNav);
  };

  window.addEventListener("scroll", () => {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });
  window.addEventListener("scroll", () => {
    var nav2 = document.querySelector(".small-nav");
    nav2.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <>
      <nav className="hidden sm:flex ">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="logo cursor-pointer"
        >
          {"<RL/>"}
        </Link>
        <ul>
          <li>
            <Link
              to="abte"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              ABTE
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li>
            <RouterLink to="/portfolio-website/resume/">Resume</RouterLink>
          </li>
        </ul>
      </nav>
      {/* mobile view */}
      <nav
        className="small-nav justify-center "
        onClick={() => {
          console.log("i am clicked");
          smallNavHandler();
        }}
      >
        <img
          src="/portfolio-website/images/hamburger.png"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </nav>
      <div
        className={
          "bg-[#EFC20E] h-0 w-full absolute transition-all duration-1000 drop-down  " +
          (openNav ? "h-full" : "")
        }
      >
        <div className="fixed text-5xl ">
          <ul>
            <li className="mt-28 w-screen justify-center flex ">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="logo cursor-pointer text-black"
                onClick={() => {
                  smallNavHandler();
                }}
              >
                HOME
              </Link>
            </li>
            <li className="mt-5 w-screen justify-center flex">
              <Link
                to="abte"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer text-black"
                onClick={() => {
                  smallNavHandler();
                }}
              >
                ABTE
              </Link>
            </li>
            <li className="mt-5 w-screen justify-center flex">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer text-black"
                onClick={() => {
                  smallNavHandler();
                }}
              >
                Projects
              </Link>
            </li>
            <li className="mt-5 w-screen justify-center flex">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer text-black"
                onClick={() => {
                  smallNavHandler();
                }}
              >
                Contact
              </Link>
            </li>
            <li className="mt-5 w-screen justify-center flex">
              <RouterLink to="/portfolio-website/resume/">Resume</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
