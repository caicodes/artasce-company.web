<template>
  <Transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
    :css="false"
  >
    <div class="relative" v-show="currentSlide === index">
      <img :src="slide" />
    </div>
  </Transition>
</template>

<script setup>
import gsap from "gsap"
defineProps(["slide", "currentSlide", "index"])

function onBeforeEnter(el, done) {
  gsap.to(el, {
    duration: 0.1,
    yPercent: 0,
    opacity: 0,
    ease: "inOut",
    onComplete: done,
  })
}
function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    yPercent: 0,
    opacity: 1,
    delay: 0.3,
    ease: "inOut",
    onComplete: done,
  })
}
function onLeave(el, done) {
  gsap.to(el, {
    duration: 0.7,
    delay: 0.1,
    opacity: 0,
    onComplete: done,
  })
}
</script>

<style scoped>
img {
  @apply w-screen;

  height: 100vh;
  object-fit: cover;
}
</style>
