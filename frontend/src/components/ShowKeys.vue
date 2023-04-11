<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";

const response = useKeyResponseStore();
</script>

<template>
<!-- INPUT KEYS -->
    <section v-for="item in response.Keys">
      <div><span>name:</span>{{ item.name }}</div>
      <div><span>type:</span>{{ item.type }}</div>
    </section>
    <hr>
    <section>
    </section>
</template>