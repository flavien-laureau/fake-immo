<template>
  <div>
    <nuxt-link to="/" class="logo-link">
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

body.auth-layout .logo-link {
  display: block;
  width: 300px;
  margin: 0 auto;
}
</style>
