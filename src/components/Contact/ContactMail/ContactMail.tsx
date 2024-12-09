import style from "./index.module.css";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import Form from "../../Form/Form";

const ContactMail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.container}>
      <button className={style.btn} onClick={() => setIsModalOpen(true)}>
        <img
          className={style.icon}
          src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/lugn7xbqa5cbvocjfxic.png"
          alt="main_icon"
        />
        calvin.uhh@gmail.com
      </button>

      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          formModal={true}
        >
          <Form closeModal={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default ContactMail;
