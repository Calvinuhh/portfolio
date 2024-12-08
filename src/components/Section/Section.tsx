import style from "./index.module.css";
import SectionContent from "./SectionContent/SectionContent";
import SectionInterface from "../../interfaces/section.interface";
import Modal from "../Modal/Modal";

const Section = (props: SectionInterface) => {
  return (
    <div className={style.container}>
      {props.title ? <h2 className={style.title}>{props.title}</h2> : null}
      <SectionContent
        setIsModalOpen={props.setIsModalOpen}
        corp={props.corp}
        btn_text={props.btn_text}
        date_range={props.date_range}
        position={props.position}
        description={props.description}
      />
      <Modal
        isModalOpen={props.isModalOpen}
        setIsModalOpen={props.setIsModalOpen}
      />
    </div>
  );
};

export default Section;
