<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useKeyResponseStore } from "./stores/keyResonse";
import { useValueStore } from "./stores/ValueStore"
import {colorStore} from "./stores/colorSettingsStore"

const response = useKeyResponseStore();
const colors=colorStore()
const Values=useValueStore()

response.requestKeyes();
Values.requestValues()
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Define Fields</RouterLink>
        <RouterLink to="/about">Enter Values</RouterLink>
        <RouterLink to="/ShowValues">Show Values</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
  *{
    --inputs:white;
    --maincolor:v-bind(colors.maincolor);
    --maincontrast:v-bind(colors.maincontrast);
    --danger:rgb(200, 30, 30);
    --warning:rgb(179, 129, 36);
    --submit:rgb(113, 155, 29);
    --background:rgb(20,20,20,0.2);
  }
  body{
    margin: 0 auto;
    max-width: 1200px;
    background-image: url("./assets/pic2.jpg");
    background-size: cover;
    background-color: var(--background);
    font-size: 1.2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  input, select, button, fieldset{
    padding:10px;
    margin: 5px;
    font-size: 1.2rem;
    border: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  input, select, fieldset{
    border-radius: 10px;
    background-color: var(--inputs);
  }
  header{
    background-color: var(--maincontrast);
    color: var(--maincolor);
  }
  nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  header>nav>a{
    padding: 20px;
    color: var(--maincolor);
  }
  .router-link-active{
    color:white
  }

  section{
    background-color: var(--maincolor);
    color: var(--maincontrast);
    padding: 10px;
  }

  .entryWrapper{
    background-color: var(--maincolor);
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 0 5px black;
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
  }

  .fieldWrapper{
    display: flex;
    flex-direction: column;
    margin: 5px;
  }
  .row{
    display: flex;
    flex-direction: row;
  }
  span, label{
    font-size: 0.7rem;
  }
  button{
    margin-left: 20px;
    border-radius: 45px;
    height: 45px;
    min-width: 45px;
    width: fit-content;
  }

  .danger{
    color: var(--danger);
  }
  .warning{
    color: var(--warning);
  }
  .submit{
    color: var(--submit);
  }
  .callToAction{
    background-color: var(--submit);
    color: var(--maincolor);
  }

  .entryWrapper:hover, button:hover, a:hover{
    box-shadow: 0 2px 3px black inset;
  }

  .callToAction:hover{
    color: black;
    /* background-color: var(--maincolor); */
  }

  .danger:hover{
    background-color: var(--danger);
    color: var(--maincolor);
  }

  .warning:hover{
    background-color: var(--warning);
    color: var(--maincolor);
  }

  .submit:hover{
    background-color: var(--submit);
    color: var(--maincolor);
  }

  .entryWrapper, button, a{
    transition: 0.5s;
  }
</style>
