<script setup>
import {colorStore} from "../stores/colorSettingsStore"

const colors=colorStore()

function LogTheCurrentColors(){
    console.log("NewColorStrore",colors.maincolor);
    console.log("contrast from new Store", colors.maincontrast);
}

function resetColors(){
    colors.resetColors()
}
</script>

<template>
    <section>
        <form>
            <div>
                <span>ContrastColor</span>
                <input type="color" v-model="colors.maincontrast">
            </div>
            <div>
                <span>MainColor</span>
                <input type="color" v-model="colors.maincolor">
            </div>
        </form>
    <button @click="resetColors" class="danger" >Reset Colors</button>
    <button @click="LogTheCurrentColors" class="callToAction">log Colors</button>
    </section>
</template>

<style scoped>
</style>