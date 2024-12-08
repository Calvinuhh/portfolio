import style from "./index.module.css";
import DateRage from "../../DateRange/DateRange";
import ModalBtn from "../../ModalBtn/ModalBtn";
import SectionInterface from "../../../interfaces/section.interface";

const SectionContent = (
  props: Omit<SectionInterface, "title" | "isModalOpen">
) => {
  return (
    <div className={style.container}>
      <div className={style.title_date_container}>
        <h2 className={style.title}>{props.corp}</h2>
        <DateRage date_range={props.date_range} />
      </div>
      <div className={style.description_container}>
        <h3>{props.position}</h3>
        <p className={style.text}>{props.description}</p>
        <ModalBtn
          btn_text={props.btn_text}
          setIsModalOpen={props.setIsModalOpen}
        />
      </div>
    </div>
  );
};

export default SectionContent;
