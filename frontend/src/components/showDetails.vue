<script setup>
import { useValueStore } from "../stores/ValueStore";
import BindDataToForm from "./bindDataToForm.vue";

const Values = useValueStore();

function logIt() {
  console.log("Modal", Values.modal);
  console.log("newVAriable", Values.changedValues);
}
</script>

<template>
  <div v-if="Values.modal" class="modal">
    <div class="modalHeader">
      DETAILANSICHT
      <button @click="Values.modal = false">X</button>
    </div>
    <div class="modalMain">
      <BindDataToForm :variableToDeclare="Values.changedValues" />
      <button @click="logIt">logIt</button>
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  min-height: 100%;
  border-radius: 0 0 10px 10px;
}
</style>
