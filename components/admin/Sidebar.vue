<template>
  <b-nav vertical class="sidebar-nav">
    <li class="nav-item" id="home">
      <nuxt-link to="/" class="nav-link" active>Fake-immo</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/acheter" class="nav-link" active>Maisons en ventes</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/admin-panel" class="nav-link">Espace d'administration</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/admin" class="nav-link">Formulaire d'authentification</nuxt-link>
    </li>
  </b-nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Sidebar"
});
</script>

<style scoped>
.sidebar-nav {
  background-color: #3b4b64;
  width: 100%;
  height: 100%;
}
.nav-item {
  height: 56px;
}
.nav-link {
  color: #d4dce9;
}
#home {
  background-color: #303c54;
}
</style>
