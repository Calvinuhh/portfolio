<template>
  <div class="bg-[#1a1a2e] min-h-screen p-5">
    <Header/>
    <NavBar :active-section="currentSection" @change-section="changeSection"/>
    <Main :current-section="currentSection"/>
    <Footer/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentSection = ref('about'); 

const changeSection = (section) => {
  currentSection.value = section;
  if (process.client) {
    localStorage.setItem('lastSection', section);
  }
};

onMounted(() => {
  if (process.client) {
    const savedSection = localStorage.getItem('lastSection');
    const validSections = ['about', 'technologies', 'experience', 'projects', 'education', 'certifications', 'contact'];
    
    if (savedSection && validSections.includes(savedSection)) {
      currentSection.value = savedSection;
    }
  }
});
</script>