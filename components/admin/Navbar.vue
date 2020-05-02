<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="navbar">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="logout" href="#">Logout</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("admin/logout");
      this.$router.push("/admin");
    }
  }
});
</script>

<style scoped>
.navbar {
}
</style>