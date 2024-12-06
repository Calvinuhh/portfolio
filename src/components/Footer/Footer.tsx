import style from "./footer.module.css";
import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <div className={style.container}>
      <Contact />
    </div>
  );
};

export default Footer;
