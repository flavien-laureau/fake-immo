<template>
  <section id="articles">
    <article
      class="article"
      v-for="(estate, index) in estatesList"
      :key="index"
    >
      <figure class="figure-img">
        <img class="img" :src="estate.img" alt="Illustration du bien" />
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

/* interface Estate {
  _id: string;
  userId: string;
  title: string;
  type: string;
  description: string;
  rooms: number;
  price: number;
  img: string;
} */

interface Filter {
  type?: string;
  // rooms?: string;
  // price?: string;
}

export default Vue.extend({
  name: "Estate" as string,
  data() {
    return {
      // estates: [] as Estate[],
      filter: {} as Filter
    };
  },
  computed: {
    estatesList() {
      return this.$store.state.estates.estatesList;
    }
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
