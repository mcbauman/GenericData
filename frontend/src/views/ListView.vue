<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore"
import ShowValues from "../components/ShowValues.vue"

const response = useKeyResponseStore();
const Values=useValueStore()

response.requestKeyes();
Values.requestValues()
</script>

<template>
  <section class="showKeys">
    <ShowValues />
  </section>
  <hr>
</template>
