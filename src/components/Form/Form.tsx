import style from "./index.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

interface FormProps {
  closeModal: () => void;
}

const Form = ({ closeModal }: FormProps) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      try {
        await emailjs.sendForm(
          VITE_SERVICE_ID,
          VITE_TEMPLATE_ID,
          form.current,
          VITE_PUBLIC_KEY
        );

        Swal.fire({
          title: "Sent!",
          text: "Message sent successfully",
          icon: "success",
          confirmButtonText: "Accept",
        }).then(() => {
          closeModal();
        });
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "There was a problem sending the message. Please try again.",
          icon: "error",
          confirmButtonText: "Accept",
        }).then(() => {
          closeModal();
        });
      }
    }
  };

  return (
    <div className={style.container}>
      <h1>Send me a message!</h1>
      <form className={style.formEmailjs} ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name: </label>
        <input type="text" className={style.input} name="name" required />

        <label htmlFor="surname">Surname: </label>
        <input type="text" className={style.input} name="surname" required />

        <label htmlFor="email">Email: </label>
        <input type="email" className={style.input} name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea
          className={`${style.input} ${style.message}`}
          name="message"
          required
        />

        <button className={style.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
