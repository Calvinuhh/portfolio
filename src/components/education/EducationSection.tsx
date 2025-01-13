import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

interface EducationSectionProps {
  data: string[];
  henry?: boolean;
  sena?: boolean;
}

const MySwal = withReactContent(Swal);

const EducationSection = ({ data, henry, sena }: EducationSectionProps) => {
  const handleButtonClick = () => {
    if (henry) {
      MySwal.fire({
        html: (
          <div className="font-noto">
            <p>
              En este bootcamp realizamos proyectos tanto en cliente como en
              servidor, además de conectarnos a una base de datos relacional,
              exploramos diversas tecnologías y librerías para el desarrollo
              web. Finalizamos con un proyecto grupal donde desarrollamos una
              aplicación Full Stack con todo lo aprendido en el curso, y además
              implementamos otras tecnologías como JWT, Auth0 y Mercado Pago.
            </p>
            <br />
            <p>
              Al finalizar el curso se entregó un certificado del bootcamp,
              indicando la cantidad de horas realizadas y las principales
              tecnologías.
            </p>
            <br />
            <a
              target="_blank"
              className=" p-1 bg-[#8b0000cc] text-white rounded-[5px] hover:bg-[#aa0000e6]"
              href="https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=90919c4249f9deb146a1fe52bbcd7e4f9f95168fbe985954a2f1b5689133f933"
            >
              Ver Certificado
            </a>
          </div>
        ),
        confirmButtonText: "Cerrar",
      });
    } else if (sena) {
      MySwal.fire({
        html: (
          <div className=" font-noto">
            <p>
              Actualmente estoy cursando un Programa Técnico en Programación de
              Software en el SENA, Colombia, enfocándome en conceptos básicos de
              programación, lógica computacional y principios básicos de la
              informática.
            </p>
            <br />
            <p>
              Adquiriendo experiencia práctica con Java para el desarrollo de
              software, explorando la gestión y el diseño de bases de datos y
              comprendiendo metodologías ágiles como Scrum. Este programa
              enfatiza la resolución práctica de problemas y te prepara para los
              desafíos del desarrollo de software del mundo real.
            </p>
          </div>
        ),
        confirmButtonText: "Cerrar",
      });
    }
  };

  return (
    <div className=" p-[20px] bg-[#2d2d508a] rounded-[15px]">
      <div className=" flex justify-between mb-[20px]">
        <h2 className=" text-[24px] font-light">{data[0]}</h2>
        <div className="flex w-[300px] justify-center items-center bg-[#8b000050] rounded-[7px]">
          <h2 className=" text-[24px] font-extralight">{data[1]}</h2>
        </div>
      </div>

      <div className=" mb-[20px]">
        <h3 className=" text-[18px] font-bold">{data[2]}</h3>
        <p className=" font-thin mb-[20px]">{data[3]}</p>
        <button
          onClick={handleButtonClick}
          className=" flex items-center justify-center text-[18px] font-[700] py-[10px] px-[20px] w-[140px] h-[45px]  bg-[#8b0000cc] rounded-[8px] border-[2px] border-solid border-white/20 transition-all duration-[0.3s] ease-out hover:scale-[1.1] shadow-custom hover:shadow-custom-hover hover:bg-[#aa0000e6]"
        >
          Detalles
        </button>
      </div>
    </div>
  );
};

export default EducationSection;
