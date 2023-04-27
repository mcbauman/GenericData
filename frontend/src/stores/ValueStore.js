import { ref, computed } from "vue";
import { defineStore } from "pinia";
import {userStore} from "./userSettings"

export const useValueStore = defineStore("valueStore", () => {
  const user=userStore()

    const Values = ref({})
    const Array=ref([])
    const Response = ref("HERE IT IS")
    const modal=ref(false)
    const changedValues = ref({})

    function requestValues() {
      fetch("http://localhost:9000/value/getValues",{
        headers:{"authorization":user.token}
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data in ValueStore/RequestValues()",data);
          if(data.message=="jwt expired"){
            localStorage.removeItem("token")
            user.token=false
          }
          else{
            Response.value = data;
          }
        })
        .catch(error => {
          if(error){console.log(error)}
      })
    }
  
    function storeNewValue() {
      console.log("NEW KEYS IN StoreNewKey",Values.value);
      fetch("http://localhost:9000/value/addValues", {
        method: "POST",
        headers: { 
          "content-Type": "application/json",
          "authorization":user.token},
        body: JSON.stringify(Values.value),
      }).then(() => {
        requestValues();
      });
    }
  
    function deleteValue(id) {
      fetch("http://localhost:9000/value/deleteValue", {
        method: "Delete",
        headers: { 
          "content-Type": "application/json",
          "authorization":user.token},
        body: JSON.stringify(id),
      }).then(() => {
        requestValues();
      });
    }

    function updateValue(){
      const childObject={}
      // childObject[objectKeyName]=Array.value
      let objectToSend={...changedValues.value,_id:modal.value._id}
      fetch("http://localhost:9000/value/updateValue", {
        method: "Put",
        headers: { 
          "content-Type": "application/json",
          "authorization":user.token},
        body: JSON.stringify(objectToSend),
      }).then(() => {
        requestValues();
      });
    }

    return { Values, Array, Response, modal, changedValues, requestValues, storeNewValue, deleteValue, updateValue };
  });