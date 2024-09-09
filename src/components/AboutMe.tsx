import { FC } from "react";

const AboutMe: FC = () => {
  return (
    <section className="about-me" id="aboutme">
      <div className="about">
        <h3 className="about-header">{"<About me />"}</h3>
        <div className="about-content">
          <div className="about-content-text">
            <div className="about-content-text-text">
              <strong>Greetings</strong> from my digital workshop! I'm Radim
              Pukalík, a passionate software developer and university student on
              a mission to blend academia with the artistry of web development.
            </div>
            <div className="about-content-text-text">
              Armed with the latest technologies and a dedication to clean,
              efficient code. I'm here to demonstrate that a student's
              experience extends beyond textbooks.
            </div>
            <div className="about-content-text-text">
              I'm eager to apply my skills and contribute to innovative projects
              while balancing my academic pursuits.
            </div>
          </div>
          <div className="about-content-picture">
            <img
              src="./aaa.jpg"
              alt="profile-picture"
              className="about-content-picture-container"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
