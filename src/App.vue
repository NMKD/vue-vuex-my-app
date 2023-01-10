<template>
  <div id="app" class="container m-5">
    <v-counter />
    <v-buttons />
  </div>
</template>

<script>
import VCounter from './components/Counter.vue'
import VButtons from './components/Buttons.vue'
export default {
  name: 'App',
  components: {
    VCounter,
    VButtons
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
