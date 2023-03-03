<script setup lang="ts">
import { useHead } from '@vueuse/head'
import AddNote from './components/AddNoteModal.vue'

useHead({
  title: 'Duck-the-dev vue + vite Template',
  link: [
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#00aba9',
    },
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/svg+xml',
    },
    {
      rel: 'apple-touch-icon',
      href: '/pwa-192x192.png',
    },
    {
      rel: 'canonical',
      href: 'https://coral-app-29wb9.ondigitalocean.app',
    },
  ],
  meta: [
    {
      charset: 'UTF-8',
    },
    {
      name: 'msapplication-TileColor',
      content: '#00aba9',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
    {
      name: 'description',
      content: 'Vue learning journey',
    },
  ],
})
</script>

<template>
  <div class="container">
    <div
      class="bg-transparent bg-gradient-to-r from-pink-900 to-purple-500 bg-clip-text text-7xl text-transparent shadow-purple-400 drop-shadow-md duration-200 hover:shadow-xl hover:drop-shadow-2xl"
    >
      Simple Notes
    </div>
  </div>

  <AddNote />
</template>

<style scoped></style>
