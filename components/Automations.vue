<template>
  <section
    class="w-full max-w-[1200px] mx-auto px-4 my-[100px] flex flex-col items-center gap-10"
  >
    <div class="text-center mb-8">
      <h2
        class="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#4dcfe3] to-[#a5c190] bg-clip-text text-transparent"
      >
        Portafolio de Automatizaciones
      </h2>
      <div
        class="w-20 h-1 bg-gradient-to-r from-[#4dcfe3] to-[#a5c190] mx-auto mb-6 rounded-full"
      ></div>
    </div>

    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full justify-items-center"
    >
      <Automation
        v-for="automation in automations"
        :key="automation.id"
        :title="automation.title"
        :description="automation.description"
        :gif-src="automation.gifSrc"
        :images="automation.images"
        :tools="automation.tools"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Automation from "./Automation.vue";

const automations = ref([
  {
    id: 1,
    title: "Generador de Carruseles/Posts para Instagram/LinkedIn",
    description:
      "Desarrollé una automatización para generar carruseles y posts de Instagram/LinkedIn a partir de datos en Airtable. Con un botón se envía el record ID, que contiene temas, estilos y tonos de escritura. Esta información se procesa en n8n integrando GPTs de OpenAI, que producen contenido visual y textual listo para redes sociales. El flujo reduce el tiempo de creación y estandariza publicaciones de alta calidad para marketing digital.",
    gifSrc: "/finkargo.gif",
    tools: "n8n, Airtable, OpenAI API, Placid",
  },
  {
    id: 2,
    title: "LinkedIn Scrapper generador de Leads",
    description:
      "Automatización para generación de leads en LinkedIn integrando Airtable, n8n y Apify. Centraliza datos, scrapea posts y reacciones, identifica empresas y califica prospectos según una matriz definida. Los leads que cumplen criterios se registran automáticamente y se genera un mensaje inicial para campañas de outreach, reduciendo tareas manuales y acelerando la prospección.",
    images: [
      "https://www.upwork.com/att/download/portfolio/persons/uid/1967643045799198520/profile/projects/files/460f6d22-0d03-41ea-9768-bd3e61466d46",
      "https://www.upwork.com/att/download/portfolio/persons/uid/1967643045799198520/profile/projects/files/2905b44c-9325-4618-923b-6fe328537bdb",
    ],
    tools: "n8n, Airtable, OpenAI, Google Sheets API, Apify",
  },
  {
    id: 3,
    title: "Agente buscador de Citas",
    description:
      "Diseñé un agente automatizado de agendamiento para la agencia Viajes y Viajes, integrando n8n, bots de Hola Amigo y el asistente en Azure. El agente conversa con los usuarios, gestiona la información y agenda citas de manera autónoma. El sistema ha logrado más de 568 citas confirmadas, optimizando la gestión comercial y reduciendo la carga operativa del equipo de ventas.",
    images: [
      "https://www.upwork.com/att/download/portfolio/persons/uid/1967643045799198520/profile/projects/files/ff788b73-f381-4412-a5b9-48aec6a12477",
      "https://www.upwork.com/att/download/portfolio/persons/uid/1967643045799198520/profile/projects/files/fc5f5116-7afe-475f-a554-9f98f6e3fc8f",
      "https://www.upwork.com/att/download/portfolio/persons/uid/1967643045799198520/profile/projects/files/c2ffd936-39c3-4020-b1b8-1f607add971f",
      "https://www.upwork.com/att/download/portfolio/persons/uid/1967643045799198520/profile/projects/files/28b33f1d-4ee8-418e-9294-17c00768f878",
    ],
    tools:
      "n8n, Airtable, OpenAI, WhatsApp Business API, Azure AI Foundry, Microsoft Graph API",
  },
  {
    id: 4,
    title: "Automatización de verificación de Conceptos de Nómina",
    description:
      "Automatización para validar más de 7,000 registros de nómina en Excel, evitando procesos manuales. El archivo se parsea a Google Sheets, donde un script en n8n + Google Sheets API compara conceptos de nómina según reglas de negocio (ej. vacaciones, ausencias). El flujo genera una nueva columna con resultados: “OK” si todo está correcto o “Error” si se detecta inconsistencia. Esto redujo tiempos de validación y aumentó la precisión en la gestión de nómina.",
    images: [
      "https://www.upwork.com/att/download/portfolio/persons/uid/1967643045799198520/profile/projects/files/c3611999-31b0-4759-b90f-7cb18d534b95",
      "https://www.upwork.com/att/download/portfolio/persons/uid/1967643045799198520/profile/projects/files/9189560a-c0d4-4c25-93dc-fde4770d69c4",
      "https://www.upwork.com/att/download/portfolio/persons/uid/1967643045799198520/profile/projects/files/c134e545-7af5-44b4-a28a-084733b310c4",
    ],
    tools: "n8n, Google Sheets API",
  },
  {
    id: 5,
    title: "Agente creador de Actas de Reuniones",
    description:
      "Implementé un agente automatizado para la creación de actas de reuniones. A partir de transcripts generados en Microsoft Teams, el agente de Hola Amigo procesa la información y, mediante un flujo en n8n, inserta los datos en una plantilla preestablecida (participantes, comité, fecha, temas). Finalmente, el acta se envía por correo en formato descargable, reduciendo el tiempo manual de redacción y estandarizando la documentación corporativa.",
    gifSrc: "/bolsa_mercantil.gif",
    tools: "n8n, Google Docs API, OpenAI, Gmail API, Web Services Integration",
  },
  {
    id: 6,
    title: "Agente AI calificador de personas comerciales",
    description:
      "Desarrollé una automatización para Tech & Solve integrando Microsoft Graph API con la plataforma Hola Amigo. El sistema accedía a carpetas de SharePoint, extraía los transcripts cargados manualmente y los enviaba a un web service para ser evaluados mediante un prompt de IA. El resultado permitió calificar conversaciones de agentes comerciales con clientes, generando métricas de calidad y optimizando la gestión comercial.",
    images: [
      "https://www.upwork.com/att/download/portfolio/persons/uid/1967643045799198520/profile/projects/files/074788bb-9824-4e53-96f5-a2bc1bb886b5",
      "https://www.upwork.com/att/download/portfolio/persons/uid/1967643045799198520/profile/projects/files/7236d1ce-ad01-4b1e-a2fd-59494a80d11e",
    ],
    tools: "n8n, Google Sheets API, OpenAI, Microsoft Graph API",
  },
]);
</script>
