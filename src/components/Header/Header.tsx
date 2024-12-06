import style from "./header.module.css";
import Contact from "../Contact/Contact";
import LanguagueButton from "../LanguagueButton/LanguagueButton";

const Header = ({
  seniority_header,
  languague_button,
  route,
}: {
  seniority_header: string;
  languague_button: string;
  route: string;
}) => {
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
          <h2 className={style.name}>{seniority_header}</h2>
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

      <LanguagueButton languague_button={languague_button} route={route} />
    </div>
  );
};

export default Header;
