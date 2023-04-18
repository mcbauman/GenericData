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
  <div class="modal">
    <div class="modalContent">
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
  </div>
</template>

<style scoped>
.modal {
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(10px);
}
.modalContent{
  max-width: 1000px;
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
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  padding: 10px;
  border-radius: 0 0 10px 10px;
}
</style>
