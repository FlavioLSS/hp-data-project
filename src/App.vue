<template>
  <v-app>
      <potter-head />
      <router-view />
      <potter-footer />
  </v-app>
</template>

<script>
import PotterFooter from './components/potter-footer.vue';
import potterHead from './components/potter-head.vue';
export default {
  components: { potterHead, PotterFooter },
  name: "App",
  data(){
    return{
      something: true,
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bitter&family=Cinzel+Decorative&family=Special+Elite&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: arial, Helvetica, sans-serif;
    list-style: none;
    text-transform: none;
  }

  a{
    text-decoration: none;
    color: black;
  }
</style>
