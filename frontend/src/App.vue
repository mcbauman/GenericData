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
    --maincolor:rgb(225, 225, 225);
    --maincontrast:rgba(0, 0, 0, 0.7);
  }
  body{
    margin: 0 auto;
    max-width: 1200px;
    background-color: rgb(102, 102, 102);
    font-size: 1.2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  input, select, button{
    padding:10px;
    margin: 5px;
    border-radius: 10px;
    font-size: 1.2rem;
    border: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
    color: var(--maincolor);
  }
  main{

  }
  section{
    /* display: flex;
    justify-content: space-between; */
  }

  .entryWrapper{
    display: flex;
    flex-direction: row;
    background-color: var(--maincolor);
    color: var(--maincontrast);
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
    font-size: 0.5rem;
  }
  button{
    background-color: var(--maincontrast);
    color: var(--maincolor);
  }
</style>
