<template>
  <div class="relative" v-show="currentSlide === index">
    <img :src="slide" />
  </div>
</template>

<script setup>
defineProps(["slide", "currentSlide", "index"])
</script>

<style scoped>
img {
  position: relative;
  @apply w-screen;

  height: 100vh;
  object-fit: cover;
}
</style>
