import FooBar from "./FooBar.vue";

export default {
  component: FooBar,
  title: "Components/FooBar",
};

export const Primary = () => ({
  components: { FooBar },
  template: "<FooBar />",
});
