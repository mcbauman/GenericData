import { ref } from "vue";
import { defineStore } from "pinia";

export const colorStore = defineStore("colorStore", () => {
    const maincolor=ref('#e2dfdb')
    const maincontrast=ref('#002868B3')

    return { maincolor, maincontrast };
});
