<template>
  <div>
    <h2>Components Basics - Using v-model on Components</h2>

    <slot></slot>

    <input
        v-bind:value="value"
        v-on:input="onInput($event)"
      >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput($event) {
      this.$emit('input', $event.target.value);
    },
  },
};
</script>

<style>

</style>
