<template>
  <div 
    class="w-[500px] h-[260px] flex gap-5 p-5 border rounded-[10px] relative bg-[#42425f] bg-opacity-80 backdrop-blur-sm transition-all duration-[0.3s] ease-in-out hover:scale-[1.01] mb-[50px]"
    style="box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);"
    :style="{ 'box-shadow': isHovered ? '15px 15px 15px rgba(0, 0, 0, 0.3)' : '10px 10px 10px rgba(0, 0, 0, 0.3)' }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img
      :style="{
        width: holamigo ? '180px' : '120px',
        height: holamigo ?  '70px' : '110px',
        borderRadius: ti ? '50%' : '0'
      }"
      :src="data[0]"  
      alt="corp_logo"
    />
    <div>
      <h3 class="text-2xl font-thin">{{ data[1] }}</h3>
      <h3 class="text-xl font-bold">{{ data[2] }}</h3>
      <h4 class="text-lg font-thin">
        <template v-if="data[3].includes('Actualmente')">
          {{ myFunction(data[3], 'Actualmente') }} <strong>Actualmente</strong>
        </template>
        <template v-else>
          {{ data[3] }}
        </template>
      </h4>

      <p class="font-bold">{{ data[4] }}</p>
      <p class="font-thin">{{ data[5] }}</p>
    </div>

    <button
      class="absolute bottom-2 right-4 transition-all duration-200 ease-out hover:scale-110 text-white"
      @click="showAlert"
    >
      Ver detalles
    </button>
  </div>
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
</script>