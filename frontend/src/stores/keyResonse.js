import { ref } from "vue";
import { defineStore } from "pinia";
import {userStore} from "./userSettings"



export const useKeyResponseStore = defineStore("keyResponse", () => {
  const user=userStore()
  const Keys = ref([])
  
  // function requestKeyes() {
  //   console.log("user.token", user.token);
  //   const options = {
  //     method: 'GET',
  //     headers: { 
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDQyNzczMDViMjAxMTZjZDkwY2QyYjYiLCJpYXQiOjE2ODI0MDA3NzUsImV4cCI6MTY4MjQ4NzE3NX0.PI6TVDae-D5fQ3lj0cBb2pY6rjc3VhLcQShSoyWX6WI'
  //     },
  //   };
  //   fetch("http://localhost:9000/requestKeys",options)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       Keys.value = data;
  //     });
  // }

  function requestKeyes() {
    const headers={authorization:user.token}
    JSON.stringify(headers)
    fetch("http://localhost:9000/requestKeys",{headers})
      .then((response) => response.json())
      .then((data) => {
        Keys.value = data;
      });
  }

  function storeNewKey(newKeys) {
    console.log("NEW KEYS IN StoreNewKey",newKeys);
    fetch("http://localhost:9000/postKeys", {
      method: "POST",
      headers: { 
        "content-Type": "application/json",
        "authorization":user.token},
      body: JSON.stringify(newKeys),
    }).then(() => {
      requestKeyes();
    });
  }

  function deleteKey(filter) {
    fetch("http://localhost:9000/removeKey", {
      method: "Delete",
      headers: { 
        "content-Type": "application/json",
        "authorization":user.token},
      body: JSON.stringify(filter),
    }).then(() => {
      requestKeyes();
    });
  }

  function updateKey(_id,index) {
    fetch("http://localhost:9000/updateKey", {
      method: "Put",
      headers: { 
        "content-Type": "application/json",
        "authorization":user.token},
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
