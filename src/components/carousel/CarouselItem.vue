<template>
  <div class="carousel-item" v-show="currentSlide === index">
    <img :src="slide" />
  </div>
</template>

<script setup>
defineProps(["slide", "currentSlide", "index"])
</script>

<style scoped></style>
