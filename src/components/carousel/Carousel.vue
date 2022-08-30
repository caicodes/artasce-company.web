<template>
  <div class="carousel">
    <div class="carousel-inner">
      <CarouselItem
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`item-${index}`"
        :index="index"
        :current-slide="currentSlide"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentSlide: 0,
    slideInterval: null,
  }),

  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index
    },
  },

  mounted() {
    this.slideInterval = setInterval(() => {
      const index =
        this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0
      this.setCurrentSlide(index)
    }, 3000)
  },
}
</script>

<script setup>
import CarouselItem from "./CarouselItem.vue"

defineProps(["slides"])
</script>

<style>
.carousel {
  display: flex;
  justify-content: center;
  height: 100vh;
}
.carousel-inner {
  position: relative;
  overflow: hidden;
}
</style>
