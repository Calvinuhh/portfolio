import style from "./contactMail.module.css";

const ContactMail = () => {
  const clickMail = () => {
    console.log("Hello World!");
  };

  return (
    <div className={style.container}>
      <button className={style.btn} onClick={clickMail}>
        <img
          className={style.icon}
          src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/lugn7xbqa5cbvocjfxic.png"
          alt="main_icon"
        />
        calvin.uhh@gmail.com
      </button>
    </div>
  );
};

export default ContactMail;
