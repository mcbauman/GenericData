<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";

const response = useKeyResponseStore();
</script>

<template>
  <!-- INPUT KEYS -->
  <div v-for="item in response.Keys" class="entryWrapper">
    <div class="fieldWrapper"><span>name:</span>{{ item.name }}</div>
    <div class="fieldWrapper"><span>type:</span>{{ item.type }}</div>
    <div v-if="item.type === 'Number'" class="fieldWrapper">
      <span>range:</span>{{ item.minRange }} - {{ item.maxRange }}
    </div>
    <div v-if="item.type === 'Array'" class="fieldWrapper">
      <span>Options:</span>
      <div class="row">
        <div v-for="field in item.arrayOption">{{ field }}</div>
      </div>
    </div>
    <div v-if="item.type === 'Object'" class="fieldWrapper">
      <span>Kategorie:</span>
      <div class="row">
        <div v-for="field in item.objectEntries">{{ field }}</div>
      </div>
    </div>
  </div>
</template>
