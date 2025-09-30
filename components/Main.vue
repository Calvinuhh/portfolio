<template>
  <div class="relative">
    <About v-if="currentSection === 'about'" />
    <Technologies v-else-if="currentSection === 'technologies'" />
    <Experience v-else-if="currentSection === 'experience'" />
    <Education v-else-if="currentSection === 'education'" />
    <Certifications v-else-if="currentSection === 'certifications'" />
    <Automations v-else-if="currentSection === 'automations'" />
  </div>
</template>

<script setup>
defineProps({
  currentSection: {
    type: String,
    required: true,
  },
});
</script>
