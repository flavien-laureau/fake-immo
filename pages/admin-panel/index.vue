<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-body">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          quisquam quidem. Expedita, sed quo alias illum sit neque cumque
          voluptas in molestias facere! Nam aspernatur necessitatibus repellat
          perspiciatis, eligendi aliquam.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          quisquam quidem. Expedita, sed quo alias illum sit neque cumque
          voluptas in molestias facere! Nam aspernatur necessitatibus repellat
          perspiciatis, eligendi aliquam.
        </p>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          quisquam quidem. Expedita, sed quo alias illum sit neque cumque
          voluptas in molestias facere! Nam aspernatur necessitatibus repellat
          perspiciatis, eligendi aliquam.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          quisquam quidem. Expedita, sed quo alias illum sit neque cumque
          voluptas in molestias facere! Nam aspernatur necessitatibus repellat
          perspiciatis, eligendi aliquam.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          quisquam quidem. Expedita, sed quo alias illum sit neque cumque
          voluptas in molestias facere! Nam aspernatur necessitatibus repellat
          perspiciatis, eligendi aliquam.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "admin-panel",
  layout: "admin",
  middleware: "adminAuth"
});
</script>

<style scoped>
.container-fluid {
  padding: 0 30px;
}
.card {
  width: 100%;
  margin-bottom: 24px;
}
</style>
