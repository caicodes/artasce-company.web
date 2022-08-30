<script setup>
import NavBar from "./components/app/NavBar.vue"
import Screen from "./components/Screen.vue"
import { box, container, yo1, yo2, yo3, yo4 } from "./App.css.ts"

const containerStyles = container
const boxStyles = box
const yo1Styles = yo1
const yo2Styles = yo2
const yo3Styles = yo3
const yo4Styles = yo4
</script>

<template>
  <NavBar />
  <div :class="containerStyles">
    <Screen id="yo1" :class="yo1Styles" class="bg-base-100">ddd</Screen>
    <Screen id="yo2" :class="yo2Styles" class="bg-base-200">screen...</Screen>
    <Screen id="yo3" :class="yo3Styles" class="bg-base-300"
      ><div class="box box-3" :class="boxStyles">yo box...</div></Screen
    >
    <Screen id="yo4" :class="yo4Styles" class="bg-secondary-focus/10"
      >yo screen slot...</Screen
    ><Screen id="yo5" class="bg-primary/10"> yo ...nudda screen </Screen>
  </div>
</template>
