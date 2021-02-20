export default {
  name: 'AnchoredHeading',
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  render(createElement) {
    return createElement(
      `h${this.level}`, // tag name
      this.$scopedSlots.default(), // array of children
    );
  },
};
