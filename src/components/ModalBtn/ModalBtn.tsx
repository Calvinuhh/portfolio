import style from "./index.module.css";
import SectionInterface from "../../interfaces/section.interface";

const ModalBtn = ({
  btn_text,
  setIsModalOpen,
}: Pick<SectionInterface, "btn_text" | "setIsModalOpen">) => {
  return (
    <button
      onClick={() => {
        setIsModalOpen(true);
      }}
      className={style.btn}
    >
      {btn_text}
    </button>
  );
};

export default ModalBtn;
