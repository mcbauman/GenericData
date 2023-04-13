import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useValueStore = defineStore("valueStore", () => {
    const Values = ref({})
    const Array=ref([])
    function requestValues() {
      fetch("http://localhost:9000/requestValues")
        .then((response) => response.json())
        .then((data) => {
          Keys.value = data;
        });
    }
  
    function storeNewValue(newValue) {
      console.log("NEW KEYS IN StoreNewKey",newValue);
      fetch("http://localhost:9000/postValues", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(newValues),
      }).then(() => {
        requestValues();
      });
    }
  
    function deleteValue(filter) {
      fetch("http://localhost:9000/removeValues", {
        method: "Delete",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(filter),
      }).then(() => {
        requestValues();
      });
    }
  
    return { Values, Array, requestValues, storeNewValue, deleteValue };
  });