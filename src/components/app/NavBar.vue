<script setup>
import { onMounted } from "vue"
import gsap from "gsap"
import ScrollTo from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"
import { mainMenuItems } from "../../constants/Menus"
import { siteName } from "../../constants/Settings"
import ThemeChanger from "./ThemeChanger.vue"

const items = mainMenuItems
gsap.registerPlugin(ScrollTo)
gsap.registerPlugin(ScrollTrigger)

const handleClick = (item) => {
  console.log("yo, clicked ", item)
  gsap.to(window, {
    duration: 1,
    ease: "expo.inOut",
    scrollTo: { y: "#" + item },
  })
}

const navBarAnimation = gsap.timeline()

onMounted(() => {
  navBarAnimation
    .fromTo(".navbar, .navbarbelow", { y: -50 }, { y: 0, ease: "power4.inOu" })
    .fromTo(".menu li, .logo", { y: -50 }, { y: 0, stagger: 0.1 })
    .to(".navbar", { y: 0 })
})
</script>
<template>
  <div class="h-16">
    <div class="navbar bg-base-200 fixed z-50">
      <div class="flex-1 logo">
        <a
          href="/"
          class="btn btn-primary btn-link hover:no-underline hover:text-primary-focus normal-case text-xl"
          >{{ siteName }}
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li v-for="item in items" :key="item">
            <a @click="handleClick(item)">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="fixed top-16 right-2 z-50 m-1"><ThemeChanger /></div>
  </div>
</template>
