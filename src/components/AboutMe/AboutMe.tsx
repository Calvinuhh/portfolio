import AboutMeInterface from "../../interfaces/aboutMe.interface";
import style from "./index.module.css";

const AboutMe = ({ title, strong, text1, text2 }: AboutMeInterface) => {
  const escapeRegExp = (string: string) =>
    string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const highlightWords = (text: string, words: Array<string>) => {
    const regex = new RegExp(`(${words.map(escapeRegExp).join("|")})`, "gi");
    return text
      .split(regex)
      .map((part, index) =>
        regex.test(part) ? <strong key={index}>{part}</strong> : part
      );
  };
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.sub_container}>
        <p className={style.text}>{highlightWords(text1, strong)}</p>
        <br />
        <p className={style.text}>{text2}</p>
      </div>
    </div>
  );
};

export default AboutMe;
