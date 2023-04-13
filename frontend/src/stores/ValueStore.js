import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useValueStore = defineStore("valueStore", () => {
    const Values = ref({})
    const Array=ref([])
    const Response = ref("HERE IT IS")

    function requestValues() {
      fetch("http://localhost:9000/getValues")
        .then((response) => response.json())
        .then((data) => {
          console.log("Data in ValueStore/RequestValues()",data);
          Response.value = data;
        });
    }
  
    function storeNewValue() {
      console.log("NEW KEYS IN StoreNewKey",Values.value);
      fetch("http://localhost:9000/addValues", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(Values.value),
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
  
    return { Values, Array, Response, requestValues, storeNewValue, deleteValue };
  });