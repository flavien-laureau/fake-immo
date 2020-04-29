<template>
  <div>
    <header class="admin-header">
      <navbar />
    </header>
    <b-navbar class="sidebar">
      <sidebar />
    </b-navbar>
    <div class="c-body">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/admin/Navbar.vue";
import Sidebar from "@/components/admin/Sidebar.vue";

export default Vue.extend({
  components: {
    Navbar,
    Sidebar
  },
  mounted() {
    // fixes the issue of overlapping of css on different layouts
    const body = document.body;
    body.removeAttribute("class");
    body.classList.add("admin-layout");
  }
});
</script>

<style>
:root {
  --widthSidebar: 256px;
}

body.admin-layout {
  background-color: #ecedef;
}

body.admin-layout .c-body {
  margin-left: var(--widthSidebar);
}

body.admin-layout .admin-header {
  float: right;
  width: calc(100% - var(--widthSidebar));
  margin-bottom: 32px;
}
body.admin-layout .sidebar {
  position: fixed;
  background-color: #303c54;
  height: 100%;
  width: var(--widthSidebar);
  padding: 0;
}
</style>
