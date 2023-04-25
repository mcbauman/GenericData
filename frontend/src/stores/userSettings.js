import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const userStore = defineStore("userStore", () => {
    const user=ref({})
    const maincolor=ref('#e2dfdbB3')
    const maincontrast=ref('#002868B3')
    const token=ref()

    function resetColors(){
        maincolor.value='#e2dfdbB3'
        maincontrast.value='#002868B3'
    }

    function login(user) {
    console.log("NEW KEYS IN StoreNewKey",user);
    fetch("http://localhost:9000/login", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(user),
    })
    .then((response) => response.json())
    .then((data) =>  {
      console.log("DATA",data);
      token.value=data
    });
  }

    function storeColors(){

    }

    return { user, maincolor, maincontrast, login, resetColors, token };
});
