import style from "./languagueButton.module.css";
import { Link } from "react-router-dom";

const LanguagueButton = ({
  languague_button,
  route,
}: {
  languague_button: string;
  route: string;
}) => {
  return (
    <Link className={style.link} to={route}>
      {languague_button}
    </Link>
  );
};

export default LanguagueButton;
