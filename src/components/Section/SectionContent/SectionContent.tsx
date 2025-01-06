import style from "./index.module.css";
import DateRage from "../../DateRange/DateRange";
import ModalBtn from "../../ModalBtn/ModalBtn";
import SectionInterface from "../../../interfaces/section.interface";

const SectionContent = ({
  corp,
  btn_text,
  date_range,
  description,
  position,
  setIsModalOpen,
  cert1,
  cert2,
  cert3,
  cert4,
}: // cert5,
Omit<SectionInterface, "isModalOpen">) => {
  return (
    <div className={style.container}>
      <div className={style.title_date_container}>
        <h2 className={style.title}>{corp}</h2>

        {date_range ? <DateRage date_range={date_range} /> : null}
      </div>

      <div className={style.description_container}>
        <h3>{position}</h3>

        {cert1 ? (
          <div className={style.images_container}>
            <img
              className={style.image}
              src="https://miro.medium.com/v2/resize:fit:440/1*J3G3akaMpUOLegw0p0qthA.png"
              alt="apirest_logo"
            />
            <img
              className={style.image}
              src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404613/portfolio/sargvyo92oc94jeu7b7a.png"
              alt="mvc_logo"
            />
            <img
              className={style.image}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png"
              alt="node_logo"
            />
            <img
              className={style.image}
              src="https://keenethics.com/wp-content/uploads/2021/10/Express.js.svg"
              alt="express_logo"
            />
            <img
              className={style.image}
              src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp"
              alt="mongodb_logo"
            />
            <img
              className={style.image}
              src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99177233598415E22A"
              alt="mongoose_logo"
            />
            <img
              className={style.image}
              src="https://ashnik.com/wp-content/uploads/2021/02/Postgresql-w.png"
              alt="postgresql_logo"
            />
            <img
              className={style.image}
              src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png"
              alt="mysql_logo"
            />
            <img
              className={style.image}
              src="https://cdn.iconscout.com/icon/free/png-256/free-sequelize-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175091.png"
              alt="sequelize_logo"
            />
            <img
              className={style.image}
              src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/so51nrmeyaxtwby5cewo.png"
              alt="jwt_logo"
            />
            <img
              className={style.image}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"
              alt="tailwind_logo"
            />
          </div>
        ) : null}

        {cert2 ? (
          <div className={style.images_container}>
            <img
              className={style.image}
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/javascript_horizontal_logo_icon_170553.png"
              alt="js_logo"
            />
            <img
              className={style.image}
              src="https://iconape.com/wp-content/files/rl/371585/svg/371585.svg"
              alt="ts_logo"
            />
            <img
              className={style.image}
              src="https://blogs.godigitalchat.com/wp-content/uploads/2023/07/html-l.png"
              alt="html5_logo"
            />
            <img
              className={style.image}
              src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/fudfdl1ve7hcq65ylprh.png"
              alt="css3_logo"
            />
            <img
              className={style.image}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/JQuery_logo_text.svg/1280px-JQuery_logo_text.svg.png"
              alt="jquery_logo"
            />
            <img
              className={style.image}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png"
              alt="node_logo"
            />
            <img
              className={style.image}
              src="https://www.xpand-it.com/wp-content/uploads/2018/10/Angular-Logo.png"
              alt="angular_logo"
            />
            <img
              className={style.image}
              src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp"
              alt="mongodb_logo"
            />
            <img
              className={style.image}
              src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99177233598415E22A"
              alt="mongoose_logo"
            />
          </div>
        ) : null}

        {cert3 ? (
          <div className={style.images_container}>
            <img
              className={style.image}
              src="https://miro.medium.com/v2/resize:fit:440/1*J3G3akaMpUOLegw0p0qthA.png"
              alt="apirest_logo"
            />

            <img
              className={style.image}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png"
              alt="node_logo"
            />
            <img
              className={style.image}
              src="https://keenethics.com/wp-content/uploads/2021/10/Express.js.svg"
              alt="express_logo"
            />
            <img
              className={style.image}
              src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp"
              alt="mongodb_logo"
            />
            <img
              className={style.image}
              src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99177233598415E22A"
              alt="mongoose_logo"
            />
            <img
              className={style.image}
              src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/so51nrmeyaxtwby5cewo.png"
              alt="jwt_logo"
            />
          </div>
        ) : null}

        {cert4 ? (
          <div className={style.images_container}>
            <img
              className={style.image}
              src="https://miro.medium.com/v2/resize:fit:1200/1*w0u2TZpEp3WfKMrlL5jTSw.png"
              alt="c#_logo"
            />
            <img
              className={style.image}
              src="https://logos-world.net/wp-content/uploads/2022/01/NET-Framework-Symbol.png"
              alt=".net_logo"
            />
          </div>
        ) : null}

        <p className={style.text}>{description}</p>
        <ModalBtn btn_text={btn_text} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default SectionContent;
