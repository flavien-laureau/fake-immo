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
        { value: "house", text: "Maison" },
        { value: "apartment", text: "Appartement" }
      ],
      roomsSelected: "all",
      rooms: [
        { value: "all", text: "Nombre de pièces" },
        { value: "1", text: "1 - 2" },
        { value: "2", text: "2 - 3" },
        { value: "3", text: "3 - 4" },
        { value: "4", text: "4 - 5" },
        { value: "5", text: "5 - 6" },
        { value: "6", text: "6 et +" }
      ],
      budgetSelected: "all",
      budget: [
        { value: "all", text: "Budget" },
        { value: "150000", text: "< 150 000" },
        { value: "250000", text: "< 250 000" },
        { value: "350000", text: "< 350 000" },
        { value: "450000", text: "< 450 000" },
        { value: "550000", text: "< 550 000" },
        { value: "550000+", text: "550 000 et +" }
      ]
    };
  },
  watch: {
    typeSelected() {
      this.dispatchFilter();
    },
    roomsSelected() {
      this.dispatchFilter();
    },
    budgetSelected() {
      this.dispatchFilter();
    }
  },
  methods: {
    dispatchFilter() {
      this.$store.dispatch("estates/setFilter", {
        type: this.typeSelected,
        rooms: this.roomsSelected,
        budget: this.budgetSelected
      });
    }
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

@media screen and (max-width: 1199px) {
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