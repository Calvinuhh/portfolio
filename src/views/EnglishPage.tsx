import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import "./index.css";

const EnglishPage = () => {
  useEffect(() => {
    document.title = "Portfolio Calvin Howard";
  }, []);

  return (
    <>
      <Footer />
    </>
  );
};

export default EnglishPage;
