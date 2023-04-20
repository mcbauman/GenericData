<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore";
import showDetails from "./showDetails.vue";
import { useSettingsStore } from '../stores/SettingsStore';

const settings=useSettingsStore()
const response = useKeyResponseStore();
const Values = useValueStore();
</script>

<template>
  <showDetails v-if="Values.modal" />
  <table>
    <tr>
      <th v-for="item in response.Keys">{{ item.name }}</th>
    </tr>
    <tr v-for="element in Values.Response">
      <td v-for="content in response.Keys" @click="Values.modal = element">
        <div
          v-if="Array.isArray(element[content.name])"
          v-for="obj in element[content.name]"
        >
          <div v-for="(value, key) in obj">
            <span>{{ key }}</span>
            {{ value }}
          </div>
        </div>
        <div v-else>{{ element[content.name] }}</div>
      </td>
    </tr>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  background-color: v-bind(settings.mainColor);
  margin-top: 20px;
  border-collapse: collapse;
}
th {
  background-color: var(--maincontrast);
  color: v-bind(settings.mainColor);
  padding: 10px;
}
td {
  padding: 10px;
  border: 2px solid white;
}

tr:hover {
  background-color: var(--maincontrast);
  color: v-bind(settings.mainColor);
}

p {
  display: flex;
  margin-block: 0;
}
</style>
