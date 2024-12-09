import style from "./index.module.css";
import DateRage from "../../DateRange/DateRange";
import ModalBtn from "../../ModalBtn/ModalBtn";
import SectionInterface from "../../../interfaces/section.interface";

const SectionContent = ({
  corp,
  btn_text,
  date_range,
  description,
  position,
  setIsModalOpen,
}: Omit<SectionInterface, "title" | "isModalOpen">) => {
  return (
    <div className={style.container}>
      <div className={style.title_date_container}>
        <h2 className={style.title}>{corp}</h2>
        <DateRage date_range={date_range} />
      </div>
      <div className={style.description_container}>
        <h3>{position}</h3>
        <p className={style.text}>{description}</p>
        <ModalBtn btn_text={btn_text} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default SectionContent;
