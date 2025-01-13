import EducationSection from "./EducationSection";

const Education = () => {
  return (
    <section className=" flex flex-col w-[1200px] mx-auto my-[100px] p-3 font-noto text-white">
      <h2 className=" text-[24px] font-bold mb-[50px]">Educacion</h2>

      <div className=" flex flex-col gap-[70px]">
        <EducationSection
          data={[
            "Soy Henry",
            "oct. 2023 - jun. 2024",
            "Full Stack Developer Bootcamp",
            "Bootcamp de programación enfocado en tecnologías Javascript como Node.js, React y Express.",
          ]}
          henry={true}
        />

        <EducationSection
          data={[
            "Servicio Nacional de Aprendizaje (SENA)",
            "sep. 2024 - actualmente",
            "Tecnico en programacion de software",
            "Carrera técnica enfocada al aprendizaje de lenguajes de programación, herramientas de desarrollo web, frontend, backend, bases de datos, metodologías ágiles",
          ]}
          sena={true}
        />
      </div>
    </section>
  );
};

export default Education;
