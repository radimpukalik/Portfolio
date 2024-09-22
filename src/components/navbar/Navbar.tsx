import { FC, useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

type IconName = "github" | "linkedin";
interface Props {
  isMobileNavOn: boolean;
  setIsMobileNavOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: FC<Props> = ({ isMobileNavOn, setIsMobileNavOn }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [newScroll, setNewScroll] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<Record<IconName, boolean>>({
    github: false,
    linkedin: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (newScroll) {
      smoothScroll(newScroll);
    }
  }, [newScroll]);

  const handleMouseEnter = (icon: IconName) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [icon]: true,
    }));
  };

  const handleMouseLeave = (icon: IconName) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [icon]: false,
    }));
  };

  const iconStyles = (icon: IconName) => ({
    color: isHovered[icon] ? "#E0CCBE" : "rgb(193, 194, 193)",
  });

  const smoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleMobileNavClick = (targetId: string) => {
    setIsMobileNavOn(false);
    setNewScroll(targetId);
  };

  return (
    <>
      <nav className="nav" id="home">
        <div className="nav-left">
          <a
            href="https://github.com/radimpukalik/"
            className="nav-left-item"
            onMouseEnter={() => handleMouseEnter("github")}
            onMouseLeave={() => handleMouseLeave("github")}
            style={{ transform: `scale(${isHovered["github"] ? 1.1 : 1})` }}
          >
            <FaGithub size={35} color={iconStyles("github").color} />
          </a>
          <a
            href="https://www.linkedin.com/in/radimpukalik/"
            className="nav-left-item"
            onMouseEnter={() => handleMouseEnter("linkedin")}
            onMouseLeave={() => handleMouseLeave("linkedin")}
            style={{ transform: `scale(${isHovered["linkedin"] ? 1.1 : 1})` }}
          >
            <FaLinkedin size={35} color={iconStyles("linkedin").color} />
          </a>
        </div>
        {!isMobileNavOn && windowWidth > 650 && (
          <ul className="menu-nav">
            <li className="menu-nav-item">
              <a onClick={() => smoothScroll("home")}>{"<Home />"}</a>
            </li>
            <li className="menu-nav-item">
              <a onClick={() => smoothScroll("aboutme")}>{"<About />"}</a>
            </li>
            <li className="menu-nav-item">
              <a onClick={() => smoothScroll("skills")}>{"<Skills />"}</a>
            </li>
            <li className="menu-nav-item">
              <a onClick={() => smoothScroll("projects")}>{"<Projects />"}</a>
            </li>
            <li className="menu-nav-item">
              <a onClick={() => smoothScroll("contactme")}>
                {"<Contact me />"}
              </a>
            </li>
          </ul>
        )}

        {windowWidth < 650 && (
          <div
            onClick={() => setIsMobileNavOn((prev) => !prev)}
            className="hamburger-menu"
          >
            <GiHamburgerMenu size={35} />
          </div>
        )}
      </nav>
      {isMobileNavOn && (
        <MobileNav handleMobileNavClick={handleMobileNavClick} />
      )}
    </>
  );
};

export default Navbar;
