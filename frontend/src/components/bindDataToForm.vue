<script setup>
import { ref } from "vue";
import { useKeyResponseStore } from "../stores/keyResonse";
import { useValueStore } from "../stores/ValueStore";
import EnterObject from "./EnterObject.vue";
const props = defineProps(['variableToDeclare'])

//variableToDeclare=Values.changedValues
//variableToDeclare=Values.Values
const Values = useValueStore();

//const Values.Values=ref({verheiratet:false})
const arrayHelper = ref(1);
const response = useKeyResponseStore();


response.requestKeyes();
</script>

<template>
    <div v-for="item in response.Keys" class="entryWrapper">
      <div class="fieldWrapper">
        <span>{{ item.name }}</span>
<!--  MAKE A FUNCTION -->
        <span v-if="item.type == 'Number'">{{ item.minRange }} - {{ item.maxRange }}</span>
        <input
          class="aThird"
          v-if="item.type == 'String' || item.type == 'Date'"
          :type="item.type"
          v-model="props.variableToDeclare[item.name]"
          :placeholder="Values.modal[item.name]"
        />
        <input
          class="aThird"
          v-if="item.type == 'Number'"
          type="Number"
          :min="item.minRange"
          :max="item.maxRange"
          v-model="props.variableToDeclare[item.name]"
          :placeholder="Values.modal[item.name]"
        />
        <input
        class="aThird"
          v-if="item.type == 'Boolean'"
          type="checkbox"
          v-model="props.variableToDeclare[item.name]"
          :placeholder="Values.modal[item.name]"
        />
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
            :targe="props.variableToDeclare"
          />
        </form>
<!-- END FUNCTION -->
      </div>
    </div>
</template>