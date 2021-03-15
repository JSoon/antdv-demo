import Vue from 'vue/dist/vue.esm';

export default {
  name: 'Compilation',
  render(h) {
    const template = `
      <div>
        <header>
          <h1>I'm a template!</h1>
        </header>
        <p v-if="message">{{ message }}</p>
        <p v-else>No message.</p>
        <div v-for="(item) in list">{{ item.name }}</div>
        <footer>
          <h2>I'm a template footer!</h2>
        </footer>
      </div>
    `;
    const result = Vue.compile(template.trim());
    console.log(result);
    console.log(this);

    return h(
      'div',
      [
        result.render.toString(),
        h('br'),
        result.staticRenderFns.toString(),
      ],
    );
  },
};
