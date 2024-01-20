import "../styles/navBar.css";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  window.addEventListener("scroll", () => {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <nav>
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
  );
};

export default NavBar;
