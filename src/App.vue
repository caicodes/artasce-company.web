<script setup>
import NavBar from "./components/app/NavBar.vue"
import Screen from "./components/Screen.vue"
import { container } from "./App.css"
</script>

<template>
  <NavBar />
  <div :class="container">
    <Screen id="landing" class="bg-base-100">ddd</Screen>
    <Screen id="explore" class="bg-base-200">screen...</Screen>
    <Screen id="about" class="bg-base-300">screen...</Screen>
    <Screen id="contact">yo screen slot...</Screen
    ><Screen id="quote" class="bg-primary/10"> yo ...nudda screen </Screen>
  </div>
</template>
