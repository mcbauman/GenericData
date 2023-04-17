<script setup>
import { ref } from 'vue';
import { useSettingsStore } from '../stores/SettingsStore';
const settings=useSettingsStore()
const { mainContrast, mainColor }=settings
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