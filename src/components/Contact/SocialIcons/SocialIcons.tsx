import style from "./index.module.css";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <div className={style.container}>
      <Link
        to="https://drive.google.com/file/d/168gxnurjo7Expo90msTg72XQZ8NLRfbm/view?usp=sharing"
        target="_blank"
      >
        <img
          className={style.icon}
          src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/emftua6x8kxuha56katy.png"
          alt="document_icon"
        />
      </Link>

      <Link
        to="https://www.linkedin.com/in/calvin-howard-853895283/"
        target="_blank"
      >
        <img
          className={style.icon}
          src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/gcigxgrcmfxihk1easff.png"
          alt="linkedin_icon"
        />
      </Link>

      <Link to="https://github.com/Calvinuhh" target="_blank">
        <img
          className={style.icon}
          src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/r0vxhlnzhb4zxaovmpsm.png"
          alt="github_icon"
        />
      </Link>
    </div>
  );
};

export default SocialIcons;
