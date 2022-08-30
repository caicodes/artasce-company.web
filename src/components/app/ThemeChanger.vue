<script setup>
import { useColorMode, useCycleList } from "@vueuse/core"
import IconSystem from "./icons/system.svg.vue"
import IconLight from "./icons/light.svg.vue"
import IconDark from "./icons/dark.svg.vue"
import DarkSvg from "./icons/dark.svg.vue"
import LightSvg from "./icons/light.svg.vue"
import SystemSvg from "./icons/system.svg.vue"

const colors = ["light", "dark", "system"]

const mode = useColorMode({
  attribute: "data-theme",
  emitAuto: true,
  mode: {
    light: "light",
  },
})
const { next } = useCycleList(["light", "dark", "system"], {
  initialValue: mode,
})
</script>

<template>
  <button @click="next()" class="btn btn-accent btn-circle btn-ghost">
    <DarkSvg v-if="mode === 'dark'" />
    <LightSvg v-if="mode === 'light'" />
    <SystemSvg v-if="mode === 'system'" />
  </button>
</template>
