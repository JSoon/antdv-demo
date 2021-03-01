<template>
  <div>
    <h2>Render Functions: Functional Components</h2>

    <FunctionalComponent
      ref="funcComponentRef"
      :name="name"
      :stateless="stateless"
      :instanceless="instanceless"
    />
  </div>
</template>

<script>
import FunctionalComponent from './components/FunctionalComponent';

export default {
  components: {
    FunctionalComponent,
  },
  data() {
    return {
      name: 'functional-component',
      stateless: true,
      instanceless: true,
    };
  },
  mounted() {
    console.log('this.$refs', this.$refs);
    console.log(this);
  },
};
</script>

<style>

</style>
