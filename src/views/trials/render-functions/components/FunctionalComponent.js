export default {
  name: 'FunctionalComponent',
  functional: true,
  render(h, { props, data }) {
    return h(
      'div',
      {
        ...data,
      },
      [
        `name: ${props.name}`,
        h('br'),
        `stateless: ${props.stateless}`,
        h('br'),
        `instanceless: ${props.instanceless}`,
      ],
    );
  },
};
