<template>
  <article
    class="w-full max-w-[600px] min-h-[350px] flex flex-col gap-5 p-6 border rounded-[15px] relative bg-gradient-to-br from-[#42425f]/90 to-[#2a2a3e]/80 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-[1.02] mb-8 shadow-lg hover:shadow-2xl"
    :style="{
      boxShadow: isHovered
        ? '0 20px 40px rgba(0, 0, 0, 0.4)'
        : '0 10px 25px rgba(0, 0, 0, 0.2)',
    }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="flex items-start justify-between mb-4">
      <h3 class="text-xl md:text-2xl font-bold text-white leading-tight">
        {{ title }}
      </h3>
      <div
        class="flex items-center gap-2 px-3 py-1 bg-[#4dcfe3]/20 rounded-full"
      >
        <div class="w-2 h-2 bg-[#4dcfe3] rounded-full animate-pulse"></div>
      </div>
    </div>

    <p
      class="text-gray-300 text-sm md:text-base leading-relaxed mb-4 flex-grow"
    >
      {{ description }}
    </p>

    <div class="relative mb-4 rounded-lg overflow-hidden bg-black/20">
      <div v-if="isImageArray" class="relative">
        <img
          :src="currentImage"
          :alt="`Demo de ${title} - Imagen ${currentImageIndex + 1}`"
          class="w-full h-[200px] object-cover rounded-lg hover:scale-105 transition-all duration-500"
          @error="handleImgError"
          loading="lazy"
        />
        <div
          class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1"
        >
          <div
            v-for="(_, index) in imagesList"
            :key="index"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="
              currentImageIndex === index ? 'bg-[#4dcfe3]' : 'bg-white/40'
            "
          ></div>
        </div>
        <div
          class="absolute top-2 right-2 px-2 py-1 bg-black/60 rounded text-xs text-white"
        >
          {{ currentImageIndex + 1 }}/{{ imagesList.length }}
        </div>
      </div>

      <div v-else>
        <img
          :src="gifSrc"
          :alt="`Demo de ${title}`"
          class="w-full h-[200px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          @error="handleImgError"
          loading="lazy"
        />
      </div>
    </div>

    <div class="border-t border-gray-600/30 pt-4">
      <h4
        class="text-sm font-semibold text-[#4dcfe3] mb-3 flex items-center gap-2"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
          ></path>
        </svg>
        Herramientas Utilizadas
      </h4>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tool in toolsList"
          :key="tool"
          class="px-3 py-1 bg-[#42425f]/60 text-white text-xs rounded-full border border-gray-600/30 hover:bg-[#4dcfe3]/20 hover:border-[#4dcfe3]/40 transition-all duration-200"
        >
          {{ tool }}
        </span>
      </div>
    </div>

    <div
      class="absolute inset-0 rounded-[15px] opacity-0 transition-opacity duration-300 pointer-events-none"
      :class="{ 'opacity-100': isHovered }"
      style="
        background: linear-gradient(
          45deg,
          transparent 30%,
          rgba(77, 207, 227, 0.1) 50%,
          transparent 70%
        );
      "
    ></div>
  </article>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gifSrc: {
    type: String,
    required: false,
  },
  images: {
    type: Array,
    required: false,
  },
  tools: {
    type: String,
    required: true,
  },
});

const isHovered = ref(false);
const currentImageIndex = ref(0);
let imageInterval = null;

const toolsList = computed(() => {
  return props.tools.split(", ").map((tool) => tool.trim());
});

// Verificar si se están usando imágenes múltiples o un GIF
const isImageArray = computed(() => {
  return props.images && props.images.length > 0;
});

const imagesList = computed(() => {
  return props.images || [];
});

const currentImage = computed(() => {
  return imagesList.value[currentImageIndex.value] || "";
});

// Función para iniciar el carrusel automático
const startImageCarousel = () => {
  if (isImageArray.value && imagesList.value.length > 1) {
    imageInterval = setInterval(() => {
      currentImageIndex.value =
        (currentImageIndex.value + 1) % imagesList.value.length;
    }, 3000); // Cambiar cada 3 segundos
  }
};

// Función para detener el carrusel
const stopImageCarousel = () => {
  if (imageInterval) {
    clearInterval(imageInterval);
    imageInterval = null;
  }
};

// Lifecycle hooks
onMounted(() => {
  startImageCarousel();
});

onUnmounted(() => {
  stopImageCarousel();
});

const handleImgError = (event) => {
  const target = event.target;
  target.src = "/loading_gif.gif";
};
</script>
