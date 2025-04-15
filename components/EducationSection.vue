<template>
  <div class="education-card">
    <div class="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 mb-[20px]">
      <h2 class="text-[20px] md:text-[24px] font-light">{{ data[0] }}</h2>
      <div class="flex w-full md:w-[300px] justify-center items-center bg-[#8b000050] rounded-[7px] py-2 md:py-0">
        <h2 class="text-[18px] md:text-[24px] font-extralight">{{ data[1] }}</h2>
      </div>
    </div>

    <div class="education-content">
      <h3 class="text-[16px] md:text-[18px] font-bold">{{ data[2] }}</h3>
      <p class="font-thin mb-[20px]">{{ data[3] }}</p>
      <div class="flex justify-center md:justify-start"> 
        <button
          @click="handleButtonClick"
          class="flex items-center justify-center text-[16px] md:text-[18px] font-[700] py-[10px] px-[20px] w-[140px] h-[45px] bg-[#8b0000cc] rounded-[8px] border-[2px] border-solid border-white/20 transition-all duration-[0.3s] ease-out hover:scale-[1.1] shadow-custom hover:shadow-custom-hover hover:bg-[#aa0000e6]"
        >
          Detalles
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swal from 'sweetalert2'

interface EducationSectionProps {
  data: string[]
  henry?: boolean
  sena?: boolean
}

const props = defineProps<EducationSectionProps>()

const handleButtonClick = () => {
  if (props.henry) {
    Swal.fire({
      html: `
        <div style="font-family: 'Noto Sans', sans-serif;">
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
        </div>
      `,
      confirmButtonText: 'Cerrar',
    })
  } else if (props.sena) {
    Swal.fire({
      html: `
        <div style="font-family: 'Noto Sans', sans-serif;">
          <p>
            Actualmente estoy cursando un Programa Técnico en Programación de
            Software en el SENA, Colombia, enfocándome en conceptos básicos de
            programación, lógica computacional y principios básicos de la
            informática.
          </p>
          <br />
          <p>
            Adquiriendo conceptos fundamentales para el desarrollo de
            software, explorando la gestión y el diseño de bases de datos y
            comprendiendo metodologías ágiles como Scrum. Este programa
            enfatiza la resolución práctica de problemas y te prepara para los
            desafíos del desarrollo de software del mundo real.
          </p>
        </div>
      `,
      confirmButtonText: 'Cerrar',
    })
  }
}
</script>

<style scoped>
.education-card {
  padding: 20px;
  background-color: #2d2d508a;
  border-radius: 15px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;
}

.education-card h2,
.education-card h3 {
  text-align: left;
}

.education-card p {
  text-align: justify;
  margin-bottom: 20px;
}

.education-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
}

@media (max-width: 768px) {
  .education-card {
    padding: 15px;
    margin-bottom: 30px;
  }

  .education-card h2 {
    font-size: 20px;
  }

  .education-card h3 {
    font-size: 16px;
  }

  .education-card p {
    padding: 0;
    font-size: 14px;
  }

  .education-card button {
    width: 120px;
    height: 40px;
    font-size: 16px;
  }
}
</style>