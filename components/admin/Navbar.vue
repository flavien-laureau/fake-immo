<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="navbar">
    <b-navbar-brand href="#">Administration</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="mobile">
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
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Mon compte" right>
          <b-dropdown-item href="#">
            <nuxt-link
              :to="'/admin-panel/profil/' + this.$store.state.admin.adminId"
              class="dropdown-link"
            >Mon profil</nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item @click="logout" href="#">Déconnexion</b-dropdown-item>
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
.dropdown-link {
  color: black;
  margin-left: 0;
}
</style>