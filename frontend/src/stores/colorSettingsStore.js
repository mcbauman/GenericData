import { ref } from "vue";
import { defineStore } from "pinia";

export const colorStore = defineStore("colorStore", () => {
    const maincolor=ref('#e2dfdbB3')
    const maincontrast=ref('#002868B3')

    function resetColors(){
        maincolor.value='#e2dfdbB3'
        maincontrast.value='#002868B3'
    }

    function storeColors(){

    }

    return { maincolor, maincontrast, resetColors };
});
