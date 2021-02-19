<template>
  <a :href="url" target="_blank">
    <slot name="default" v-bind="{ url, }"></slot>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },
};
</script>
