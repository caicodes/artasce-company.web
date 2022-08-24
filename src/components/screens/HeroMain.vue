<template>
  <div class="h-screen bg-primary/10 relative">
    <div class="max-w-screen-xl mx-a">
      <div class="phone-wrapper absolute right-20">
        <Phone>
          <ThemeChanger />
        </Phone>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import ThemeChanger from "../app/ThemeChanger.vue"
import Phone from "../mockups/Phone.vue"
import gsap from "gsap"

// import ScrollTo from "gsap/ScrollToPlugin"
// import ScrollTrigger from "gsap/ScrollTrigger"

const animation = gsap.timeline()
onMounted(() => {
  animation.to(".phone-wrapper", { y: 120 })
})
</script>
