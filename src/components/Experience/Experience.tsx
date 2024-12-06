import style from "./experience.module.css";
import Section from "../Section/Section";

const Experience = ({ experience_title }: { experience_title: string }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{experience_title}</h2>
      <Section />
    </div>
  );
};

export default Experience;
