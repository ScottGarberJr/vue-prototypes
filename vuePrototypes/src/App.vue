<script setup>

import {RouterView, RouterLink} from "vue-router"  
import Nav from './components/Nav.vue'

</script>
<template>
  <main>
    <Nav />
    <div class="body"><RouterView /></div>
  </main>
</template>

<style scoped>
  main{
    width:100vw;
    /* padding: 0 20px; */
    display: flex;
    flex-direction: column;
  }
 .body{
    margin: 25px auto;
    
 }

</style>
