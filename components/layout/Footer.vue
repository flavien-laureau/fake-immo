<template>
  <footer class="footer page-footer blue pt-4">
    <div class="container-fluid text-center">
      <div class="row">
        <div class="content col-md-6 mt-md-0 mt-3">
          <h5 class="text-uppercase">Aucun but commercial</h5>
          <p>Fake-immo, fausse agence immobilière, site web à but démonstratif !</p>
        </div>

        <hr class="clearfix w-100 d-md-none pb-3" />

        <div class="col-md-6 mb-md-0 mb-3">
          <h5 class="text-uppercase text-center">Plan du site</h5>
          <div class="links">
            <div class="links-side">
              <ul class="list-unstyled">
                <li>
                  <nuxt-link to="/">Accueil</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/fakeimmo">Fake-Immo</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/acheter">Acheter</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact">Nous contacter</nuxt-link>
                </li>
              </ul>
            </div>

            <div class="links-side">
              <ul class="list-unstyled">
                <li>
                  <nuxt-link to="/mentions-legales">Mentions légales</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/politique-de-confidentialite">Politique de confidentialité</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact">Recrutement</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-copyright text-center py-3">
      © 2020 Copyright
      <a href="https://www.linkedin.com/in/flavien-laureau/">Flavien Laureau</a>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Foot"
});
</script>

<style>
.footer {
  background-color: #f0ebe8;
  font-size: 0.9rem;
}
.footer a {
  text-decoration: none;
}
.links {
  display: flex;
  justify-content: center;
}

.links-side {
  width: 170px;
  text-align: left;
}
</style>