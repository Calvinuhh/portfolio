<template>
  <section class="flex flex-col w-full px-4 md:w-[1200px] mx-auto my-[50px] md:my-[100px] p-3 font-noto text-white">
    <EducationSection
      :data="[
        'Servicio Nacional de Aprendizaje (SENA)',
        'sep. 2024 - actualmente',
        'Tecnico en programacion de software',
        'Carrera técnica enfocada al aprendizaje de lenguajes de programación, herramientas de desarrollo web, frontend, backend, bases de datos, metodologías ágiles. En la institucion Colombiana SENA'
      ]"
      :sena="true"
    />

    <div class="flex flex-col gap-[30px] md:gap-[70px]">
      <EducationSection
        :data="[
          'Soy Henry',
          'oct. 2023 - jun. 2024',
          'Full Stack Developer Bootcamp',
          'Bootcamp de programación enfocado en tecnologías Javascript como Node.js, React y Express.'
        ]"
        :henry="true"
      />
    </div>
  </section>
</template>