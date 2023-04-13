<script setup>
import { ref } from "vue";
import { useValueStore } from "../stores/ValueStore"
const props = defineProps(['item','index'])
const Values= useValueStore()
const keyValuePairs=ref({})

function savefunction(){
    Values.Array.push(keyValuePairs.value)
}

</script>
<template>
    <div class="entryWrapper">
        <div v-for="elem in props.item" class="fieldWrapper">
            <span>{{ elem }}</span>
            <input type="text" v-model=keyValuePairs[elem]>
        </div>
        <button @click.prevent="savefunction">save</button>  
    </div>
</template>