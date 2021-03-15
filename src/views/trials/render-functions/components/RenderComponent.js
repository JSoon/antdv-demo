export default {
  name: 'RenderComponent',
  props: {
    someProp: {
      type: Number,
      required: true,
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
  },
  render(h) {
    /*
      <div :class="styles.subTitle">
        <slot v-bind="{ someProp, }"></slot>
      </div>
     */

    return h(
      'div',
      {
        class: [`${this.styles.subTitle}`],
      },
      [
        this.$scopedSlots.default({
          someProp: this.someProp,
        }),
      ],
    );
  },
};
