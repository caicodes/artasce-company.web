<script setup>
import NavBar from "./components/app/NavBar.vue"
import Screen from "./components/Screen.vue"
import { container } from "./App.css"
</script>

<template>
  <NavBar />
  <div :class="container">
    <Screen id="landing" class="bg-base-100">
      landing... this is were we do it.
    </Screen>
    <Screen id="explore" class="bg-base-200">explore more...</Screen>
    <Screen id="about" class="bg-base-300">about section</Screen>
    <Screen id="contact">yo contact slot...</Screen
    ><Screen id="quote" class="bg-primary/10"> yo ...quote me up, bro </Screen>
  </div>
</template>
