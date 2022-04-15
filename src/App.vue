<template>
  <div id="app">
    <potter-head />
    <div id="nav">
      <router-link to="/">Homehunnjin</router-link>
    </div>
    <router-view />
    <potter-footer />
  </div>
</template>

<script>
import potterHead from './components/potter-head.vue'
import potterFooter from './components/potter-footer.vue'

export default{
  components: {
    potterHead,
    potterFooter,
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: arial, Helvetica, sans-serif;
    list-style: none;
  }

  a{
    text-decoration: none;
    color: black;
  }
</style>


