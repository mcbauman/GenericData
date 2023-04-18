<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore"
import showDetails from "./ShowDetails.vue"
const response = useKeyResponseStore();
const Values=useValueStore()

response.requestKeyes();
</script>

<template>
    <showDetails/>
    <table>
        <tr>
            <th v-for="item in response.Keys">{{ item.name }}</th>
        </tr>
        <tr v-for="element in Values.Response">
            <td v-for="content in response.Keys" @click="Values.modal=element">
                <p v-if="Array.isArray(element[content.name])" 
                v-for="obj in element[content.name]">
                    <div v-for="(value, key) in obj">
                        <span>{{ key }}</span>
                        {{ value }}
                    </div>
                </p>
                <p v-else>{{ element[content.name] }}</p>
            </td>
        </tr>
    </table>
</template>

<style scoped>
table{
    background-color: var(--maincolor);
    margin-top: 20px;
    border-collapse: collapse;
}
th{
    background-color: var(--maincontrast);
    color: var(--maincolor);
    padding: 10px;
}
td{
    padding:10px;
    border:2px solid white;
}

tr:hover{
    background-color: var(--maincontrast);
    color: var(--maincolor); 
}

p{
    display: flex;
    margin-block: 0;
}
</style>