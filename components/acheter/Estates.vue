<template>
  <div class="item">
    <figure class="figure-img">
      <img class="img" :src="estate.img" alt="Illustration du bien" />
    </figure>
    <div class="card">
      <nuxt-link to="/acheter/propriété">
        <div class="card-body">
          <h3>{{ estate.title }}</h3>
          <p class="description">{{ estate.description }}</p>
          <p class="rooms">Nombre de pièces: {{ estate.rooms }}</p>
          <p class="price">{{ estate.price }}</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Estates" as string,
  props: ["estate"],
  data() {
    return {};
  }
});
</script>

<style scoped>
/* #articles {
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.item {
  display: flex;
  width: 1140px;
  height: 330px;
  margin: 15px 0;
}

.card {
  width: 100%;
}

.figure-img {
  width: 554px;
  margin: 0;
}

.img {
  object-fit: cover;
  width: 554px;
  height: 100%;
}

@media screen and (max-width: 1201px) {
  .item {
    width: 930px;
  }
  .figure-img {
    width: 464px;
  }

  .img {
    width: 464px;
  }
}

@media screen and (max-width: 991px) {
  .item {
    flex-direction: column;
    width: 100%;
    height: auto;
  }

  .figure-img {
    width: 100%;
  }

  .img {
    width: 100%;
    height: 330px;
  }
}

/* @media screen and (max-width: 767px) {
} */
</style>
