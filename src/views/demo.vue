<template>
  <div>
    <h1>Two Way Binding</h1>

    <p>{{ name }}</p>
    <button @click="changeNameHandler">Change Name</button>
    <br>
    {{ manualVersion }}: <input type="text" :value="name" @input="name = $event.target.value">
    <br>
    {{ vModelVersion }}: <input type="text" v-model="name">

    <div ref="text1">{{ text1 }}</div>
    <div ref="text2">{{ text2 }}</div>
  </div>
</template>

<script>
function getRandomBelow(integer) {
  return Math.floor(Math.random() * integer);
}
export default {
  data() {
    return {
      name: 'Ben',
      manualVersion: '<input type="text" :value="name" @input="name = $event.target.value">',
      vModelVersion: '<input type="text" v-model="name">',
      text1: '',
      text2: '',
    };
  },
  mounted() {
    this.text1 = 'text1';
    this.text2 = 'text2';
    this.$nextTick(() => {
      console.log("this.$refs.text1.textContent === 'text1'", this.$refs.text1.textContent === 'text1');
      console.log("this.$refs.text2.textContent === 'text2'", this.$refs.text2.textContent === 'text2');
    });
  },
  methods: {
    changeNameHandler($event) {
      console.log($event);
      const names = ['Ben', 'Jimmy', 'Tommy', 'Jack', 'Emily'];
      let name = names[getRandomBelow(4)];
      while (this.name === name) {
        name = names[getRandomBelow(4)];
      }
      this.name = name;
    },
  },
};
</script>
