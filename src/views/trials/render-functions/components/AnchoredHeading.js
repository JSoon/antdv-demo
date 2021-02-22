import RenderComponent from './RenderComponent.vue';

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
        createElement(RenderComponent, {
          // 当且仅当 createElement 第一个参数为 component 对象时生效
          props: {
            someProp: this.level,
          },
          scopedSlots: {
            default: (props) => createElement('strong', props.someProp),
          },
        }),
      ],
    );
  },
};
