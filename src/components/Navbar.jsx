import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/computer.png";
const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        <img src={logo} alt="computer" className="mx-2 w-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/patrick-strassburger/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/PatriickDe-v" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
