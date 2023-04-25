<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useKeyResponseStore } from "./stores/keyResonse";
import { useValueStore } from "./stores/ValueStore"

const response = useKeyResponseStore();
const Values=useValueStore()

response.requestKeyes();
Values.requestValues();
</script>

<template>
    <header>
      <nav>
        <RouterLink to="/">Define Fields</RouterLink>
        <RouterLink to="/about">Enter Values</RouterLink>
        <RouterLink to="/ShowValues">Show Values</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>