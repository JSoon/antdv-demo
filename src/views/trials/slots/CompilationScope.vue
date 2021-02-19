<template>
  <div>
    <NavigationLink url="http://jsoon.fun">
      {{ parentScope.url }}
    </NavigationLink>
    <br>
    <NavigationLink url="http://www.baidu.com">
      <template #default="childScope">
        {{ childScope.url }}
      </template>
    </NavigationLink>
  </div>
</template>

<script>
import NavigationLink from './components/NavigationLink.vue';

export default {
  components: {
    NavigationLink,
  },
  data() {
    return {
      parentScope: {
        url: 'http://jsoon.fun',
      },
    };
  },
};
</script>

<style>

</style>
