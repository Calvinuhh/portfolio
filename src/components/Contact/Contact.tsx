import style from "./index.module.css";
import SocialIcons from "./SocialIcons/SocialIcons";
import ContactMail from "./ContactMail/ContactMail";

const Contact = () => {
  return (
    <div className={style.container}>
      <ContactMail />
      <SocialIcons />
    </div>
  );
};

export default Contact;
