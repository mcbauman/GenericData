<script setup>
import { ref } from "vue";
import { useKeyResponseStore } from "../stores/keyResonse";

const newObject=ref({verheiratet:false})
const arrayHelper=ref(1)
const keyValuePairs=ref({})
const childArrayOfObjects=ref([])
const response = useKeyResponseStore();


function addKeyValueToArray(){
  childArrayOfObjects.value.push(keyValuePairs.value)
}
function SubmitFunction(){
  childArrayOfObjects.value.push(keyValuePairs.value)
  // newObject.value={...newObject.value,definitions:response.Keys}
  console.log("NEWOBJECTVALUE",newObject.value);
  console.log("CHILDAOO", childArrayOfObjects.value);
}
</script>

<template>
  <form>
    <div v-for="item in response.Keys" class="entryWrapper">
      <div class="fieldWrapper">
        <span>{{ item.name }}</span>
        <span v-if="item.type=='Number'">{{ item.minRange }} - {{ item.maxRange }}</span>
        <input
          v-if="
            item.type == 'String' ||
            item.type == 'Date'
          "
          :type="item.type"
          v-model="newObject[item.name]"
        />
        <input v-if="item.type=='Number'" type="Number" :min="item.minRange" :max="item.maxRange" v-model="newObject[item.name]">
        <input v-if="item.type=='Boolean'" type="checkbox" v-model="newObject[item.name]">
        <fieldset v-if="item.type=='Array'">
            <div v-for="(element, index) in item.arrayOption">
                <input type="radio" :id="index" :name="item.arrayOption" :value="element" v-model="newObject[item.name]"> 
                <label :for="index">{{ element }}</label>
            </div>
        </fieldset>
        <form v-if="item.type=='Object'">
            <button @click.prevent="arrayHelper++">{{ item.name }} hinzufügen</button>
            <button @click.prevent="arrayHelper--">{{ item.name }} entfernen</button>
            <!-- <div v-for="n in arrayHelper" class="entryWrapper">
                <div v-for="elem in item.objectEntries" class="fieldWrapper">
                    <span>{{ elem }}</span>
                    <input type="text" v-model=childArrayOfObjects[n-1]>
                </div>
            </div> -->
            <div v-for="(n,index) in arrayHelper" class="entryWrapper">

                <div v-for="elem in item.objectEntries" class="fieldWrapper">
                    <span>{{ elem }}</span>
                    <input type="text" v-model=keyValuePairs[elem]>
                </div>
                
            </div>
        </form>
      </div>
    </div>
    <button type="submit" @click.prevent="SubmitFunction">SEND</button>
  </form>
</template>
