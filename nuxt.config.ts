// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    '@nuxtjs/tailwindcss'
  ],
  content: {
    markdown: {
      anchorLinks: {exclude: [2,3,4]}
    }
  }
})