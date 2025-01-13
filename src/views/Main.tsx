import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";
import Form from "../components/Form";
import Experiences from "../components/experience/Experiences";
import Projects from "../components/projects/Projects";
import Education from "../components/education/Education";
import Certificates from "../components/certificates/Certificates";

const Main = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Technologies />
      <Experiences />
      <Projects />
      <Education />
      <Certificates />
      <Form />
      <Footer />
    </>
  );
};

export default Main;
