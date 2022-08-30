<script setup>
import Logo from "../app/Logo.svg.vue"
import ThemeChanger from "../app/ThemeChanger.vue"
</script>
<template>
  <main>
    <header
      class="fixed top-0 left-0 w-full px-3rem py-2rem flex justify-between place-items-center z-[99]"
    >
      <div class="absolute right-1/2 pr-5"><ThemeChanger /></div>
      <div class="logo w-16 h-16 m-4">
        <Logo />
      </div>
      <nav class="menu-main">main menu</nav>
    </header>
    <div class="content flex h-screen">
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
          <h5 class="uppercase font-light mt-8">Artasce Creative</h5>
          <h1 class="uppercase font-thin text-5xl my-8">Company Portal</h1>
          <h5 class="max-w-[80%] mx-auto font-light pb-12 text-3xl">
            Partner Access
          </h5>
          <p class="max-w-[60%] mx-auto pb-4 mb-16">
            Access your client portals, online store admin areas, firebase
            consoles or partner control panels from this Artasce Creative login.
            For more information, contact us!
          </p>
          <button class="btn btn-primary btn-lg font-light">Learn More</button>
        </div>
      </div>
      <div class="right w-1/2">
        <div class="slider">
          <div class="item"><img src="images/pic1.jpg" alt="" /></div>
          <div class="item"><img src="images/pic2.jpg" alt="" /></div>
          <div class="item"><img src="images/pic3.jpg" alt="" /></div>
          <div class="item"><img src="images/pic4.jpg" alt="" /></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.right img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.blob1 {
  right: -250px;
  top: -650px;
}
.blob2 {
  left: -250px;
  bottom: -650px;
}
</style>
