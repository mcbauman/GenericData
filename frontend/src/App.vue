<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Define Fields</RouterLink>
        <RouterLink to="/about">Enter Values</RouterLink>
        <RouterLink to="/ShowValues">Show Values</RouterLink>
      </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
  *{
    --inputs:white;
    --maincolor:rgb(226, 223, 219,1);
    --maincontrast:rgba(80, 19, 19, 0.7);
    --danger:rgb(200, 30, 30);
    --warning:rgb(179, 129, 36);
    --submit:rgb(113, 155, 29);
    --background:rgb(50,20,20,0.2);
  }
  body{
    margin: 0 auto;
    max-width: 1200px;
    background-color: var(--background);
    font-size: 1.2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  input, select, button,fieldset{
    padding:10px;
    margin: 5px;
    font-size: 1.2rem;
    border: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  input, select,fieldset{
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
    margin: 20px;
    color: var(--maincolor);
  }
  main{

  }
  section{
    /* display: flex;
    justify-content: space-between; */
    background-color: var(--maincolor);
    color: var(--maincontrast);
    padding: 10px;
  }

  .entryWrapper{
    display: flex;
    flex-direction: row;
    align-items: end;
    box-shadow: 0 0 5px var(--maincontrast);
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
  span{
    font-size: 0.7rem;
  }
  button{
    margin-left: 20px;
    border-radius: 45px;
    height: 45px;
    min-width: 45px;
    width: fit-content;
    background-color: var(--maincontrast);
    color: var(--maincolor);
  }

  .danger{
    background-color: var(--danger);
  }
  .warning{
    background-color: var(--warning);
  }
  .submit{
    background-color: var(--submit);
  }
</style>
