import { FC, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./components/MainPage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App: FC = () => {
  const [isMobileNavOn, setIsMobileNavOn] = useState<boolean>(false);

  return (
    <>
      <Navbar
        isMobileNavOn={isMobileNavOn}
        setIsMobileNavOn={setIsMobileNavOn}
      />
      {!isMobileNavOn && (
        <div className="container">
          <MainPage />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
        </div>
      )}
      <Footer />
    </>
  );
};

export default App;
