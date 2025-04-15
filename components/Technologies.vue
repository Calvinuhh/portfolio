<template>
  <section class="w-full max-w-[1200px] mx-auto px-4 my-[100px] flex flex-col items-center gap-10">

    <div class="flex flex-wrap justify-center gap-6 w-full max-w-[1000px]">
      <img
        v-for="(tech, index) in techLogos"
        :key="index"
        :src="tech.src"
        :alt="tech.alt"
        :class="tech.class"
      />
    </div>

    <div class="flex flex-col items-center gap-2 mt-10">
      <img
        class="w-[300px]"
        src="https://github-readme-stats.vercel.app/api/top-langs?username=calvinuhh&show_icons=true&locale=en&layout=compact"
        alt="github_stats"
      />
      <p class="text-white font-noto text-sm">Tomado de las estadísticas de GitHub</p>
    </div>
  </section>
</template>

<script setup>
const techLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    alt: "typescript_logo",
    class: "w-[100px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://juststickers.in/wp-content/uploads/2019/07/nodejs.png",
    alt: "nodejs_logo",
    class: "w-[100px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://keenethics.com/wp-content/uploads/2021/10/Express.js.svg",
    alt: "express_logo",
    class: "w-[100px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/r0vxhlnzhb4zxaovmpsm.png",
    alt: "github_logo",
    class: "w-[100px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
    alt: "git_logo",
    class: "w-[100px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp",
    alt: "mongodb_logo",
    class: "w-[100px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99177233598415E22A",
    alt: "mongoose_logo",
    class: "w-[150px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png",
    alt: "mysql_logo",
    class: "w-[120px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://res.cloudinary.com/deotitxt8/image/upload/v1738689627/portfolio/vuo6yvkonmr9hlmdmwvy.png",
    alt: "postgresql_logo",
    class: "w-[100px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://res.cloudinary.com/deotitxt8/image/upload/v1738689779/portfolio/pwdivzo10lo32nezzygw.png",
    alt: "sequelize_logo",
    class: "w-[130px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/so51nrmeyaxtwby5cewo.png",
    alt: "jwt_logo",
    class: "w-[180px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175110.png?f=webp&w=256",
    alt: "react_logo",
    class: "w-[100px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png",
    alt: "tailwind_logo",
    class: "w-[150px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://nuxt.com/assets/design-kit/icon-green.svg",
    alt: "nuxt_logo",
    class: "w-[150px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/N8n-logo-new.svg/2560px-N8n-logo-new.svg.png",
    alt: "n8n_logo",
    class: "w-[180px] h-[100px] transition-transform duration-300 ease-out hover:scale-110"
  }
];
</script>
