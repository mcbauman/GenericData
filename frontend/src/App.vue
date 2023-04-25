<script setup>
import { ref } from 'vue';
import {userStore} from "./stores/userSettings"
import StartPage from "./StartPage.vue"

const loginData=ref({})
const user=userStore()

function loginFunction(){
  console.log("LogInData", loginData.value);
  user.login(loginData.value)
  console.log("TOKEN",user.token);
}

function printToken(){
  console.log(user.token);
}
</script>

<template>
  <StartPage v-if="user.token"/>
  <main v-else>
    <section>
      <form>
        <input type="text" v-model="loginData.name" placeholder="UserName">
        <input type="password" v-model="loginData.password" placeholder="***">
        <button type="submit" @click.prevent="loginFunction">LogIn</button>
      </form>
      <button @click="printToken">SHOWTOKEN</button>
    </section>
  </main>
</template>

<style>
  *{
    --inputs:white;
    --maincolor:v-bind(user.maincolor);
    --maincontrast:v-bind(user.maincontrast);
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
