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
              <h3 class="info">{{ estate.squareMeters }} m² - {{ estate.rooms }} pièces</h3>
              <p class="city">{{ estate.location.city }}</p>
              <p class="price">{{ estate.price }} €</p>
              <nuxt-link :to="'/acheter/propriété/' + estate._id">
                <b-button size="lg" pill variant="outline-light">En savoir +</b-button>
              </nuxt-link>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>

    <section class="reviews container">
      <h2>Témoignages</h2>
      <h3>Ce que nos clients disent de nous</h3>
      <hr />
      <div class="reviews-wrapper">
        <div class="review-1">
          <div class="review-body">
            <div class="review-profile">
              <div class="review-avatar">
                <img src="@/assets/client-1.jpg" alt="Agence Bréville Immobilier Cabourg" />
              </div>
              <h4 class="name">Léa VARON</h4>
              <div class="location">Dijon</div>
            </div>

            <div class="review-quote">
              <p>Juste deux mots : professionnels et compétents !&nbsp;À la recherche d’un bien sur Dijon, l’équipe de l’agence a su être à l’écoute de ma demande et a trouvé l’appartement qui me correspond. Je ne pouvais espérer mieux. Encore merci à eux.</p>
              <div class="swp-content-locator"></div>
            </div>
          </div>
        </div>

        <div class="review-2">
          <div class="review-body">
            <div class="review-profile">
              <div class="review-avatar">
                <img src="@/assets/client-2.jpg" alt="Agence Bréville Immobilier Cabourg" />
              </div>
              <h4 class="name">Patrick PERIN</h4>
              <div class="location">Plombières-lès-Dijon</div>
            </div>

            <div class="review-quote">
              <p>Je recommande l’agence Fake-immo. Pour notre projet immobilier, notre conseiller a bien cerné notre demande. Il nous a bien informés sur la maison que nous avons visitée ensemble. La maison a été correctement négociée afin que nous l’achetions au prix du marché. Si je devais refaire une transaction, je n’hésiterai pas à m’adresser à cette agence pour son professionnalisme.</p>
              <div class="swp-content-locator"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="info container gray">
      <h2>Informations</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum ea ex doloribus aliquid iste quia atque placeat tenetur asperiores maxime at optio, voluptate saepe eius error, harum fuga architecto!
        Maiores excepturi dolor repudiandae eveniet. Vel, distinctio vero. Est adipisci fuga perspiciatis, rem architecto iste saepe tenetur commodi molestias sint nemo ipsum modi dignissimos molestiae, dolore eveniet quasi necessitatibus obcaecati?
        Laudantium amet vero fuga, labore accusantium hic, ducimus corporis earum in veritatis, ea rem quia sequi? Tempore asperiores, optio facilis aliquam maiores saepe illo obcaecati nostrum, ratione dolor mollitia reprehenderit.
      </p>
    </section>

    <section class="socials container">
      <p>Suivez-nous sur les réseaux</p>
      <img class="socials-icons" src="../assets/facebook.png" alt="facebook" />
      <img class="socials-icons" src="../assets/instagram.png" alt="instagram" />
      <img class="socials-icons" src="../assets/twitter.png" alt="twitter" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  async fetch({ store }) {
    await store.dispatch("estates/fetchEstates");
  },
  mounted() {
    /* style hover card estates */
    const figcaption = document.querySelectorAll("figcaption");

    figcaption.forEach(elt => {
      elt.addEventListener("mouseover", () => {
        let child: any = elt.children;
        child[0].style.opacity = "0";
        child[1].style.opacity = "0";
        child[2].style.opacity = "0";
        child[3].style.opacity = "0";
        child[4].children[0].style.transform = "translate(0, -100%)";
      });
      elt.addEventListener("mouseout", () => {
        let child: any = elt.children;
        child[0].style.opacity = "1";
        child[1].style.opacity = "1";
        child[2].style.opacity = "1";
        child[3].style.opacity = "1";
        child[4].children[0].style.transform = "translate(0, 0)";
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

/* Slogan */
.slogan {
  font-family: "Marck Script", cursive;
  font-size: 2.3rem;
  text-align: center;
}

/* Estimate */
.estimate {
  font-size: 1.4rem;
}

/*Sample */

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

.sample img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  transition: transform 0.2s ease;
}
/*Reviews */
.reviews-wrapper {
  display: flex;
  margin: 30px 0 50px;
}

.review-1,
.review-2 {
  margin: 0 15px;
}

.reviews h2,
.reviews h3 {
  text-align: center;
}

.review-profile .name,
.review-profile .location {
  text-align: right;
}

.review-avatar {
  position: absolute;
}

.review-avatar img {
  position: relative;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
  left: 100px;
  border-radius: 60px;
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.review-quote {
  background-color: #f0ebe8;
  box-shadow: 8px 8px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 40px;
}

/*Social */

.socials {
  font-size: 1.4rem;
  padding: 40px 0;
  text-align: center;
}
.socials-icons {
  width: 60px;
}
/*Info */

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

  .reviews-wrapper {
    display: block;
  }

  .review-1 {
    margin-bottom: 40px;
  }
}
</style>
