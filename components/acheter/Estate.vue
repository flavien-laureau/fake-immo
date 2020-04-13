<template>
  <section id="articles">
    <article class="article" v-for="(estate, index) in estates" :key="index">
      <figure class="figure-img">
        <img class="img" src="@/assets/imgMaison.jpg" alt="Illustration de du bien" />
      </figure>
      <div class="card">
        <a href="#">
          <div class="card-body">
            <h3>{{ estate.name }}</h3>
            <p class="description">{{ estate.description }}</p>
          </div>
        </a>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Estate",
  data() {
    return {
      estates: [
        {
          name: "Maison 1",
          description: "Petite description",
          prix: "141 000"
        },
        {
          name: "Maison 2",
          description: "Petite description 2Petite description 2",
          prix: "142 000"
        },
        {
          name: "Maison 3",
          description:
            "Petite description 3Petite description 3Petite description 3Petite description 3Petite description 3Petite description 3Petite description 3",
          prix: "143 000"
        }
      ]
    };
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
