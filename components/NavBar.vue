<template>
  <nav class="relative flex justify-center mx-auto mt-10 mb-[100px]" style="font-family: 'noto sans';">
    <div class="flex items-center h-[90px] relative">
      <button
        v-for="item in navItems"
        :key="item.id"
        :ref="el => { if (el) buttonRefs[item.id] = el }"
        class="flex flex-col items-center px-5 transition-all ease-in duration-200 hover:scale-105 text-white group"
        :class="{ 'scale-105 text-[#4dcfe3]': activeSection === item.id }"
        @click="$emit('change-section', item.id)"
      >
        <span class="text-[17px] font-medium tracking-wide whitespace-nowrap transition-colors duration-200"
              :class="{ 'text-[#4dcfe3]': activeSection === item.id, 'group-hover:text-[#a5c190]': activeSection !== item.id }">
          {{ item.label }}
        </span>
      </button>

      <div
        class="absolute bottom-1 h-[3px] w-12 transition-all duration-300 bg-[#4dcfe3] rounded-full"
        :style="indicatorStyle"
      ></div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  activeSection: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['change-section']);

const navItems = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'technologies', label: 'Tecnologías' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'education', label: 'Educación' },
  { id: 'certifications', label: 'Certificaciones' },
  { id: 'contact', label: 'Contacto' }
];

const buttonRefs = ref({});

const indicatorStyle = computed(() => {
  const activeButton = buttonRefs.value[props.activeSection];
  if (!activeButton) return {};
  
  const buttonRect = activeButton.getBoundingClientRect();
  const containerRect = activeButton.parentElement.getBoundingClientRect();
  
  const leftPosition = buttonRect.left - containerRect.left + (buttonRect.width / 2) - 24;
  
  return {
    transform: `translateX(${leftPosition}px)`
  };
});

onMounted(() => {
  window.addEventListener('resize', () => {});
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {});
});
</script>