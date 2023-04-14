<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";
import DefineKeys from "../components/defineKeys.vue"
import ShowKeys from "../components/ShowKeys.vue"

const response = useKeyResponseStore();

response.requestKeyes();
</script>

<template>

<section class="defineKeys">
    <DefineKeys />
  </section>
  <hr>

  <section class="showKeys">
    <ShowKeys />
  </section>
  <hr>

</template>

<style scoped>

</style>