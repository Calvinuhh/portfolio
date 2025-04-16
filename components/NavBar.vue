<template>
  <nav class="relative mx-auto mt-10 mb-[100px]" style="font-family: 'noto sans';">
    <div class="md:hidden flex justify-start px-4">
      <button @click="toggleMenu" class="text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <div ref="navContainer" class="hidden md:flex items-center justify-center h-[90px] relative">
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
        :style="{ left: `${activeButtonOffset}px`, transform: 'translateX(-50%)' }"
      ></div>
    </div>

    <div v-if="menuOpen" class="flex flex-col items-center mt-5 space-y-4 md:hidden">
      <button
        v-for="item in navItems"
        :key="item.id"
        class="text-white text-lg font-medium"
        :class="{ 'text-[#4dcfe3]': activeSection === item.id }"
        @click="selectSection(item.id)"
      >
        {{ item.label }}
      </button>
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
  { id: 'education', label: 'Educación' },
  { id: 'certifications', label: 'Certificaciones' },
  { id: 'contact', label: 'Contacto' }
];

const buttonRefs = ref({});
const navContainer = ref(null);
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const selectSection = (section) => {
  emit('change-section', section);
  menuOpen.value = false;
};

const activeButtonOffset = computed(() => {
  const activeButton = buttonRefs.value[props.activeSection];
  if (!activeButton) return 0;

  const buttonOffset = activeButton.offsetLeft;
  const buttonWidth = activeButton.offsetWidth;
  return buttonOffset + buttonWidth / 2;
});
</script>
