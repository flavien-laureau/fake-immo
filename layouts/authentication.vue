<template>
  <div>
    <nuxt-link to="/">
      <img class="main-logo" src="@/assets/logo.jpg" />
    </nuxt-link>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {
    // fixes the issue of overlapping of css on different layouts
    const body = document.body;
    body.removeAttribute("class");
    body.classList.add("auth-layout");
  }
});
</script>

<style>
body.auth-layout {
  background-color: #fefaf9;
}

body.auth-layout .main-logo {
  display: block;
  margin: 0 auto;
}
</style>
