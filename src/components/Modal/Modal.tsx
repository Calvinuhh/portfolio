import style from "./index.module.css";
import SectionInterface from "../../interfaces/section.interface";

const Modal = ({
  isModalOpen,
  setIsModalOpen,
}: Pick<SectionInterface, "isModalOpen" | "setIsModalOpen">) => {
  if (!isModalOpen) return null;

  return (
    <div className={style.container}>
      Holaaaaaaaaaaa
      <img
        onClick={() => setIsModalOpen(false)}
        className={style.exit}
        src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404613/portfolio/hwqbfqymekqgr1o8kx7m.png"
        alt="exit_icon"
      />
    </div>
  );
};

export default Modal;
