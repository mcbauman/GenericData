<script setup>
import { ref } from "vue";
import { useValueStore } from "../stores/ValueStore";

const props = defineProps(["item", "index", "target"]);
const Values = useValueStore();
const keyValuePairs = ref({});

function savefunction() {
  Values.Array.push(keyValuePairs.value);
  console.log("Values.Array", props.target);
}
</script>
<template>
  <div class="entryWrapper">
    <div v-for="elem in props.item" class="fieldWrapper">
      <span>{{ elem }}</span>
      <input type="text" v-model="keyValuePairs[elem]" />
    </div>
    <button @click.prevent="savefunction" class="submit">
      <font-awesome-icon icon="floppy-disk" title="Add key-defenition" />
    </button>
  </div>
</template>

<style scoped>
.entryWrapper {
  flex-wrap: wrap;
}
</style>
