<template>
  <div class="container-fluid">
    <div class="card" id="form-card">
      <div class="card-body">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form">
          <b-form-group
            label="Adresse Email:"
            label-for="email-input"
            description="Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre."
          >
            <b-form-input id="email-input" v-model="form.email" type="email" required></b-form-input>
          </b-form-group>

          <b-form-group label="Mot de passe:" label-for="password-input">
            <b-form-input id="password-input" type="password" v-model="form.password" required></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Se connecter</b-button>
          <b-button type="reset" variant="danger">Effacer</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "admin-auth",
  layout: "authentication",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(e: any) {
      e.preventDefault();
      this.$store
        .dispatch("admin/login", this.form)
        .then(res => {
          if (res) {
            this.$router.push("/admin-panel");
          }
        })
        .catch(err => console.log(err));
    },
    onReset(e: any) {
      e.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
});
</script>

<style scoped>
#form-card {
  max-width: 600px;
  margin: 0 auto;
}
</style>
