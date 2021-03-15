<template>
  <div id="app">
    <demo />
    <hr>
    <ChangeDetectionCaveats />
    <hr>
    <CompilationScope />
    <hr>
    <Basics />
    <hr>
    <FunctionalComponents />
    <hr>
    <TemplateCompilation />
    <hr>
    <CustomInput
      :value="customInputValue"
      @input="onCustomInput"
    >
      <div>{{ customInputValue }}</div>
    </CustomInput>
    <hr>
    <DependencyInjection />
    <hr>
    <AntTable />
  </div>
</template>

<script>
import demo from './views/demo.vue';
import ChangeDetectionCaveats from './views/trials/reactivity-in-depth/ChangeDetectionCaveats.vue';
import CompilationScope from './views/trials/slots/CompilationScope.vue';
import Basics from './views/trials/render-functions/Basics.vue';
import FunctionalComponents from './views/trials/render-functions/FunctionalComponents.vue';
import TemplateCompilation from './views/trials/render-functions/TemplateCompilation.vue';
import CustomInput from './views/trials/custom-input/CustomInput.vue';
import DependencyInjection from './views/trials/patterns/dependency-injection/DependencyInjection.vue';
import AntTable from './views/components/AntTable.vue';

export default {
  name: 'App',
  components: {
    demo,
    ChangeDetectionCaveats,
    CompilationScope,
    Basics,
    FunctionalComponents,
    TemplateCompilation,
    CustomInput,
    DependencyInjection,
    AntTable,
  },
  data() {
    return {
      customInputValue: '',
    };
  },
  methods: {
    onCustomInput(value) {
      this.customInputValue = value;
    },
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
