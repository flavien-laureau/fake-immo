<template>
  <div class="container">
    <h2 class="h2">Nos biens immobiliers</h2>
    <estate-filter />
    <estate />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EstateFilter from "@/components/acheter/Filter.vue";
import Estate from "@/components/acheter/Estate.vue";
export default Vue.extend({
  components: {
    EstateFilter,
    Estate
  },
  async fetch({ store }) {
    await store.dispatch("estates/fetchEstates");
  }
});
</script>

<style>
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
