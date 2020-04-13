<template>
  <div>
    <header>
      <navbar />
    </header>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";

export default Vue.extend({
  components: {
    Navbar
  }
});
</script>


<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fefaf9;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}
</style>
