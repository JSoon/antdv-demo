export default {
  name: 'GrandChildComponent',
  inject: {
    ipInfo: {
      default: () => ({}),
    },
  },
  render(h) {
    return h(
      'div', {
        class: {
          'grand-child-component': true,
        },
      },
      [
        this.$scopedSlots.default(),
        this.name,
        h(
          'div',
          [
            'ipInfo: ',
            JSON.stringify(this.ipInfo),
          ],
        ),
      ],
    );
  },
};
