<script setup>
import { ref } from "vue";
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore";
import EnterObject from "./EnterObject.vue";
const Values = useValueStore();

//const Values.Values=ref({verheiratet:false})
const arrayHelper = ref(1);
const response = useKeyResponseStore();

function SubmitFunction() {
  let childObjectKey = response.Keys.find((El) => El.type == "Object").name;
  Values.Values[childObjectKey] = Values.Array;
  console.log("EnterVAlues/Submit/Values.Array", Values.Array);
  console.log("EnterValues/Values.Values", Values.Values);
  Values.storeNewValue();
  Values.Array = [];
  Values.Values = {};
}

response.requestKeyes();
</script>

<template>
  <form>
    <div v-for="item in response.Keys" class="entryWrapper">
      <div class="fieldWrapper">
        <span>{{ item.name }}</span>
        <span v-if="item.type == 'Number'">{{ item.minRange }} - {{ item.maxRange }}</span>
        <input
          class="aThird"
          v-if="item.type == 'String' || item.type == 'Date'"
          :type="item.type"
          v-model="Values.Values[item.name]"
        />
        <input
          class="aThird"
          v-if="item.type == 'Number'"
          type="Number"
          :min="item.minRange"
          :max="item.maxRange"
          v-model="Values.Values[item.name]"
        />
        <input
        class="aThird"
          v-if="item.type == 'Boolean'"
          type="checkbox"
          v-model="Values.Values[item.name]"
        />
        <fieldset class="aThird" v-if="item.type == 'Array'">
          <div v-for="(element, index) in item.arrayOption">
            <input
              type="radio"
              :id="index"
              :name="item.arrayOption"
              :value="element"
              v-model="Values.Values[item.name]"
            />
            <label :for="index">{{ element }}</label>
          </div>
        </fieldset>
        <form class="wholeW" v-if="item.type == 'Object'">
          <div>
            <button @click.prevent="arrayHelper++" class="submit">
              <font-awesome-icon icon="plus" title="Add Data to List" />
              {{ item.name }} hinzufügen
            </button>
            <button @click.prevent="arrayHelper--" class="danger">
              <font-awesome-icon icon="minus" title="Add Data to List" />
              {{ item.name }} entfernen
            </button>
          </div>
          <EnterObject
            v-for="index in arrayHelper"
            :item="item.objectEntries"
            :index="index"
          />
        </form>
      </div>
    </div>
    <button type="submit" @click.prevent="SubmitFunction" class="submit">
      <font-awesome-icon icon="floppy-disk" title="Add key-defenition" />
    </button>
  </form>
</template>
<style scoped>
form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.wholeW{
  flex-direction: column;
  border-radius: 10px;
}
span{
  margin-left: 10px;
}
</style>
