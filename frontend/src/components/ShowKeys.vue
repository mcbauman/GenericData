<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";

const response = useKeyResponseStore();
</script>

<template>
  <div v-for="item in response.Keys" class="entryWrapper">
    <div class="fieldWrapper gridName"><span>name:</span>{{ item.name }}</div>
    <div class="fieldWrapper gridType"><span>type:</span>{{ item.type }}</div>
    <div v-if="item.type === 'Number'" class="fieldWrapper gridOptions">
      <span>range:</span>{{ item.minRange }} - {{ item.maxRange }}
    </div>
    <div v-if="item.type === 'Array'" class="fieldWrapper gridOptions">
      <span>Options:</span>
      <div class="row">
        <div v-for="field in item.arrayOption">{{ field }} / </div>
      </div>
    </div>
    <div v-if="item.type === 'Object'" class="fieldWrapper gridOptions">
      <span>Kategorie:</span>
      <div class="row">
        <div v-for="field in item.objectEntries">{{ field }} / </div>
      </div>
    </div>
    <button @click="response.deleteKey(item)" class="danger gridButton">
      <font-awesome-icon icon="trash" />
    </button>
  </div>
</template>

<style scoped>
.entryWrapper {
  display: grid;
  grid-template-columns: 4fr 4fr 12fr 1fr;
  grid-template-areas: "name type options button";
}
.gridName{
  grid-area: name;
}
.gridType{
  grid-area: type;
}
.gridOptions{
  grid-area: options;
}

.gridButton{
  grid-area: button;
  align-items: end;
}
</style>
