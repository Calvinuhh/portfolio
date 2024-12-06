import style from "./section.module.css";
import DateRage from "../DateRange/DateRange";

const Section = () => {
  return (
    <div className={style.container}>
      <div>
        <h2></h2>
        <DateRage />
      </div>
      <h3></h3>
      <p></p>
    </div>
  );
};

export default Section;
