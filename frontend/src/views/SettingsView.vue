<script setup>
import { userStore } from "../stores/userSettings";

const user = userStore();

function LogTheCurrentColors() {
  user.maincolor.length<8?user.maincolor+="B3":""
  user.maincontrast.length<8?user.maincontrast+="B3":""
  user.update({maincontrast:user.maincontrast, maincolor:user.maincolor})
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
      <button @click.prevent="user.resetColors()" class="danger">Reset Colors</button>
      <button @click.prevent="LogTheCurrentColors" class="callToAction">
        log Colors
      </button>
    </form>
  </section>
  <section>
    <button @click="user.logout" class="danger">Logout</button>
  </section>
</template>

<style scoped></style>
