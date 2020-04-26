<template>
  <b-navbar toggleable="md">
    <nuxt-link to="/">
      <b-navbar-brand>
        <img class="main-logo" src="@/assets/logo.jpg" />
      </b-navbar-brand>
    </nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <nuxt-link to="/">Accueil</nuxt-link>
        <nuxt-link to="/fakeimmo">Fake-Immo</nuxt-link>
        <nuxt-link to="/acheter">Acheter</nuxt-link>
        <nuxt-link to="/contact">Nous contacter</nuxt-link>
        <nuxt-link to="/admin">ADMIN</nuxt-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navbar"
});
</script>

<style scoped>
/* Navbar global */
.collapsing {
  /* Supprime l'animation par defaut de bootstrap sur le menu burger, qui bug à cause du display flex */
  -webkit-transition: none;
  transition: none;
  display: none;
}
.navbar {
  font-family: "Baloo Paaji 2", cursive;
  font-weight: 500;
  text-transform: uppercase;
}

/* Logo */
.navbar-brand {
  padding: 0;
  margin-left: 60px;
}

.main-logo {
  height: 200px;
}

/* Links */
.navbar-nav {
  justify-content: center;
  width: 100%;
}

.navbar-nav a {
  color: black;
  padding: 20px;
}

@media screen and (max-width: 991px) {
  .navbar {
    flex-direction: column;
  }
}

@media screen and (max-width: 767px) {
  .navbar {
    display: flex;
    align-items: flex-start;
  }
  .navbar-brand {
    align-self: center;
  }
  .navbar-toggler {
    margin-top: 10px;
  }
  .navbar-nav a {
    padding: 10px;
  }
}
</style>
