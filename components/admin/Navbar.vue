<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="navbar">
    <b-navbar-brand href="#">Administration</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="mobile">
        <li class="nav-item" id="home">
          <nuxt-link to="/" class="nav-link" active>Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/acheter" class="nav-link" active>Acheter</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/admin-panel" class="nav-link">Admin</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/admin" class="nav-link">Auth</nuxt-link>
        </li>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout" href="#">Log out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      mobile: false
    };
  },
  mounted() {
    // Responsive layout
    window.innerWidth <= 991 ? (this.mobile = true) : (this.mobile = false);

    window.addEventListener("resize", e => {
      window.innerWidth <= 991 ? (this.mobile = true) : (this.mobile = false);
    });
  },
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