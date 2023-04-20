<script setup>
import { useSettingsStore } from '../stores/SettingsStore';
import { ref, onMounted } from 'vue';

const settings=useSettingsStore()
const color=ref("#e0edd4")

function LogTheCurrentColors(){
    console.log("Color", color.value);
    console.log("MainColor",settings.mainColor);
    console.log(typeof (settings.mainColor));
    console.log("MainContrast",settings.mainContrast);
}

function resetColors(){
        settings.setColors();
}
// onMounted(() => {useSettingsStore.setColors}
// , console.log(test))
// settings.setColors();
</script>

<template>
    <section>
        <form>
            <!-- <div :style="{'background-color': settings.mainContrast}"> Anything</div> -->
            <div>
                <span>ContrastColor</span>
                <input type="color" v-model="color">
            </div>
            <div>
                <span>MainColor</span>
                <input type="color" v-model="settings.mainColor">
            </div>
        </form>
    </section>
    <div id="ColoredDiv"></div>
    <button @click="LogTheCurrentColors">log Colors</button>
    <button @click="resetColors">Reset Colors</button>
</template>

<style scoped>
    form{
        background-color: v-bind(color);
    }
</style>