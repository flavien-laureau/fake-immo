<template>
  <b-form class="form-filter">
    <b-form-select v-model="typeSelected" :options="type"></b-form-select>
    <b-form-select v-model="roomsSelected" :options="rooms"></b-form-select>
    <b-form-select v-model="budgetSelected" :options="budget"></b-form-select>
  </b-form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "EstateFilter",
  data() {
    return {
      typeSelected: "all",
      type: [
        { value: "all", text: "Type de bien" },
        { value: "maison", text: "Maison" },
        { value: "appartement", text: "Appartement" }
      ],
      roomsSelected: "all",
      rooms: [
        { value: "all", text: "Nombre de pièces" },
        { value: "1", text: "1" },
        { value: "2", text: "2" },
        { value: "3", text: "3" },
        { value: "4", text: "4" },
        { value: "5", text: "5" },
        { value: "6", text: "6 et +" }
      ],
      budgetSelected: "all",
      budget: [
        { value: "all", text: "Budget" },
        { value: "1", text: "< 150 000" },
        { value: "2", text: "< 250 000" },
        { value: "3", text: "< 350 000" },
        { value: "4", text: "< 450 000" },
        { value: "5", text: "< 550 000" },
        { value: "6", text: "550 000 et +" }
      ]
    };
  }
});
</script>

<style scoped>
.form-filter {
  width: 450px;
}

.custom-select {
  text-align-last: center;
}

@media screen and (max-width: 1201px) {
  /* .form-filter {
    width: 930px;
  } */
}

@media screen and (max-width: 991px) {
  .form-filter {
    width: 100%;
  }
}
</style>