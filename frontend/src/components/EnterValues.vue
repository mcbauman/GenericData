<script setup>
import { ref } from "vue";
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore"
import EnterObject from "./EnterObject.vue";
const Values=useValueStore()

//const Values.Values=ref({verheiratet:false})
const arrayHelper=ref(1)
const response = useKeyResponseStore();


function SubmitFunction(){
  let childObjectKey=response.Keys.find(El=>El.type=="Object").name
  Values.Values[childObjectKey]=Values.Array
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
          v-model="Values.Values[item.name]"
        />
        <input v-if="item.type=='Number'" type="Number" :min="item.minRange" :max="item.maxRange" v-model="Values.Values[item.name]">
        <input v-if="item.type=='Boolean'" type="checkbox" v-model="Values.Values[item.name]">
        <fieldset v-if="item.type=='Array'">
            <div v-for="(element, index) in item.arrayOption">
                <input type="radio" :id="index" :name="item.arrayOption" :value="element" v-model="Values.Values[item.name]"> 
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
            <EnterObject v-for="index in arrayHelper" :item="item.objectEntries" :index="index"/>
        </form>
      </div>
    </div>
    <button type="submit" @click.prevent="SubmitFunction">SEND</button>
  </form>
</template>
