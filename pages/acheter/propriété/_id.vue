<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link to="/">Accueil</nuxt-link>
        </li>
        <li class="breadcrumb-item">
          <nuxt-link to="/acheter">Acheter</nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ estate.title }} à {{ location.city }}
          <!-- {{estate.location.city}} -->
          <!-- TODO city (bug) -->
        </li>
      </ol>
    </nav>
    <div class="card">
      <h2>{{ estate.title }}</h2>
      <img id="img" :src="estate.img" />
      <p id="description">{{ estate.description }}</p>
      <p id="price">{{ estate.price }}€</p>
    </div>
    <nuxt-link to="/acheter">
      <button class="button btnPrimary">Retour</button>
    </nuxt-link>
    <iframe
      id="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43265.63493368486!2d4.997201684433277!3d47.33187566674457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29d8ceffd9675%3A0x409ce34b31458d0!2s21000%20Dijon!5e0!3m2!1sfr!2sfr!4v1591740587229!5m2!1sfr!2sfr"
      frameborder="0"
      style="border:0;"
      allowfullscreen
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      estate: "",
      location: ""
    };
  },
  async created() {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[3];

    await this.$store.dispatch("estates/fetchEstate", id);
    this.estate = this.$store.state.estates.oneEstate;
    this.location = this.$store.state.estates.oneEstate.location;
  }
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 350px;
}
.card {
  text-align: center;
}
#img {
  margin: 0 auto;
  width: 300px;
}
</style>
