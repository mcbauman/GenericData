import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useKeyResponseStore = defineStore("keyResponse", () => {
  const Keys = ref([])
  
  function requestKeyes() {
    fetch("http://localhost:9000/requestKeys")
      .then((response) => response.json())
      .then((data) => {
        Keys.value = data;
      });
  }

  function storeNewKey(newKeys) {
    console.log("NEW KEYS IN StoreNewKey",newKeys);
    fetch("http://localhost:9000/postKeys", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newKeys),
    }).then(() => {
      requestKeyes();
    });
  }

  function deleteKey(filter) {
    fetch("http://localhost:9000/removeKey", {
      method: "Delete",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(filter),
    }).then(() => {
      requestKeyes();
    });
  }

  function updateKey(_id,index) {
    fetch("http://localhost:9000/updateKey", {
      method: "Put",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({_id,index}),
    }).then(() => {
      console.log("KEYS Sortet BE");
    });
  }

  function moveItemToIndex(itemIndex, newIndex, _id) {
    const cutted = Keys.value.splice(itemIndex, 1);
    Keys.value.splice(newIndex, 0, cutted[0]);
    updateKey(_id,newIndex)
  }

  return { Keys, requestKeyes, storeNewKey, deleteKey, moveItemToIndex };
});
