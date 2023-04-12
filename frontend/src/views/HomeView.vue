<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";
import DefineKeys from "../components/defineKeys.vue"
import ShowKeys from "../components/ShowKeys.vue"
import EnterValues from "../components/EnterValues.vue";

const response = useKeyResponseStore();

response.requestKeyes();
</script>

<template>
  <section class="showKeys">
    <ShowKeys />
  </section>
  <hr>

  <section class="defineKeys">
    <DefineKeys />
  </section>
  <hr>

  <section>
    <EnterValues/>
  </section>

</template>
