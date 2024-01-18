import "../styles/navBar.css";
import { Link } from "react-scroll";

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
        className="logo"
      >
        {"<RL/>"}
      </Link>
      <ul>
        <li>
          <Link to="abte" spy={true} smooth={true} offset={-100} duration={500}>
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
          >
            Contact
          </Link>
        </li>
        <li>
          <Link>Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
