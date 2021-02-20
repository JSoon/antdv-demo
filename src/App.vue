<template>
  <div id="app">
    <CompilationScope />
    <hr>
    <Basics />
    <hr>
    <AntTable />
  </div>
</template>

<script>
import CompilationScope from './views/trials/slots/CompilationScope.vue';
import Basics from './views/trials/render-functions/Basics.vue';
import AntTable from './views/components/AntTable.vue';

export default {
  name: 'App',
  components: {
    CompilationScope,
    Basics,
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
