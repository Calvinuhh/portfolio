<template>
  <section class="flex flex-col w-[1200px] p-3 my-[100px] mx-auto font-noto text-white">
    <h2 class="text-2xl font-bold mb-[80px]">Experiencia</h2>

    <div class="flex flex-wrap w-[1200px] gap-[50px] mx-auto justify-around">

      <ExperienceCard 
        :data="[
          'https://holaamigo.ai/wp-content/uploads/2024/03/Logo_Hola_Amigo.png',
          'Desarrollador Junior',
          'HolaAmigo',
          'abr. 2025 - Actualmente',
          'Remoto',
          'Automatizaciones empresariales con IA'
        ]"
        details="Actualmente desarrollo automatizaciones empresariales implementando n8n e integraciones con inteligencia artificial. Mis responsabilidades incluyen diseñar flujos de trabajo automatizados, conectar APIs de diferentes servicios, e implementar soluciones de IA para optimizar procesos internos. Trabajo en un equipo remoto donde desarrollamos herramientas que mejoran la productividad de las empresas mediante tecnología innovadora."
        :holamigo="true"
      />
    
      <ExperienceCard
        :data="[
          'https://res.cloudinary.com/deotitxt8/image/upload/v1736704299/portfolio/1630642122462_luenn0.jpg',
          'Pasante Desarrollador',
          'TiNegocios',
          'ene. 2025 - abr. 2025',
          'Remoto',
          'Pasantia de desarrollo web en una empresa de tecnologia en Mexico',
        ]"
        :ti="true"
        details="Durante mi pasantía en TiNegocios, trabajé realizando mantenimiento y nuevas funcionalidades en proyectos con el framework CodeIgniter. Realizando migraciones de codigo legacy a codigo mas actualizado. Mejorando y diseñando las bases de datos para asi optimizar las consultas desde el servidor. Participé en el ciclo completo de desarrollo de nuevos proyectos. Esta experiencia me permitió mejorar mis habilidades en trabajo en equipo y resolución de problemas en un entorno profesional real."
      />

      <ExperienceCard
        :data="[
          'https://my-cleaning-solution.com/_astro/Logo-color.BoV9uRc4_Z2KHve.webp',
          'Desarrollador Web',
          'My Cleaning Solution',
          'dic. 2023 - ene. 2024',
          'Remoto',
          'Desarrollo de un sitio web para una empresa de limpieza en Estados Unidos con el framework Astro',
        ]"
        details="Sitio desarrollado para empresa de limpieza en Estados Unidos, las funciones principales fueron: Landing page, Página de información, Formulario para solicitar servicios, SDK Email.js para la comunicación entre los clientes y la empresa"
      />
      
    </div>
  </section>
</template>

