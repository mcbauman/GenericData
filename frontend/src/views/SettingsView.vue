<script setup>
import { useSettingsStore } from '../stores/SettingsStore';
const settings=useSettingsStore()

</script>

<template>
    <section>
        <form>
            <div >
                <span>MainColor</span>
                <input type="color" v-bind:style="settings[Values]">
            </div>
        </form>
    </section>
</template>

<style scoped>
div{
    background-color:v-bind(settings[Values]);
}
</style>