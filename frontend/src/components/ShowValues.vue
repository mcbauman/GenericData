<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore"
const response = useKeyResponseStore();
const Values=useValueStore()
</script>

<template>
    <div v-for="element in Values.Response">
        <div v-for="(value, key) in element">
            <span>{{ key }}</span>
            {{ value }}
        </div>
    </div>
</template>