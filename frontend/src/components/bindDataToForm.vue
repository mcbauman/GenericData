<script setup>
import { ref } from "vue";
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore";

const props = defineProps(["variableToDeclare"]);
const Values = useValueStore();
const arrHelper = ref(false);
const keyValuePairs = ref({});
const response = useKeyResponseStore();

function savefunction() {
  Values.Array.push(keyValuePairs.value);
  console.log("ArrayToAdd", Values.Array);
  console.log("Values.Array", props.variableToDeclare);
  keyValuePairs.value = {};
  arrHelper.value = false;
}
</script>

<template>
  <div v-for="item in response.Keys" class="entryWrapper">
    <div class="fieldWrapper">
      <span>{{ item.name }}</span>
      <!-- AddOn To Key if Number -->
      <span v-if="item.type == 'Number'"
        >{{ item.minRange }} - {{ item.maxRange }}</span
      >
      <!-- For Input Type String -->
      <input
        class="aThird"
        v-if="item.type == 'String' || item.type == 'Date'"
        :type="item.type"
        v-model="props.variableToDeclare[item.name]"
        :placeholder="Values.modal[item.name]"
      />
      <!-- For Input Type Number -->
      <input
        class="aThird"
        v-if="item.type == 'Number'"
        type="Number"
        :min="item.minRange"
        :max="item.maxRange"
        v-model="props.variableToDeclare[item.name]"
        :placeholder="Values.modal[item.name]"
      />
      <!-- For Input Type Boolean -->
      <input
        class="aThird"
        v-if="item.type == 'Boolean'"
        type="checkbox"
        v-model="props.variableToDeclare[item.name]"
        :placeholder="Values.modal[item.name]"
      />
      <!-- For Input Type Array -->
      <fieldset class="aThird" v-if="item.type == 'Array'">
        <div v-for="(element, index) in item.arrayOption">
          <input
            type="radio"
            :id="index"
            :name="item.arrayOption"
            :value="element"
            v-model="props.variableToDeclare[item.name]"
            :placeholder="Values.modal[item.name]"
          />
          <label :for="index">{{ element }}</label>
        </div>
      </fieldset>
      <form class="wholeW" v-if="item.type == 'Object'">
        <!-- For Input Type Object -->
        <div>
          <button @click.prevent="arrHelper = true" class="submit">
            <font-awesome-icon icon="plus" title="Add Data to List" />
            {{ item.name }} hinzufügen
          </button>
        </div>
        <!-- Add Item to Object -->
        <div class="entryWrapper" v-if="arrHelper">
          <div v-for="elem in item.objectEntries" class="fieldWrapper">
            <span>{{ elem }}</span>
            <input type="text" v-model="keyValuePairs[elem]" />
          </div>
          <button @click.prevent="savefunction" class="submit">
            <font-awesome-icon icon="floppy-disk" title="Add key-defenition" />
          </button>
        </div>
        <!-- Show Items of Object -->
        <div
          v-if="props.variableToDeclare == Values.Values"
          v-for="obj in Values.Array"
        >
          <div v-for="(value, key) in obj">
            <span>{{ key }}</span>
            {{ value }}
          </div>
        </div>
        <div
          v-else-if="props.variableToDeclare == Values.changedValues"
          v-for="obj in Values.modal[item.name]"
        >
          <div v-for="(value, key) in obj">
            <span>{{ key }}</span>
            {{ value }}
          </div>
        </div>
        <div v-else>NOT DEFINED</div>
      </form>
    </div>
  </div>
</template>
