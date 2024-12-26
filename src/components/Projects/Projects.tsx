import style from "./index.module.css";
import ProjectsInterface from "../../interfaces/projects.interface";
import { Link } from "react-router-dom";

const Projects = ({ main_title, mule, test, devtree }: ProjectsInterface) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{main_title}</h2>

      <div className={style.cards_container}>
        <div className={style.card_container}>
          <img
            className={style.card_image}
            src="https://res.cloudinary.com/deotitxt8/image/upload/v1733410254/portfolio/xk1vjwhvj7aleaunnhsf.png"
            alt="mule_image"
          />
          <h2 className={style.card_title}>{mule[0]}</h2>
          <div className={style.card_container_text}>
            <p className={style.card_text}>{mule[1]}</p>
          </div>

          <div className={style.card_container_icons}>
            <Link
              target="_blank"
              to="https://github.com/Calvinuhh/Mule-Backend"
            >
              <img
                className={style.card_icon}
                src="https://res.cloudinary.com/deotitxt8/image/upload/v1733417591/portfolio/ihtebuqsqrrgvd6fjiev.png"
                alt="repository_icon"
              />
            </Link>
          </div>
        </div>

        <div className={style.card_container}>
          <img
            className={style.card_image}
            src="https://res.cloudinary.com/deotitxt8/image/upload/v1733410254/portfolio/tcmwnjwssagqrzfckj3u.png"
            alt="mule_image"
          />
          <h2 className={style.card_title}>{test[0]}</h2>
          <div className={style.card_container_text}>
            <p className={style.card_text}>{test[1]}</p>
          </div>
          <div className={style.card_container_icons}>
            <Link
              target="_blank"
              to="https://github.com/Calvinuhh/prueba_tecnica_comics"
            >
              <img
                className={style.card_icon}
                src="https://res.cloudinary.com/deotitxt8/image/upload/v1733417591/portfolio/ihtebuqsqrrgvd6fjiev.png"
                alt="repository_icon"
              />
            </Link>
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1wTCN8Qzpzy6HKoscK4No1s-88hD2ryOw/view"
            >
              <img
                className={style.card_icon}
                src="https://res.cloudinary.com/deotitxt8/image/upload/v1733418875/portfolio/gclghq8ol3x1rmfecgdw.png"
                alt="document_icon"
              />
            </Link>
            <Link target="_blank" to="https://front-test-2pg1.onrender.com/">
              <img
                className={style.card_icon}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/768px-Globe_icon.svg.png"
                alt="webpage_icon"
              />
            </Link>
          </div>
        </div>

        <div className={style.card_container}>
          <img
            className={style.card_image}
            src="https://res.cloudinary.com/deotitxt8/image/upload/v1735191435/portfolio/wfk1esefsnykiqkcf6qm.png"
            alt="linktree_image"
          />
          <h2 className={style.card_title}>{devtree[0]}</h2>
          <div className={style.card_container_text}>
            <p className={style.card_text}>{devtree[1]}</p>
          </div>
          <div className={style.card_container_icons}>
            <Link
              target="_blank"
              to="https://github.com/Calvinuhh/devtree_server"
            >
              <img
                className={style.card_icon}
                src="https://res.cloudinary.com/deotitxt8/image/upload/v1733417591/portfolio/ihtebuqsqrrgvd6fjiev.png"
                alt="repository_icon"
              />
            </Link>

            <Link target="_blank" to="https://devtree-client.onrender.com/">
              <img
                className={style.card_icon}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/768px-Globe_icon.svg.png"
                alt="webpage_icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
