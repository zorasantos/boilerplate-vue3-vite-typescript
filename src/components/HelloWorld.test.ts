import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";
describe("HelloWorld", () => {
  test("renders message", () => {
    const msg = "Hello world";
    const wrapper = mount(HelloWorld, {
      props: {
        msg,
      },
    });
    expect(wrapper.text()).toContain(msg);
  });
});
