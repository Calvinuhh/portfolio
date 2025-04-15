<template>
  <main class="flex flex-col w-full mx-auto font-noto my-[100px] gap-[70px]">

    <div class="flex flex-wrap justify-center gap-[70px] sm:gap-[60px] md:gap-[50px]">
      <ProjectCard
        :repo="true"
        :web="true"
        :video="true"
        :data="[
          'https://res.cloudinary.com/deotitxt8/image/upload/v1735191435/portfolio/wfk1esefsnykiqkcf6qm.png',
          'DevTree',
          'Proyecto de practica desarrollando un clon de LinkTree, login y registro, por parte del cliente y del servidor, autorizacion y autenticacion con json web token validaciones por medio de formulario y servidor entre otras cosas',
        ]"
        repo_link="https://github.com/Calvinuhh/devtree_readme"
        web_link="https://devtree-client.onrender.com/"
        video_link="https://youtu.be/ZCXx1lTa6u0"
      />

      <ProjectCard
        :repo="true"
        :web="true"
        :video="true"
        :data="[
          'https://res.cloudinary.com/deotitxt8/image/upload/v1736141134/portfolio/Screenshot_2025-01-06_001816_hnyr7q.png',
          'REST API',
          'CRM de clientes, productos y ordenes, proyecto enfocado en la aplicacion de la arquitectura REST para un servidor de Express con MongoDB y Mongoose, validaciones de nuevos recursos, confirmacion de usuarios nuevos por medio de email, autenticacion de usuarios por medio de JWT, rutas protegidas, implementando una vista simple y llamativa para la facil interaccion con el usuario.',
        ]"
        repo_link="https://github.com/Calvinuhh/REST_API_readme"
        web_link="https://rest-api-client.onrender.com/register"
        video_link="https://youtu.be/oWfzXXVQ74g"
      />

      <ProjectCard
        :repo="true"
        :data="[
          'https://res.cloudinary.com/deotitxt8/image/upload/v1733410254/portfolio/xk1vjwhvj7aleaunnhsf.png',
          'MULE',
          'Proyecto académico final del bootcamp Soy Henry implementando todas las tecnologías aprendidas. Aplicación web Full Stack, la aplicación trata sobre una empresa de paquetería llamada Mule una empresa que ofrece 4 servicios de entrega de paquetes en 5 provincias de Argentina.'
        ]"
        repo_link="https://github.com/Calvinuhh/Mule-Backend"
      />

      <ProjectCard
        :repo="true"
        :doc="true"
        :data="[
          'https://res.cloudinary.com/deotitxt8/image/upload/v1733410254/portfolio/tcmwnjwssagqrzfckj3u.png',
          'Prueba tecnica Comics',
          'Prueba técnica realizada, Desarrollo de una aplicación web Full Stack, llamando a la API Comic Vines, guardando los comics en la base de datos, vista de lista y cuadrícula, en el repositorio se encuentra toda la documentación de como iniciar el proyecto en local, tanto con MongoDB como con PostgreSQL.',
        ]"
        repo_link="https://github.com/Calvinuhh/prueba_tecnica_comics"
        doc_link="https://drive.google.com/file/d/1wTCN8Qzpzy6HKoscK4No1s-88hD2ryOw/view"
      />
    </div>
  </main>
</template>
