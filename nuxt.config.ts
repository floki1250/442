// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "442",
    },
  },
  nitro: {
    storage: {
      data: {
        driver: "vercelKV",
      },
    },
  },
  devtools: { enabled: false },
  modules: ["@nuxtjs/device", "@nuxt/ui", "@nuxt/image"],
  css: ["@/assets/main.scss"],
  colorMode: {
    preference: "dark", // default value of $colorMode.preference
  },
});
