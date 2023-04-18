<script setup>
import { ref } from "vue";
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore"
const response = useKeyResponseStore();
const Values=useValueStore()
const modal=ref(false)

response.requestKeyes();
</script>

<template>
    <div v-if="modal" class="modal">
        <header>
            DETAILANSICHT
        </header>
        <main>
            <button @click="modal=false">X</button>
            <hr>
            <div v-for="(value, key) in modal">
                <span>{{ key }}</span>
                {{ value }}
            </div>
        </main>
    </div>
    <table>
        <tr>
            <th v-for="item in response.Keys">{{ item.name }}</th>
            <th>actions</th>
        </tr>
        <tr v-for="element in Values.Response">
            <td v-for="content in response.Keys" @click="modal=element">
                <p v-if="Array.isArray(element[content.name])" 
                v-for="obj in element[content.name]">
                    <div v-for="(value, key) in obj">
                        <span>{{ key }}</span>
                        {{ value }}
                    </div>
                </p>
                <p v-else>{{ element[content.name] }}</p>
            </td>
            <td>
                <button class="danger" @click="Values.deleteValue({_id:element._id})">
                    delete
                </button>
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

.modal{
    background-color: var(--maincolor);
    width: 1200px;
    height: 400px;
    position: absolute;
    top: 50px;
}
/* main{
    display: flex;
} */

</style>