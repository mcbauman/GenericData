import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const userStore = defineStore("userStore", () => {
  const user = ref({});
  const maincolor = ref("#e2dfdbB3");
  const maincontrast = ref("#002868B3");
  const tokenFromLS = localStorage.getItem("token");
  const tokenDefault = tokenFromLS ? tokenFromLS : null;
  const token = ref(tokenDefault);

  function resetColors() {
    maincolor.value = "#e2dfdbB3";
    maincontrast.value = "#002868B3";
  }

  function login(user) {
    console.log("NEW KEYS IN StoreNewKey", user);
    fetch("http://localhost:9000/login", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        token.value = data;
        localStorage.setItem("token", data);
      });
  }

  function create(user){
    fetch("http://localhost:9000/createUser", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(() => console.log("userCreated"))
  }

  function logout() {
    token.value = null;
    localStorage.removeItem("token");
  }

  function storeColors() {}

  return { user, maincolor, maincontrast, login, resetColors, token, logout, create };
});
