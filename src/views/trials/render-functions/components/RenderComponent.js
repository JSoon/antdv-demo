export default {
  name: 'RenderComponent',
  props: {
    someProp: {
      type: Number,
      required: true,
    },
  },
  render(h) {
    /*
      <div>
        <slot v-bind="{ someProp, }"></slot>
      </div>
     */

    return h(
      'div',
      [
        this.$scopedSlots.default({
          someProp: this.someProp,
        }),
      ],
    );
  },
};
