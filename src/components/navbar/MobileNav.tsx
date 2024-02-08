import { FC } from "react";

interface Props {
  handleMobileNavClick: (targetId: string) => void;
}

const MobileNav: FC<Props> = ({ handleMobileNavClick }) => {
  return (
    <ul className="mobile-nav">
      <li className="mobile-nav-item">
        <a onClick={() => handleMobileNavClick("home")}>{"<Home />"}</a>
      </li>
      <li className="mobile-nav-item">
        <a onClick={() => handleMobileNavClick("aboutme")}>{"<About />"}</a>
      </li>
      <li className="mobile-nav-item">
        <a onClick={() => handleMobileNavClick("skills")}>{"<Skills />"}</a>
      </li>
      <li className="mobile-nav-item">
        <a onClick={() => handleMobileNavClick("projects")}>{"<Projects />"}</a>
      </li>
      <li className="mobile-nav-item">
        <a onClick={() => handleMobileNavClick("contactme")}>{"<Contact me />"}</a>
      </li>
    </ul>
  );
};

export default MobileNav;
