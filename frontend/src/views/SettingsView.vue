<script setup>
import { useSettingsStore } from '../stores/SettingsStore';
import { useKeyResponseStore } from "../stores/keyResonse";

const response = useKeyResponseStore();
const settings=useSettingsStore()
const { mainContrast, mainColor }=settings


response.requestKeyes();
</script>

<template>
    <section>
        <form>
            <div :style="{'background-color': settings.mainContrast}">
                <span>ContrastColor</span>
                <input type="color" v-model="settings.mainContrast">
            </div>
            <div :style="{'background-color': settings.mainColor}">
                <span>MainColor</span>
                <input type="color" v-model="settings.mainColor">
            </div>
        </form>
    </section>
</template>

<style scoped>
section{
    background-color: v-bind(mainContrast);
}
</style>