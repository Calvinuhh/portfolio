// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        {rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      SERVICE_ID: "",
      TEMPLATE_ID: "",
      PUBLIC_KEY: ""
    }
  }
})