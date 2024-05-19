// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "442",
    },
  },
  devtools: { enabled: false },
  modules: ["@nuxt/ui"],
  css: ["@/assets/main.scss"],
  colorMode: {
    preference: "dark", // default value of $colorMode.preference
  },
});
