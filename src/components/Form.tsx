import Swal from "sweetalert2";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import loading_gif from "/loading_gif.gif";

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    const name = (form.current?.elements.namedItem("name") as HTMLInputElement)
      ?.value;
    const surname = (
      form.current?.elements.namedItem("surname") as HTMLInputElement
    )?.value;
    const email = (
      form.current?.elements.namedItem("email") as HTMLInputElement
    )?.value;
    const message = (
      form.current?.elements.namedItem("message") as HTMLTextAreaElement
    )?.value;

    const nameSurnameRegex = /^[a-zA-ZñÑ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;
    const newErrors = { name: "", surname: "", email: "", message: "" };

    if (!name) {
      newErrors.name = "El nombre es obligatorio.";
      valid = false;
    } else if (!nameSurnameRegex.test(name)) {
      newErrors.name =
        "El nombre solo debe contener letras y espacios. sin numeros o caracteres especiales";
      valid = false;
    }

    if (!surname) {
      newErrors.surname = "El apellido es obligatorio.";
      valid = false;
    } else if (!nameSurnameRegex.test(surname)) {
      newErrors.surname =
        "El apellido solo debe contener letras y espacios. sin numeros o caracteres especiales";
      valid = false;
    }

    if (!email) {
      newErrors.email = "El email es obligatorio.";
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Por favor, ingrese un email válido.";
      valid = false;
    }

    if (!message) {
      newErrors.message = "El mensaje es obligatorio.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (form.current) {
      setIsSending(true);
      try {
        await emailjs.sendForm(
          VITE_SERVICE_ID,
          VITE_TEMPLATE_ID,
          form.current,
          VITE_PUBLIC_KEY
        );

        Swal.fire({
          title: "Enviado!",
          text: "Mensaje enviado exitosamente.",
          icon: "success",
          confirmButtonText: "Accept",
        });
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Hubo un problema enviando el mensaje, por favor intenta de nuevo.",
          icon: "error",
          confirmButtonText: "Accept",
        });
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <div
      id="contact-form"
      className="flex flex-col items-center justify-center gap-[40px] font-noto"
    >
      <h1 className="text-white text-[24px]">Enviame un mensaje!</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-800 p-6 rounded-lg shadow-custom border border-gray-700 text-white flex flex-col w-[500px] gap-[20px] items-center"
      >
        <label htmlFor="name">Nombre: </label>
        <input
          className="p-1 text-black w-[300px] rounded"
          id="name"
          type="text"
          name="name"
        />
        {errors.name && (
          <p className="text-red-500 text-center">{errors.name}</p>
        )}

        <label htmlFor="surname">Apellido: </label>
        <input
          className="p-1 text-black w-[300px] rounded"
          id="surname"
          type="text"
          name="surname"
        />
        {errors.surname && (
          <p className="text-red-500 text-center">{errors.surname}</p>
        )}

        <label htmlFor="email">Email: </label>
        <input
          className="p-1 text-black w-[300px] rounded"
          id="email"
          type="email"
          name="email"
        />
        {errors.email && (
          <p className="text-red-500 text-center">{errors.email}</p>
        )}

        <label htmlFor="message">Mensaje:</label>
        <textarea
          className="p-1 text-black w-[300px] mb-[50px] rounded"
          id="message"
          name="message"
        />
        {errors.message && (
          <p className="text-red-500 text-center mb-[20px]">{errors.message}</p>
        )}

        {isSending ? (
          <img src={loading_gif} alt="loading_gif" />
        ) : (
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg border border-blue-700 hover:bg-blue-700 hover:scale-[1.05] transition-all duration-300 ease-out mb-[20px]"
          >
            Enviar
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
