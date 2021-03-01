<template>
  <div>
    {{fooDesc}}
    <br>
    {{barDesc}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: 1,
      fooDesc: '',
      bar: {
        a: 1,
      },
      barDesc: '',
    };
  },
  watch: {
    foo(val) {
      this.fooDesc = `foo = ${val}`;
    },
    'bar.a': function barA(val) {
      this.barDesc = `a = ${val}`;
    },
  },
};
</script>

<style>

</style>
