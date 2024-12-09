import style from "./index.module.css";
import SectionInterface from "../../interfaces/section.interface";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  modal_title,
  mcs,
  henry,
  sena,
  text1,
  text2,
  text3,
  text4,
  ul_list,
  cert1,
  cert2,
  cert3,
}: Pick<
  SectionInterface,
  | "isModalOpen"
  | "setIsModalOpen"
  | "modal_title"
  | "mcs"
  | "henry"
  | "sena"
  | "text1"
  | "text2"
  | "text3"
  | "text4"
  | "ul_list"
  | "cert1"
  | "cert2"
  | "cert3"
>) => {
  const [isVisible, setIsVisible] = useState(isModalOpen);

  useEffect(() => {
    if (isModalOpen) setIsVisible(true);
  }, [isModalOpen]);

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsVisible(false), 1000);
  };

  if (!isVisible) return null;
  return (
    <div>
      {mcs ? (
        <div
          className={`${style.container} ${
            isModalOpen ? style.open : style.close
          }`}
        >
          <div className={style.sub_container}>
            <div className={style.techs_container}>
              <div className={style.title_container}>
                <h2>{modal_title}</h2>
                <div className={style.logos_container}>
                  <img
                    className={`${style.logos} ${style.astro}`}
                    src="https://astro.build/assets/press/astro-logo-light-gradient.png"
                    alt="astro_logo"
                  />
                </div>
              </div>
              <img
                onClick={handleClose}
                className={style.exit}
                src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404613/portfolio/hwqbfqymekqgr1o8kx7m.png"
                alt="exit_logo"
              />
            </div>

            <div className={style.content_container}>
              {text1}
              <br />
              <br />
              <ul>
                {ul_list?.map((elem: string, key: number) => {
                  return <li key={key + 1}>{elem}</li>;
                })}
              </ul>
              <br />
              <br />
              {text2}
              <br />
              <br />
              {text3}
              <br />
              <br />
              {text4}
              <br />
              <br />
              <Link to="https://my-cleaning-solution.com/" target="_blank">
                <img
                  className={style.link_logo}
                  src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/f3bqvxx2dkisqowvdiz2.png"
                  alt="link_logo"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {henry ? (
        <div
          className={`${style.container_henry} ${
            isModalOpen ? style.open : style.close
          }`}
        >
          <div className={style.sub_container}>
            <div className={style.techs_container}>
              <div className={style.title_container}>
                <h2>{modal_title}</h2>
                <div className={style.logos_container}>
                  <img
                    className={style.logos}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png"
                    alt="node_logo"
                  />
                  <img
                    className={style.logos}
                    src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
                    alt="react_logo"
                  />
                  <img
                    className={style.logos}
                    src="https://keenethics.com/wp-content/uploads/2021/10/Express.js.svg"
                    alt="express_logo"
                  />
                  <img
                    className={style.logos}
                    src="https://ashnik.com/wp-content/uploads/2021/02/Postgresql-w.png"
                    alt="postgresql_logo"
                  />
                  <img
                    className={style.logos}
                    src="https://cdn.iconscout.com/icon/free/png-256/free-sequelize-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175091.png"
                    alt="sequelize_logo"
                  />
                  <img
                    className={style.logos}
                    src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/so51nrmeyaxtwby5cewo.png"
                    alt="jwt_logo"
                  />
                </div>
              </div>
              <img
                onClick={handleClose}
                className={style.exit}
                src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404613/portfolio/hwqbfqymekqgr1o8kx7m.png"
                alt="exit_logo"
              />
            </div>

            <div className={style.content_container}>
              {text1}
              <br />
              <br />
              <br />
              {text2}
              <br />
              <br />
              <div className={style.henry_certificate_container}>
                <iframe
                  className={style.henry_pdf}
                  src="https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=90919c4249f9deb146a1fe52bbcd7e4f9f95168fbe985954a2f1b5689133f933"
                ></iframe>

                <div className={style.link_ht_container}>
                  {text3}
                  <Link
                    to="https://www.talent.soyhenry.com/candidate/19267"
                    target="_blank"
                  >
                    <img
                      className={style.link_logo}
                      src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/f3bqvxx2dkisqowvdiz2.png"
                      alt="link_logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {sena ? (
        <div
          className={`${style.container} ${
            isModalOpen ? style.open : style.close
          }`}
        >
          <div className={style.sub_container}>
            <div className={style.techs_container}>
              <div className={style.title_container}>
                <h2>{modal_title}</h2>
                <div className={style.logos_container}>
                  <img
                    className={style.logos}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/2560px-Sql_data_base_with_logo.svg.png"
                    alt="sql_logo"
                  />
                  <img
                    className={style.logos}
                    src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png"
                    alt="mysql_logo"
                  />
                  <img
                    className={style.logos}
                    src="https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp&w=256"
                    alt="java_logo"
                  />
                  <img
                    className={style.logos}
                    src="https://programaenlinea.net/wp-content/uploads/2016/06/scrum-arquitectura.png"
                    alt="scrum_logo"
                  />
                </div>
              </div>
              <img
                onClick={handleClose}
                className={style.exit}
                src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404613/portfolio/hwqbfqymekqgr1o8kx7m.png"
                alt="exit_logo"
              />
            </div>

            <div className={style.text_contaier}>{text1}</div>
          </div>
        </div>
      ) : null}

      {cert1 ? (
        <div
          className={`${style.container_certificate} ${
            isModalOpen ? style.open : style.close
          }`}
        >
          <div className={style.certificate_container}>
            <img
              onClick={handleClose}
              className={`${style.exit} ${style.exit_certificate}`}
              src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404613/portfolio/hwqbfqymekqgr1o8kx7m.png"
              alt="exit_logo"
            />
          </div>
          <div className={style.pdf_container}>
            <iframe
              className={style.pdf}
              src="https://udemy-certificate.s3.amazonaws.com/pdf/UC-624ddf45-25c2-43a5-9c70-6d9890a23c41.pdf"
            ></iframe>
          </div>
        </div>
      ) : null}

      {cert2 ? (
        <div
          className={`${style.container_certificate} ${
            isModalOpen ? style.open : style.close
          }`}
        >
          <div className={style.certificate_container}>
            <img
              onClick={handleClose}
              className={`${style.exit} ${style.exit_certificate}`}
              src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404613/portfolio/hwqbfqymekqgr1o8kx7m.png"
              alt="exit_logo"
            />
          </div>
          <div className={style.pdf_container}>
            <iframe
              className={style.pdf}
              src="https://udemy-certificate.s3.amazonaws.com/pdf/UC-03c1dfc1-71b0-49c1-9977-ca34849ea213.pdf"
            ></iframe>
          </div>
        </div>
      ) : null}

      {cert3 ? (
        <div
          className={`${style.container_certificate} ${
            isModalOpen ? style.open : style.close
          }`}
        >
          <div className={style.certificate_container}>
            <img
              onClick={handleClose}
              className={`${style.exit} ${style.exit_certificate}`}
              src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404613/portfolio/hwqbfqymekqgr1o8kx7m.png"
              alt="exit_logo"
            />
          </div>
          <div className={style.pdf_container}>
            <iframe
              className={style.pdf}
              src="https://udemy-certificate.s3.amazonaws.com/pdf/UC-9e2458c2-cf77-485f-9e56-24727e5809ec.pdf"
            ></iframe>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
