<template>
  <div class="container">
    <div class="card">
      <h2>{{ estate.title }}</h2>
      <img id="img" :src="estate.img" />
      <p id="description">{{ estate.description }}</p>
      <p id="price">{{ estate.price }}€</p>
    </div>
    <nuxt-link to="/acheter">
      <button class="button btnPrimary">Retour</button>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    //nuxt method, to= this component. From = last component.
    //next = method that allows you to launch the rest of the rendering by doing what you put in parenthesis
    next(vm => vm.$store.dispatch("estates/fetchEstate", to.params.id));
  },
  computed: {
    estate() {
      return this.$store.state.estates.oneEstate;
    }
  }
});
</script>

<style scoped>
.card {
  text-align: center;
}
#img {
  margin: 0 auto;
  width: 300px;
}
</style>
