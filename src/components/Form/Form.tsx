import style from "./index.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

const Form = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          VITE_SERVICE_ID,
          VITE_TEMPLATE_ID,
          form.current,
          VITE_PUBLIC_KEY
        )
        .then(
          () => {
            Swal.fire({
              title: "Sent!",
              text: "Message sent successfully",
              icon: "success",
              confirmButtonText: "Accept",
            });
          },
          () => {
            Swal.fire({
              title: "Error",
              text: "There was a problem sending the message. Please try again.",
              icon: "error",
              confirmButtonText: "Accept",
            });
          }
        );
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name: </label>
        <input type="text" className={style.name_input} name="name" required />

        <label htmlFor="surname">Surname: </label>
        <input
          type="text"
          className={style.surname_input}
          name="surname"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea className={style.message_input} name="message" required />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;