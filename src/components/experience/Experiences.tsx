import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <section className=" flex flex-col w-[1200px] p-3 my-[100px] mx-auto font-noto text-white">
      <h2 className=" text-[24px] font-bold mb-[80px]">Experiencia</h2>

      <div className=" flex flex-wrap w-[1200px] gap-[50px] mx-auto justify-around ">
        <ExperienceCard
          data={[
            "https://res.cloudinary.com/deotitxt8/image/upload/v1736704299/portfolio/1630642122462_luenn0.jpg",
            "Pasante Desarrollador",
            "TINegocios",
            "ene. 2025 - actualmente",
            "Remoto",
            "Pasantia de desarrollo web en una empresa de tecnologia en Mexico",
          ]}
          ti={true}
          details="Pasantia de desarrollo web en una empresa de tecnologia en Mexico, con el objetivo de aprender y mejorar mis habilidades en el desarrollo web y de software, asi como tambien aprender sobre el trabajo en equipo y la comunicacion en un ambiente laboral, enfrentarme a problemas reales y aprender a resolverlos de manera eficiente y rapida."
        />

        <ExperienceCard
          data={[
            "https://my-cleaning-solution.com/_astro/Logo-color.BoV9uRc4_Z2KHve.webp",
            "Desarrollador Web",
            "My Cleaning Solution",
            "dic. 2023 - ene. 2024",
            "Remoto",
            "Desarrollo de un sitio web para una empresa de limpieza en Estados Unidos con el framework Astro",
          ]}
          ti={false}
          details="Sitio desarrollado para empresa de limpieza en Estados Unidos, las funciones principales fueron: Landing page, Página de información, Formulario para solicitar servicios, SDK Email.js para la comunicación entre los clientes y la empresa"
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
