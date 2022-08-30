<template>
  <div
    class="left relative w-1/2 flex justify-center align-middle py-40 text-center overflow-hidden"
  >
    <div
      class="blob blob1 absolute rounded-full w-[764px] h-[764px] bg-accent/10"
    ></div>
    <div
      class="blob blob2 absolute rounded-full w-[764px] h-[764px] bg-secondary/10"
    ></div>
    <div class="left-inner">
      <h1 class="uppercase font-thin text-5xl text-accent mb-4 opacity-30">
        Company Portal
      </h1>

      <Login />
    </div>
  </div>
</template>

<script setup>
import Login from "./app/Login.vue"
</script>
