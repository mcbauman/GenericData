<script setup>
import { userStore } from "../stores/userSettings";

const user = userStore();

function LogTheCurrentColors() {
  console.log("NewColorStrore", user.maincolor);
  console.log("contrast from new Store", user.maincontrast);
}

function resetColors() {
  user.resetColors();
}
</script>

<template>
  <section>
    <form>
      <div>
        <span>ContrastColor</span>
        <input type="color" v-model="user.maincontrast" />
      </div>
      <div>
        <span>MainColor</span>
        <input type="color" v-model="user.maincolor" />
      </div>
    </form>
    <button @click="resetColors" class="danger">Reset Colors</button>
    <button @click="LogTheCurrentColors" class="callToAction">
      log Colors
    </button>
    <button @click="user.logout" class="danger">Logout</button>
  </section>
</template>

<style scoped></style>
