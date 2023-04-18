<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore";
const response = useKeyResponseStore();
const Values = useValueStore();
</script>

<template>
  <div v-if="Values.modal" class="modal">
    <div class="modalHeader">
      DETAILANSICHT
      <button @click="Values.modal = false">X</button>
    </div>
    <div class="modalMain">
      <div v-for="element in response.Keys" class="fieldWrapper">
        <span>{{ element.name }}</span>
        <input
          type="text"
          v-model="Values.changedValues[element]"
          :placeholder="Values.modal[element.name]"
        />
      </div>
      <button
        class="danger"
        @click="Values.deleteValue({ _id: Values.modal._id })"
      >
        delete
      </button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  width: 1200px;
  height: 400px;
  position: absolute;
}
.modalHeader {
  background-color: var(--maincontrast);
  color: var(--maincolor);
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.modalMain {
  background-color: var(--maincolor);
  padding: 10px;
  min-height: 100%;
  border-radius: 0 0 10px 10px;
}
</style>
