import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Technologies from "../components/Technologies/Technologies";
import Experience from "../components/Experience/Experience";
import { english } from "../../public/info.json";
import "./index.css";

const EnglishPage = () => {
  useEffect(() => {
    document.title = "Portfolio Calvin Howard";
  }, []);

  return (
    <>
      <Header
        languague_button={english.languague_button}
        seniority_header={english.seniority_header}
        route={english.route}
      />
      <AboutMe
        about_title={english.about_title}
        text1={english.text1}
        text2={english.text2}
        strong={english.strong}
      />
      <Technologies technologies_title={english.technologies_title} />
      <Experience experience_title={english.experience_title} />

      <Footer />
    </>
  );
};

export default EnglishPage;
