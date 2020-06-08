<template>
  <div class="container">{{ this.$store.state.admin.name }}</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  middleware: "adminAuth",
  layout: "admin",
  data() {
    return {};
  }
});
</script>

<style scoped>
</style>
