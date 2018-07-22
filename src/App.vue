<template>
  <div id="app">
    <body>
      <nav-bar></nav-bar>
      <router-view></router-view>
<bottom-bar></bottom-bar>

    </body>
</div>
</template>

<script>
import navBar from "@/components/navbar.vue";
import bottomBar from "@/components/bottombar.vue";
export default {
  name: "app",
  components: {
    navBar,
    bottomBar
  }
};
</script>

<style>
</style>
