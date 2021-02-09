<template>
  <div id="app">
    <AntTable />
  </div>
</template>

<script>
import AntTable from './views/components/AntTable.vue';

export default {
  name: 'App',
  components: {
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
