<template>
  <article 
    class="w-full max-w-[500px] min-h-[260px] flex gap-5 p-5 border rounded-[10px] relative bg-[#42425f] bg-opacity-80 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-[1.01] mb-10"
    :style="{ boxShadow: isHovered ? '15px 15px 15px rgba(0, 0, 0, 0.3)' : '10px 10px 10px rgba(0, 0, 0, 0.3)' }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img
      :src="data[0]"
      :alt="`Logo de ${data[2]}`"
      @error="handleImgError"
      class="object-contain"
      :style="{
        width: holamigo ? '120px' : '100px',
        height: holamigo ? '60px' : '100px',
        borderRadius: ti ? '50%' : '0'
      }"
    />
    <div class="flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-thin md:text-2xl">{{ data[1] }}</h3>
        <h3 class="text-lg font-bold md:text-xl">{{ data[2] }}</h3>
        <h4 class="text-base font-thin md:text-lg">
          <template v-if="data[3].includes('Actualmente')">
            {{ myFunction(data[3], 'Actualmente') }} <strong>Actualmente</strong>
          </template>
          <template v-else>
            {{ data[3] }}
          </template>
        </h4>
        <p class="font-bold md:text-lg">{{ data[4] }}</p>
        <p class="font-thin text-sm md:text-base">{{ data[5] }}</p>
      </div>

      <button
        class="self-end mt-4 text-white text-sm underline hover:scale-105 transition"
        @click="showAlert"
        :aria-label="`Ver detalles de ${data[2]}`"
      >
        Ver detalles
      </button>
    </div>
  </article>
</template>


<script lang="ts" setup>
import Swal from 'sweetalert2';
import { ref } from 'vue';

const props = defineProps({
  data: {
    type: Array as () => string[],
    required: true
  },
  ti: {
    type: Boolean,
    default: false
  },
  details: {
    type: String,
    required: true
  },
  holamigo: {
    type: Boolean,
    default: false    
  }
});

const isHovered = ref(false);

const myFunction = (string: string, texto: string) => {
  return string
    .split(' ')
    .filter((str) => str !== texto)
    .join(' ');
};

const showAlert = () => {
  Swal.fire({
    text: props.details,
    icon: 'info',
    confirmButtonText: 'Cerrar',
  });
};

const handleImgError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = '/fallback-logo.png';
};
</script>
