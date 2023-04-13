<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";
import EnterValues from "../components/EnterValues.vue";
const response = useKeyResponseStore();
response.requestKeyes();
</script>

<template>
  <section>
    <EnterValues/>
  </section>
</template>

<style>

</style>
