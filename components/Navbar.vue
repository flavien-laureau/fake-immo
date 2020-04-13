<template>
  <b-navbar toggleable="md">
    <b-navbar-brand href="#">
      <img class="main-logo" src="@/assets/logo.jpg" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Accueil</b-nav-item>
        <b-nav-item href="#">Recrutement</b-nav-item>
        <b-nav-item href="#">A vendre</b-nav-item>
        <b-nav-item href="#">Nous contacter</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!-- <b-row class="text-center">
    <b-col id="green" cols="12" md="4">1 of 3</b-col>
    <b-col id="red">2 of 3</b-col>
  </b-row>-->
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
.navbar-collapse {
  justify-content: center;
}

@media screen and (max-width: 991px) {
  .navbar {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 767px) {
  .navbar {
    align-items: flex-start;
  }
  .navbar-brand {
    align-self: center;
  }
  .navbar-toggler {
    margin-top: 10px;
  }
}
</style>