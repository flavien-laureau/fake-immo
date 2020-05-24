<template>
  <div class="main">
    <section class="slogan container">
      <p>Fake-immo, fausse agence immobilière, site web à but démonstratif !</p>
    </section>

    <section class="estimate container gray">
      <p>Fake-immo vous propose une estimation gratuite et sans engagement</p>
      <nuxt-link to="/contact">
        <b-button variant="success">Contactez-nous !</b-button>
      </nuxt-link>
    </section>

    <section class="sample container">
      <ul class="list">
        <li v-for="estate in estatesList.slice(0, 5)" :key="estate._id">
          <figure>
            <div class="img-container">
              <img :src="estate.img" />
            </div>

            <figcaption class="t">
              <h3 class="type" v-if="estate.type === 'house'">Maison</h3>
              <h3 class="type" v-if="estate.type === 'apartment'">Appartement</h3>
              <h3 class="info">{{ estate.title }} - {{ estate.rooms }} pièces</h3>
              <p class="price">{{ estate.price }} €</p>
              <nuxt-link :to="'/acheter/propriété/' + estate._id">
                <b-button size="lg" pill variant="outline-light">En savoir +</b-button>
              </nuxt-link>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>

    <section class="socials container">
      <p>Suivez-nous sur les réseaux</p>
      <img class="socials-icons" src="../assets/facebook.png" alt="facebook" />
      <img class="socials-icons" src="../assets/instagram.png" alt="instagram" />
      <img class="socials-icons" src="../assets/twitter.png" alt="twitter" />
    </section>

    <section class="info container gray">
      <h2>Informations</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum ea ex doloribus aliquid iste quia atque placeat tenetur asperiores maxime at optio, voluptate saepe eius error, harum fuga architecto!
        Maiores excepturi dolor repudiandae eveniet. Vel, distinctio vero. Est adipisci fuga perspiciatis, rem architecto iste saepe tenetur commodi molestias sint nemo ipsum modi dignissimos molestiae, dolore eveniet quasi necessitatibus obcaecati?
        Laudantium amet vero fuga, labore accusantium hic, ducimus corporis earum in veritatis, ea rem quia sequi? Tempore asperiores, optio facilis aliquam maiores saepe illo obcaecati nostrum, ratione dolor mollitia reprehenderit.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  mounted() {
    /* style hover card estates */
    const figcaption = document.querySelectorAll("figcaption");

    figcaption.forEach(elt => {
      elt.addEventListener("mouseover", () => {
        let child: any = elt.children;
        child[0].style.opacity = "0";
        child[1].style.opacity = "0";
        child[2].style.opacity = "0";
        child[3].children[0].style.transform = "translate(0, -100%)";
      });
      elt.addEventListener("mouseout", () => {
        let child: any = elt.children;
        child[0].style.opacity = "1";
        child[1].style.opacity = "1";
        child[2].style.opacity = "1";
        child[3].children[0].style.transform = "translate(0, 0)";
      });
    });
  },
  computed: {
    ...mapState("estates", ["estatesList"])
  }
});
</script>

<style scoped>
.gray {
  padding: 40px 0;
  text-align: center;
  background-color: #f0ebe9;
  max-width: 100%;
}

.slogan {
  font-family: "Marck Script", cursive;
  font-size: 2.3rem;
  text-align: center;
}

.estimate {
  font-size: 1.4rem;
}

.sample {
  padding: 40px 0;
  max-width: 100%;
  color: white;
}

.sample .list {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
}

.sample li {
  position: relative;
  width: 20%;
  height: 300px;
}

.img-container {
  height: 100%;
}

figure:before {
  content: "\A";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 47, 73, 0.45);
  opacity: 1;
  transition: all 0.5s;
}

figure:hover:before {
  opacity: 0;
}

.sample figure {
  position: relative;
  margin: 0;
  height: 100%;
}

.sample img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sample figcaption {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;
  padding-top: 25px;
  width: 100%;
  height: 100%;

  font-size: 1.5rem;
}

.sample figcaption .info,
.sample figcaption .price {
  margin-top: 20px;
  white-space: nowrap;
}

.sample figcaption .btn {
  text-transform: uppercase;
  border-width: 2px;
  letter-spacing: 1px;
  padding: 12px 24px;
  margin-top: 20px;
  transition: transform 0.2s ease;
}

.socials {
  font-size: 1.4rem;
  padding: 40px 0;
  text-align: center;
}
.socials-icons {
  width: 60px;
}

.info p {
  margin: 0 auto;
  max-width: 1140px;
}
.info h2 {
  margin-bottom: 25px;
}
/* 
@media screen and (max-width: 1199px) {
  .info p {
    width: 75%;
  }
}*/

@media screen and (max-width: 991px) {
  .sample .list {
    flex-direction: column;
  }
  .sample li {
    width: 100%;
  }
}
</style>
