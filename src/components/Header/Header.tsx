import style from "./index.module.css";
import Contact from "../Contact/Contact";
import LanguagueButton from "../LanguagueButton/LanguagueButton";
import HeaderInterface from "../../interfaces/header.interface";

const Header = ({ btn_text, route, seniority }: HeaderInterface) => {
  return (
    <div className={style.container}>
      <div className={style.sub_container}>
        <img
          className={style.image}
          src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/uowrytsl83v75ieoj9hq.jpg"
          alt="profile_pic"
        />
        <div className={style.sub_container_info}>
          <h1 className={style.title}>Calvin Howard</h1>
          <h2 className={style.name}>{seniority}</h2>
          <div className={style.location_container}>
            <img
              className={style.location_logo}
              src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/wbljo25mchvxyrd8ttup.png"
              alt="location_logo"
            />
            <h3 className={style.location}>Bogotá, Colombia</h3>
          </div>
          <Contact />
        </div>
      </div>

      <LanguagueButton btn_text={btn_text} route={route} />
    </div>
  );
};

export default Header;
