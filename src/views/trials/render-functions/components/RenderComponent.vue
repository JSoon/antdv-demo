<template>
  <div>
    <slot v-bind="{ someProp, }"></slot>
  </div>
</template>

<script>
export default {
  props: {
    someProp: {
      type: Number,
      required: true,
    },
  },
};
</script>
