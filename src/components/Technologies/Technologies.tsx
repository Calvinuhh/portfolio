import TechnologiesInterface from "../../interfaces/technologies.interface";
import style from "./index.module.css";

const Technologies = ({ title }: TechnologiesInterface) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.images_container}>
        <img
          className={style.image}
          src="https://juststickers.in/wp-content/uploads/2019/07/nodejs.png"
          alt="nodejs_logo"
        />
        <img
          className={style.image}
          src="https://keenethics.com/wp-content/uploads/2021/10/Express.js.svg"
          alt="express_logo"
        />
        <img
          className={style.image}
          src="https://upload.wikimedia.org/wikipedia/commons/0/00/HTML5_logo_black.svg"
          alt="html5_logo"
        />
        <img
          className={style.image}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
          alt="css3_logo"
        />
        <img
          className={style.image}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
          alt="js_logo"
        />
        <img
          className={style.image}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
          alt="ts_logo"
        />
        <img
          className={style.image}
          src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/r0vxhlnzhb4zxaovmpsm.png"
          alt="github_logo"
        />
        <img
          className={style.image}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
          alt="git_logo"
        />
        <img
          className={style.image}
          src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp"
          alt="mongodb_logo"
        />
        <img
          className={style.image}
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99177233598415E22A"
          alt="mongoose_logo"
        />
        <img
          className={style.image}
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_original_wordmark_logo_icon_146392.png"
          alt="postgresql_logo"
        />
        <img
          className={style.image}
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/sequelize_original_logo_icon_146348.png"
          alt="sequelize_logo"
        />
        <img
          className={style.image}
          src="https://ies.solutions/wordpress/wp-content/uploads/jwt.png"
          alt="jwt_logo"
        />
        <img
          className={style.image}
          src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175110.png?f=webp&w=256"
          alt="react_logo"
        />
      </div>
    </div>
  );
};

export default Technologies;
