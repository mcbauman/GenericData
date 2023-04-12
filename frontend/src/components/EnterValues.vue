<script setup>
import { useKeyResponseStore } from "../stores/keyResonse";

const response = useKeyResponseStore();
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
        />
        <input v-if="item.type=='Number'" :type="item.type" :min="item.minRange" :max="item.maxRange">
        <input v-if="item.type=='Boolean'" type="checkbox">
        <fieldset v-if="item.type=='Array'">
            <div v-for="(element, index) in item.arrayOption">
                <input type="radio" :id="index" :name="item.arrayOption"> 
                <label :for="index">{{ element }}</label>
            </div>
        </fieldset>
        <form v-if="item.type=='Object'">
            <div class="entryWrapper">
                <div v-for="element in item.objectEntries" class="fieldWrapper">
                    <span>{{ element }}</span>
                    <input type="text">
                </div>
            </div>
        </form>
      </div>
    </div>
  </form>
</template>
