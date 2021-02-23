import RenderComponent from './RenderComponent';

export default {
  name: 'AnchoredHeading',
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  render(createElement) {
    /*
      <h1>
        <slot name="default" :text="level"></slot>
        <RenderComponent :someProp="level">
          <template #default="props">
            <strong>{{ props.someProp }}</strong>
          </template>
        </RenderComponent>
      </h1>
    */

    // https://forum.vuejs.org/t/scoped-slot-in-render-function-with-default-content/8201/2
    const slotDefault = this.$scopedSlots.default || ((props) => `默认${props.text}级标题`);

    return createElement(
      `h${this.level}`, // tag name
      {
        class: {
          'some-class': true,
        },
      },
      [
        // array of children
        slotDefault({
          text: this.level,
        }),
        createElement(
          RenderComponent,
          {
            // 传递给 RenderComponent 的 props 和 scopedSlots
            props: {
              someProp: this.level,
            },
            scopedSlots: {
              default: (props) => createElement('strong', props.someProp),
            },
          },
        ),
      ],
    );
  },
};
