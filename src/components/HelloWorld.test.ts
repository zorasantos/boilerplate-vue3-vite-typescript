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

  test("increments count when button is clicked", async () => {
    const msg = "Hello world";
    const wrapper = mount(HelloWorld, {
      props: {
        msg,
      },
    });
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(wrapper.text()).toContain("count is 1");
  });
});
