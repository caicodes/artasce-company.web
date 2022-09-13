<script setup>
import { useColorMode, useCycleList } from "@vueuse/core"
import DarkSvg from "./icons/dark.svg.vue"
import LightSvg from "./icons/light.svg.vue"
import SystemSvg from "./icons/system.svg.vue"

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
    <DarkSvg v-if="mode === 'light'" />
    <LightSvg v-if="mode === 'dark'" />
    <SystemSvg v-if="mode === 'system'" />
  </button>
</template>
