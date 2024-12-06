import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { spanish } from "../../public/info.json";
import "./index.css";

const SpanishPage = () => {
  useEffect(() => {
    document.title = "Portafolio Calvin Howard";
  }, []);

  return (
    <>
      <Header
        languague_button={spanish.languague_button}
        seniority_header={spanish.seniority_header}
        route={spanish.route}
      />
      <Footer />
    </>
  );
};

export default SpanishPage;
