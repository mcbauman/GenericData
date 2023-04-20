<script setup>
import {colorStore} from "../stores/colorSettingsStore"

const colors=colorStore()

function LogTheCurrentColors(){
    console.log("NewColorStrore",colors.maincolor);
    console.log("contrast from new Store", colors.maincontrast);
}

function resetColors(){
        settings.setColors();
}

</script>

<template>
    <section>
        <form>
            <!-- <div :style="{'background-color': settings.mainContrast}"> Anything</div> -->
            <div>
                <span>ContrastColor</span>
                <input type="color" v-model="colors.maincontrast">
            </div>
            <div>
                <span>MainColor</span>
                <input type="color" v-model="colors.maincolor">
            </div>
        </form>
    </section>
    <div id="ColoredDiv"></div>
    <button @click="LogTheCurrentColors">log Colors</button>
    <button @click="resetColors">Reset Colors</button>
</template>

<style scoped>
    form{
        background-color: v-bind(colors.maincolor);
        color:v-bind(colors.maincontrast);
    }
</style>