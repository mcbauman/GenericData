import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSettingsStore = defineStore("keyResponse", () => {
  const mainContrast = ref("#e2dfdb")
  const mainColor=ref("#002868b3")
  // const mainContrast = ref("#002868b3")
  // const mainColor=ref("#e2dfdb")

//   function requestKeyes() {
//     fetch("http://localhost:9000/requestSettings")
//       .then((response) => response.json())
//       .then((data) => {
//         Settings.value = data;
//       });
//   }

//   function storeNewKey(newSettings) {
//     console.log("NEW Settings IN StoreNewKey",newSettings);
//     fetch("http://localhost:9000/postSettings", {
//       method: "POST",
//       headers: { "content-Type": "application/json" },
//       body: JSON.stringify(newSettings),
//     }).then(() => {
//       requestKeyes();
//     });
//   }

//   function deleteKey(filter) {
//     fetch("http://localhost:9000/removeKey", {
//       method: "Delete",
//       headers: { "content-Type": "application/json" },
//       body: JSON.stringify(filter),
//     }).then(() => {
//       requestKeyes();
//     });
//   }

//   function updateKey(_id,index) {
//     fetch("http://localhost:9000/updateKey", {
//       method: "Put",
//       headers: { "content-Type": "application/json" },
//       body: JSON.stringify({_id,index}),
//     }).then(() => {
//       console.log("Settings Sortet BE");
//     });
//   }

  return { mainContrast, mainColor };
});
