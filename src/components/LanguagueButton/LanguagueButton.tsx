import HeaderInterface from "../../interfaces/header.interface";
import style from "./index.module.css";
import { Link } from "react-router-dom";

const LanguagueButton = (
  props: Omit<
    HeaderInterface,
    | "seniority"
    | "title_succes"
    | "text_succes"
    | "title_error"
    | "text_error"
    | "btn_accept"
  >
) => {
  return (
    <Link className={style.link} to={props.route}>
      {props.btn_text}
    </Link>
  );
};

export default LanguagueButton;
