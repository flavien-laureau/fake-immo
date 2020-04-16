<template>
  <section id="articles">
    <article class="article" v-for="(estate, index) in estates" :key="index">
      <figure class="figure-img">
        <img class="img" :src="estate.img" alt="Illustration de du bien" />
      </figure>
      <div class="card">
        <a href="#">
          <div class="card-body">
            <h3>{{ estate.title }}</h3>
            <p class="description">{{ estate.description }}</p>
            <p class="rooms">Nombre de pièces: {{ estate.rooms }}</p>
            <p class="price">{{ estate.price }}</p>
          </div>
        </a>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Estate",
  data() {
    return {
      estates: []
    };
  },
  mounted() {
    axios.get("http://localhost:3000/estate").then((res: any) => {
      console.log("resdata", res.data);
      this.estates = res.data;
    });
  }
});
</script>

<style scoped>
/* #articles {
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.article {
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
  .article {
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
  .article {
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
