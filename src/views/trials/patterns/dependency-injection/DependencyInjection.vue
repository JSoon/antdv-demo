<template>
  <div>
    <h2>Vue Patterns: Dependency Injection</h2>

    <ParentComponent>
      <ChildComponent>
        <GrandChildComponent>
          GrandChildComponent
        </GrandChildComponent>
      </ChildComponent>
    </ParentComponent>
  </div>
</template>

<script>
import ParentComponent from './ParentComponent.vue';
import ChildComponent from './ChildComponent.vue';
import GrandChildComponent from './GrandChildComponent';

export default {
  components: {
    ParentComponent,
    ChildComponent,
    GrandChildComponent,
  },
};
</script>

<style>

</style>
