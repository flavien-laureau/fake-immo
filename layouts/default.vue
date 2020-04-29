<template>
  <div>
    <header class="header-nav">
      <navbar />
      <div class="banner"></div>
    </header>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/layout/Navbar.vue";

export default Vue.extend({
  components: {
    Navbar
  },
  mounted() {
    // fixes the issue of overlapping of css on different layouts
    const body = document.body;
    body.removeAttribute("class");
    body.classList.add("default-layout");
  }
});
</script>

<style>
body.default-layout {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fefaf9;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}

body.default-layout .header-nav {
  margin-bottom: 30px;
}

body.default-layout .banner {
  background-image: url("../assets/banner-salle-a-manger.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: 20%;
  height: 300px;
  width: 1140px;
  margin: 0 auto;
}

@media screen and (max-width: 1199px) {
  body.default-layout .banner {
    width: 930px;
  }
}

@media screen and (max-width: 991px) {
  body.default-layout .banner {
    width: 100%;
  }
}
</style>
