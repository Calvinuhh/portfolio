<template>
  <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
    <div class="flex flex-col items-center lg:flex-row lg:items-start gap-6 lg:gap-8 xl:gap-12 text-white"
      style="font-family: 'Noto Sans'">
      <img class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full object-cover"
        src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/uowrytsl83v75ieoj9hq.jpg"
        alt="cv_logo" />

      <div class="flex flex-col items-center lg:items-start space-y-3 sm:space-y-4 text-center lg:text-left">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold">Calvin Howard</h1>
        <h2 class="text-lg sm:text-xl md:text-2xl font-light">
          Automations & AI Integrations
        </h2>

        <div class="flex items-center gap-2 sm:gap-3">
          <img class="w-6 sm:w-7"
            src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/wbljo25mchvxyrd8ttup.png"
            alt="location_icon" />
          <h3 class="text-base sm:text-lg font-bold">Bogotá, Colombia</h3>
        </div>

        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button @click="handleEmailClick"
            class="flex gap-2 sm:gap-3 bg-[#8b0000cc] text-sm sm:text-base items-center justify-center w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-lg border-2 border-white/20 transition-all duration-300 hover:scale-105 hover:bg-[#aa0000] shadow-custom hover:shadow-custom-hover">
            <img class="w-6 sm:w-9"
              src="https://res.cloudinary.com/deotitxt8/image/upload/v1751049865/portfolio/pngtree-vector-message-icon-png-image_1577496_uzk1cc.png"
              alt="email_icon" />
            calvin.uhh@gmail.com
          </button>

          <div class="flex gap-3 sm:gap-4">
            <a class="transition-all duration-300 hover:scale-110"
              href="https://www.linkedin.com/in/calvin-howard-853895283/" target="_blank" rel="noreferrer">
              <img class="w-10 sm:w-11"
                src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/gcigxgrcmfxihk1easff.png"
                alt="linkedin_icon" />
            </a>

            <a class="transition-all duration-300 hover:scale-110" href="https://github.com/Calvinuhh" target="_blank"
              rel="noreferrer">
              <img class="w-10 sm:w-11"
                src="https://res.cloudinary.com/deotitxt8/image/upload/v1733404612/portfolio/r0vxhlnzhb4zxaovmpsm.png"
                alt="github_icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentSection: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['change-section']);

const handleEmailClick = () => {
  if (props.currentSection !== 'contact') {
    emit('change-section', 'contact');

    setTimeout(() => {
      scrollToForm();
    }, 100);
  } else {
    scrollToForm();
  }
};

const scrollToForm = () => {
  const formElement = document.getElementById("contact-form");
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>