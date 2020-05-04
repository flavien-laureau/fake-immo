<template>
  <div class="container">
    <h2 class="h2">Nos biens immobiliers</h2>
    <estate-filter />
    <section id="articles">
      <article class="article" v-for="estate in getFilterEstates" :key="estate._id">
        <estates :estate="estate" />
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import EstateFilter from "@/components/acheter/Filter.vue";
import Estates from "@/components/acheter/Estates.vue";

export default Vue.extend({
  components: {
    EstateFilter,
    Estates
  },
  async fetch({ store }) {
    await store.dispatch("estates/fetchEstates");
  },
  computed: {
    ...mapGetters("estates", ["getFilterEstates"])
  }
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.h2 {
  text-align: center;
  font-family: "Baloo Paaji 2", cursive;
  font-weight: 500;
  font-size: 2.2rem;
  text-transform: uppercase;
}
</style>
