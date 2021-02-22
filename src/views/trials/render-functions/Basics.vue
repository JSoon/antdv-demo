<template>
  <div>
    <h2>Render Functions: Basics</h2>

    <AnchoredHeading :level="3"></AnchoredHeading>
    <AnchoredHeading :level="4">四级标题</AnchoredHeading>
    <AnchoredHeading :level="5">五级标题</AnchoredHeading>
    <AnchoredHeading :level="6">六级标题</AnchoredHeading>
  </div>
</template>

<script>
import AnchoredHeading from './components/AnchoredHeading';

export default {
  components: {
    AnchoredHeading,
  },
};
</script>

<style>

</style>
