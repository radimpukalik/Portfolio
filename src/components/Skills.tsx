import { FC } from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { SiCplusplus, SiCsharp, SiMysql, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TfiHtml5 } from "react-icons/tfi";
import { DiCss3 } from "react-icons/di";
import { SiSass } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills: FC = () => {
  return (
    <section className="skill" id="skills">
      <div className="skill-container">
        <h3 className="skill-container-header">{"<Skills />"}</h3>
        <ul className="skill-list">
          <li className="skill-item">
            <FaReact size={75} color="#61DBFB" />
          </li>
          <li className="skill-item">
            <SiTypescript size={60} color="#007acc" />
          </li>
          <li className="skill-item">
            <IoLogoJavascript size={65} color="#F0DB4F" />
          </li>
          <li className="skill-item">
            <TfiHtml5 size={65} color="#FF5733" />
          </li>
          <li className="skill-item">
            <DiCss3 size={75} color="#007acc" />
          </li>
          <li className="skill-item">
            <SiSass size={70} color="#CD6799" />
          </li>
          <li className="skill-item">
            <RiTailwindCssFill size={70} color="#38bdf8" />
          </li>
          <li className="skill-item">
            <FaGitAlt size={80} color="#f34f29" />
          </li>
          <li className="skill-item">
            <FaPython size={80} color="#306998" />
          </li>
          <li className="skill-item">
            <SiCsharp size={70} color="#9B4F96" />
          </li>
          <li className="skill-item">
            <SiCplusplus size={70} color="#00599C" />
          </li>
          <li className="skill-item">
            <SiMysql size={80} color="#F29111" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
