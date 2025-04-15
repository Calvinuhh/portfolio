<template>
  <div class="flex flex-col w-[350px] p-6 gap-[10px] mx-auto border rounded-[5px] bg-[#42425f] bg-opacity-80 backdrop-blur-sm">
    <img class="w-[50px]" :src="data[0]" alt="certificate_logo" />
    <h3 class="font-bold">{{ data[1] }}</h3>
    <h4 :class="`font-thin ${henry ? 'mb-[19px]' : ''}`">{{ data[2] }}</h4>

    <a
      class="flex items-center justify-center bg-[#8b0000cc] w-[150px] h-[30px] rounded-[8px] border-[2px] border-solid border-white/20 transition-all duration-[0.3s] ease-out hover:scale-[1.1] shadow-custom hover:shadow-custom-hover hover:bg-[#aa0000e6]"
      href="#"
      @click.prevent="openCertificate"
    >
      Ver Certificado
    </a>
  </div>
</template>

<script lang="ts" setup>
interface CertificateCardProps {
  data: string[];
  henry?: boolean;
}

const props = defineProps<CertificateCardProps>();

const openCertificate = () => {
  const windowFeatures = props.henry ? "width=900,height=550" : "width=900,height=720";
  window.open(props.data[3], "_blank", windowFeatures);
};
</script>

<style scoped>
.shadow-custom {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.shadow-custom-hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>