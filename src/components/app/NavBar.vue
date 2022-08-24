<script setup>
import { onMounted } from "vue"
import gsap from "gsap"
import ScrollTo from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"
import { btnListFull } from "../../constants/Styleguide"
import { mainMenuItems } from "../../constants/Menus"
import { siteName } from "../../constants/Settings"

const btnList = btnListFull
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
const handleClick2 = (item) => {
  console.log("yo, clicked ", item)
  gsap.to(window, {
    duration: 2,
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

  gsap.to(".box-1", {
    x: 500,
    scrollTrigger: {
      trigger: "#yo2",
      markers: true,
      scrub: true,
    },
  })
  gsap.to(".box-2", {
    x: 500,
    scrollTrigger: { trigger: ".box-2", markers: true, scrub: true },
  })
  gsap.to(".box-3", {
    x: 500,
    scrollTrigger: { trigger: ".box-3", markers: true, scrub: true },
  })
  gsap.to(".box-4", {
    x: 500,
    scrollTrigger: { trigger: ".box-4", markers: true, scrub: true },
  })
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

    <!-- <NavBarBelow /> -->
    <div class="navbarbelow pt-16 -mt-1.5 fixed z-30 bg-base-200/50 w-full">
      <ul class="menu menu-horizontal bg-base-300/20">
        <li
          v-for="item in btnList"
          :key="item"
          :class="`text-${item} bg-${item}/10`"
        >
          <a
            @click="handleClick2(item)"
            :class="`btn-${item}`"
            class="btn-link hover:bg-inherit"
            >{{ item }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
