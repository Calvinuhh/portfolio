const AboutMe = () => {
  return (
    <div className=" flex flex-col w-[1200px] max-w-[100%] mx-auto p-[20px] gap-[20px] text-white font-noto rounded-[15px] mb-[50px] border-[1px] border-solid border-black/10 shadow-custom bg-[#2d2d508a] transition-all duration-[0.3s] ease-in-out hover:shadow-custom-hover hover:scale-[1.01]">
      <h2 className=" text-justify text-[24px] font-bold">Sobre mi</h2>
      <div>
        <p className=" text-justify text-[18px] font-[250]">
          Desarrollador Backend con experiencia y proyectos en el stack
          <strong className=" font-bold"> PERN</strong> y
          <strong className=" font-bold"> MERN</strong>,
          <strong className=" font-bold"> JWT</strong> y
          <strong className=" font-bold"> API de Mercado Pago</strong>,
          considero que puedo aportar gran valor en el desarrollo Backend,
          especialmente con
          <strong className=" font-bold"> Express.js</strong> ya que es el
          framework con el que más he practicado y desarrollado proyectos.
        </p>
        <br />
        <p className=" text-justify text-[18px] font-[250] mb-[20px]">
          Actualmente para manejar aplicaciones escalables y robustas estoy
          trabajando en proyectos como APIs en
          <strong className=" font-bold"> TypeScript</strong> para mejorar mis
          habilidades y la escalabilidad de mis aplicaciones.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
