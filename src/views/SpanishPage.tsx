import "./index.css";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Technologies from "../components/Technologies/Technologies";
import Section from "../components/Section/Section";
import Projects from "../components/Projects/Projects";

const SpanishPage = () => {
  useEffect(() => {
    document.title = "Portafolio Calvin Howard | Español";
  }, []);

  return (
    <>
      <Header
        btn_text="EN"
        seniority="Desarrollador Backend || Desarrollador Full Stack"
        route="/"
      />
      <AboutMe
        title="Sobre mi"
        text1="Desarrollador Backend con experiencia y proyectos en el stack PERN y MERN, JWT y API de Mercado Pago, considero que puedo aportar gran valor en el desarrollo Backend, especialmente con Express.js ya que es el framework con el que más he practicado y desarrollado proyectos."
        text2="Actualmente para manejar aplicaciones escalables y robustas estoy trabajando en proyectos como APIs en TypeScript para mejorar mis habilidades y la escalabilidad de mis aplicaciones."
        strong={["PERN", "MERN", "JWT", "API de Mercado Pago"]}
      />
      <Technologies
        title="Tecnologias"
        text="Tomado de las estadisticas de GitHub"
      />

      <Section
        title="Experiencia"
        corp="My Cleaning Solutions"
        btn_text="Detalles"
        date_range="DIC. 2023 - ENE. 2024"
        position="Desarrollador Web (freelance)"
        description="Desarrollo de un sitio web para una empresa de limpieza en Estados Unidos con el framework Astro"
        modal_title="Tecnologias principales:"
        mcs={true}
        text1="Este sitio fue desarrollado para una empresa de limpieza en Estados Unidos, las funciones principales fueron:"
        ul_list={[
          "Landing page",
          "Página de información",
          "Formulario para solicitar servicios",
          "SDK Email.js para la comunicación entre los clientes y la empresa",
        ]}
        text2="Fue un reto probar Astro, ya que es un framework que no había probado antes, es muy versátil y tiene mucho potencial!"
        text3="Utilicé Render, como servicio gratuito, que me sirvió para entender a un nivel básico cuál es la dinámica para desplegar una página web estática."
        text4="Puedes ver la página haciendo clic en el enlace de abajo."
      />

      <Projects
        main_title="Proyectos"
        mule={[
          "MULE",
          "Proyecto académico final del bootcamp 'Soy Henry' implementando todas las tecnologías aprendidas. Aplicación web Full Stack, la aplicación trata sobre una empresa de paquetería llamada Mule una empresa que ofrece 4 servicios de entrega de paquetes en 5 provincias de Argentina.",
        ]}
        test={[
          "Prueba técnica Comics",
          "Prueba técnica realizada, Desarrollo de una aplicación web Full Stack, llamando a la API Comic Vines, guardando los comics en la base de datos, vista de lista y cuadrícula, en el repositorio se encuentra toda la documentación de como iniciar el proyecto en local, tanto con MongoDB como con PostgreSQL.",
        ]}
      />

      <Section
        title="Educacion"
        corp="Soy Henry"
        btn_text="Detalles"
        date_range="OCT. 2023 - JUN. 2024"
        position="Full Stack Developer Bootcamp"
        description="Bootcamp de programación enfocado en tecnologías javascript como Node.js, React y Express."
        modal_title="Tecnologias principales:"
        henry={true}
        text1="En este bootcamp realizamos proyectos tanto en cliente como en servidor, además de conectarnos a una base de datos relacional, exploramos diversas tecnologías y librerías para el desarrollo web. Finalizamos con un proyecto grupal donde desarrollamos una aplicación Full Stack con todo lo aprendido en el curso, y además implementamos otras tecnologías como JWT, Auth0 y Mercado Pago."
        text2="Al finalizar el curso se entregó un certificado del bootcamp, indicando la cantidad de horas realizadas y las principales tecnologías."
        text3="También puedes consultar mi perfil en Henry Talent, una bolsa de trabajo para egresados de Soy Henry que buscan trabajo."
      />

      <Section
        corp="Servicio Nacional de Aprendizaje (SENA)"
        btn_text="Detalles"
        date_range="SEP. 2024 - ACTUALMENTE"
        position="Técnico en Programación de Software"
        description="Carrera técnica enfocada al aprendizaje de lenguajes de programación, herramientas de desarrollo web, frontend, backend, bases de datos, metodologías ágiles"
        modal_title="Tecnologías principales:"
        sena={true}
        text1="Actualmente estoy cursando un Programa Técnico en Programación de Software en el SENA, Colombia, enfocándome en conceptos básicos de programación, lógica computacional y principios básicos de la informática. Adquirí experiencia práctica con Java para el desarrollo de software, explorando la gestión y el diseño de bases de datos y comprendiendo metodologías ágiles como Scrum. Este programa enfatiza la resolución práctica de problemas y te prepara para los desafíos del desarrollo de software del mundo real."
      />

      <Section
        title="Licencias y certificaciones"
        btn_text="Certificado"
        corp="Udemy"
        position="Node.js - Desarrollo Web, MVC y APIs REST"
        description="Curso enfocado en Node.js, MVC, APIs REST, ORMs"
        cert1={true}
      />

      <Section
        btn_text="Certificado"
        corp="Udemy"
        position="Máster en javascript, aprende Node, jquery, Angular, TypeScript"
        description="Curso enfocado en aprender los fundamentos de JavaScript, lógica de programación y tecnologías y frameworks derivados de JavaScript y TypeScript."
        cert2={true}
      />

      <Section
        btn_text="Certificado"
        corp="Udemy"
        position="Curso completo de C# para ser desarrollador .NET"
        description="Curso enfocado en fundamentos de computación y programación, lógica de programación, programación orientada a objetos con C#"
        cert3={true}
      />

      <Footer />
    </>
  );
};

export default SpanishPage;
