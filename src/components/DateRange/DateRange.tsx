import style from "./index.module.css";
import SectionInterface from "../../interfaces/section.interface";

const DateRage = ({ date_range }: Pick<SectionInterface, "date_range">) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{date_range}</h2>
    </div>
  );
};

export default DateRage;
