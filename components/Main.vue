<template>
    <div class="relative">
      <About v-if="currentSection === 'about'" />
      <Technologies v-else-if="currentSection === 'technologies'" />
      <Experience v-else-if="currentSection === 'experience'" />
      <Projects v-else-if="currentSection === 'projects'" />
      <Education v-else-if="currentSection === 'education'" />
      <Certifications v-else-if="currentSection === 'certifications'" />
      <Contact v-else-if="currentSection === 'contact'" />
    </div>
  </template>
  
  <script setup>
  defineProps({
    currentSection: {
      type: String,
      required: true
    }
  });
  </script>