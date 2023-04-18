import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useValueStore = defineStore("valueStore", () => {
    const Values = ref({})
    const Array=ref([])
    const Response = ref("HERE IT IS")
    const modal=ref(false)
    const changedValues = ref({})

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
  
    function deleteValue(id) {
      fetch("http://localhost:9000/deleteValue", {
        method: "Delete",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(id),
      }).then(() => {
        requestValues();
      });
    }

    return { Values, Array, Response, modal, changedValues, requestValues, storeNewValue, deleteValue };
  });