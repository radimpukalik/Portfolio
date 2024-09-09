import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const MainPage: FC = () => {
  return (
    <>
      <section className="home">
        <div className="home-main-section">
          <h2>Hi! My name is</h2>
          <h1>
            Radim <span className="home-name-last">Pukalík</span>
          </h1>
          <h2>Junior React Developer</h2>
          <div className="home-social-icons">
            <a href="https://github.com/radimpukalik/">
              <FaGithub color={`rgb(193, 194, 193)`} size={30} />
            </a>
            <a href="https://www.linkedin.com/in/radimpukalik/">
              <FaLinkedin color={`rgb(193, 194, 193)`} size={30} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
