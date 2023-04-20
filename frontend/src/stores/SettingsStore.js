import { ref } from "vue";
import { defineStore } from "pinia";

export const useSettingsStore = defineStore("keyResponse", () => {
  const mainContrast = ref("#e0edd4")
  const mainColor=ref(0)

  function setColors(){
    mainColor.value="#e0edd4"
    mainContrast.value="#38571a"
  }

  return { mainContrast, mainColor, setColors, test };
});
