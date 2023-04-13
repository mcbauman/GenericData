<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore"
const response = useKeyResponseStore();
const Values=useValueStore()
</script>

<template>
    <!-- <div v-for="element in Values.Response">
        <div v-for="(value, key) in element">
            <span>{{ key }}</span>
            {{ value }}
        </div>
    </div>
    <hr> -->

    <table>
        <tr>
            <th v-for="(value,key) in Values.Response[0]">{{ key }}</th>
        </tr>
        <tr v-for="element in Values.Response">
            <td v-for="(value,key) in element">{{ value }}</td>
        </tr>
    </table>
</template>

<style scoped>
table{
    background-color: var(--maincolor);
    margin-top: 20px;
}
th{
    background-color: var(--maincontrast);
    color: var(--maincolor);
    padding: 10px;
}
td{
    padding:10px
}

</style>