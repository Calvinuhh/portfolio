import "./index.css";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Technologies from "../components/Technologies/Technologies";
import Section from "../components/Section/Section";
import Projects from "../components/Projects/Projects";

const EnglishPage = () => {
  useEffect(() => {
    document.title = "Portfolio Calvin Howard";
  }, []);

  return (
    <>
      <Header btn_text="ES" seniority="Backend Junior Developer" route="/es" />
      <AboutMe
        title="About me"
        text1="Junior Backend Developer, experience and projects in PERN and MERN Stack, JWT and Mercado Pago API , I am constantly updating myself about new trends and technologies in web development, constantly deepening the technologies that I already master, I consider that I can contribute great value in the Backend development, especially with Express.js since it is the framework with which I have practiced and developed projects the most."
        text2="I realized that the market increasingly demands more TypeScript, so I am working on projects like APIs in TypeScript to improve my skills and scalability of my applications."
        strong={["PERN", "MERN", "JWT", "Mercado Pago API"]}
      />
      <Technologies title="Technologies" />

      <Section
        title="Experience"
        corp="My Cleaning Solutions"
        btn_text="Details"
        date_range="dec. 2023 - jan. 2024"
        position="Web Developer (freelance work)"
        description="Development of a website for a cleaning company in United States with the framework Astro"
        modal_title="Main technologies:"
        mcs={true}
        text1="This site was developed for a cleaning company in the United States, the main functions were:"
        ul_list={[
          "Landing page",
          "Information page",
          "Form for requesting services",
          "Email.js SDK for communication between customers and the company",
        ]}
        text2="it was a challenge to try Astro, since it is a framework that I had not tried before, it is very versatile and has a lot of potential!"
        text3="I used Render , as free service, which served to understand at a basic level what the dynamics are for deploying a static web page."
        text4="You can check out the page by clicking the link below."
      />
      <Section
        title="Education"
        corp="Soy Henry"
        btn_text="Details"
        date_range="oct. 2023 - jun. 2024"
        position="Full Stack Developer Bootcamp"
        description="Programming bootcamp focused on javascript technologies such as Node.js, React and Express."
        modal_title="Main technologies:"
        henry={true}
        text1="In this bootcamp we carried out projects both on the client and on the server, in addition to connecting to a relational database, we explored various technologies and libraries for web development. We ended with a group project where we developed a Full Stack application with everything learned in the course, and in addition to that we implemented other technologies such as JWT, Auth0 and Mercado Pago."
        text2="At the end of the course, a certificate of the bootcamp was given, indicating the number of hours taken and the main technologies."
        text3="You can also check out my profile on Henry Talent, a job board for Soy Henry graduates looking for work."
      />

      <Section
        corp="National Learning Service (SENA)"
        btn_text="Details"
        date_range="sep. 2024 - currently"
        position="Software Programming Technician"
        description="Technical career focused on learning programming languages, web development tools, frontend, backend, databases, agile methodologies"
        modal_title="Main technologies:"
        sena={true}
        text1="Currently doing a Technical Program in Software Programming at SENA, Colombia, focusing on foundational programming concepts, computational logic, and core computer science principles. Gaining hands-on experience with Java for software development, exploring database management and design, and understanding agile methodologies such as Scrum. This program emphasizes practical problem-solving and prepares for real-world software development challenges."
      />

      <Projects
        main_title="Projects"
        mule={[
          "MULE",
          "Final academic project of the bootcamp 'Soy Henry' implementing all the technologies learned. Full Stack web application, the application is about a parcel company called Mule a company that offers 4 package delivery services in 5 provinces of Argentina.",
        ]}
        test={[
          "Technical Test Comics",
          "Technical test carried out, Development of a Full Stack web application, calling the Comic Vines API, saving comics in the database, list and grid view, in the repository there is all the documentation on how to start the project locally, both with MongoDB and with PostgreSQL.",
        ]}
      />

      <Section
        title="Licenses and Certifications"
        btn_text="Certificate"
        corp="Udemy"
        position="Node.js - Web Development, MVC y REST APIs"
        description="Course focused on Node.js, MVC, REST APIs, ORMs"
        cert1={true}
      />

      <Section
        btn_text="Certificate"
        corp="Udemy"
        position="Master in javascript, learn Node, jquery, Angular, TypeScript"
        description="Course focused on learning the basics of JavaScript, programming logic, and technologies and frameworks derived from JavaScript and TypeScript."
        cert2={true}
      />

      <Section
        btn_text="Certificate"
        corp="Udemy"
        position="C# Complete Course to be a .NET developer"
        description="Course focused on computing and programming fundamentals, programming logic, object-oriented programming with C#"
        cert3={true}
      />

      <Footer />
    </>
  );
};

export default EnglishPage;
