<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <AntTable />
  </div>
</template>

<script>
// import HelloWorld from './views/components/HelloWorld.vue';
import AntTable from './views/components/AntTable.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    AntTable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
