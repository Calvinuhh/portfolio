<template>
  <div class="project-card">
    <img class="project-image" :src="data[0]" alt="project_image" />
    <h2 class="project-title">{{ data[1] }}</h2>
    <div class="project-description">
      <p>{{ data[2] }}</p>
    </div>
    <div class="project-links">
      <a
        v-if="repo"
        target="_blank"
        rel="noopener noreferrer"
        :href="repo_link"
        class="icon-link"
      >
        <img class="icon" src="https://res.cloudinary.com/deotitxt8/image/upload/v1733417591/portfolio/ihtebuqsqrrgvd6fjiev.png" alt="repo_icon" />
      </a>

      <a
        v-if="doc"
        target="_blank"
        rel="noopener noreferrer"
        :href="doc_link"
        class="icon-link"
      >
        <img class="icon" src="https://res.cloudinary.com/deotitxt8/image/upload/v1733418875/portfolio/gclghq8ol3x1rmfecgdw.png" alt="doc_icon" />
      </a>

      <a
        v-if="web"
        target="_blank"
        rel="noopener noreferrer"
        :href="web_link"
        class="icon-link"
      >
        <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/768px-Globe_icon.svg.png" alt="web_icon" />
      </a>

      <a
        v-if="video"
        target="_blank"
        rel="noopener noreferrer"
        :href="video_link"
        class="icon-link"
      >
        <img class="icon" src="https://res.cloudinary.com/deotitxt8/image/upload/v1741366417/portfolio/boton-de-play_y7yu16.png" alt="web_icon" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  width: 100%;
  max-width: 400px;
  min-height: 650px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto 70px;
  background-color: white;
  color: black;
}

.project-image {
  width: 100%;
  height: 210px;
  border-radius: 16px 16px 0 0;
  margin-bottom: 20px;
}

.project-title {
  margin: 20px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
}

.project-description {
  width: 100%;
  text-align: justify;
  margin: 0 auto 50px;
  padding: 0 15px; 
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.icon-link {
  transition: all 0.2s ease-out;
}

.icon-link:hover {
  transform: scale(1.1);
}

.icon {
  width: 50px;
}

@media (max-width: 768px) {
  .project-card {
    max-width: 100%;
    margin: 0 15px;
  }

  .project-description {
    padding: 0 10px; 
  }

  .project-title {
    font-size: 20px; 
  }
}
</style>


<script lang="ts" setup>
interface ProjectCardProps {
  data: string[];
  repo?: boolean;
  repo_link?: string;
  doc?: boolean;
  doc_link?: string;
  web?: boolean;
  web_link?: string;
  video?: boolean;
  video_link?: string;
}

defineProps<ProjectCardProps>();
</script>