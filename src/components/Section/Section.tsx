import style from "./index.module.css";
import { useState } from "react";
import SectionContent from "./SectionContent/SectionContent";
import SectionInterface from "../../interfaces/section.interface";
import Modal from "../Modal/Modal";
import BackDrop from "../BackDrop/BackDrop";

const Section = ({
  title,
  corp,
  btn_text,
  date_range,
  description,
  position,
  modal_title,
  mcs,
  henry,
  sena,
  text1,
  text2,
  text3,
  text4,
  ul_list,
  cert1,
  cert2,
  cert3,
}: Omit<SectionInterface, "isModalOpen" | "setIsModalOpen">) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.container}>
      {title ? <h2 className={style.title}>{title}</h2> : null}
      <SectionContent
        cert1={cert1}
        cert2={cert2}
        cert3={cert3}
        setIsModalOpen={setIsModalOpen}
        corp={corp}
        btn_text={btn_text}
        date_range={date_range}
        position={position}
        description={description}
      />
      <BackDrop isVisible={isModalOpen} />
      <Modal
        mcs={mcs}
        henry={henry}
        sena={sena}
        cert1={cert1}
        cert2={cert2}
        cert3={cert3}
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
        ul_list={ul_list}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modal_title={modal_title}
      />
    </div>
  );
};

export default Section;
