<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
  *{
    --maincolor:rgba(255, 255, 255, 1);
    --maincontrast:rgba(0, 0, 0, 0.7);
  }
  body{
    margin: 0 auto;
    max-width: 1200px;
    background-color: antiquewhite;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  header{
    background-color: var(--maincontrast);
    color: var(--maincolor);
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
    padding: 10px;
    border-radius: 10px;
  }

  .fieldWrapper{
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
  .row{
    display: flex;
    flex-direction: row;
  }
  span{
    font-size: 0.5rem;
  }
</style>
