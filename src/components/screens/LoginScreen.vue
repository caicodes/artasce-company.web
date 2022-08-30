<template>
  <main class="mainScreen">
    <header
      class="fixed top-0 left-0 w-full px-3rem py-2rem flex justify-between place-items-center z-[99]"
    >
      <div class="absolute md:right-1/2 right-2 pr-5"><ThemeChanger /></div>
      <div class="logo w-16 h-16 m-4">
        <Logo />
      </div>
      <nav class="menu-main pr-4 hidden md:block text-accent">
        Artasce Creative
      </nav>
    </header>
    <div class="content flex h-screen">
      <LeftPanel />
      <div class="right w-1/2 md:block hidden">
        <Carousel :slides="mainCarouselSlides" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from "vue"
import Logo from "../app/Logo.svg.vue"
import ThemeChanger from "../app/ThemeChanger.vue"
import { mainCarouselSlides } from "../../constants/Slides"
import Carousel from "../carousel/Carousel.vue"
import LeftPanel from "../LeftPanel.vue"

onMounted(() => {
  console.log(mainCarouselSlides)
})
</script>

<style>
.logo {
  @apply text-primary;
}
.blob1 {
  right: -250px;
  top: -650px;
}
.blob2 {
  left: -250px;
  bottom: -650px;
}
</style>
