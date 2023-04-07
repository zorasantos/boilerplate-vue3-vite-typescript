import { createTestingPinia } from "@pinia/testing";
import { mount, VueWrapper } from "@vue/test-utils";
import BoxCount from "./BoxCount.vue";
import { useCounterStore } from "~/store";

describe("BoxCount", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(BoxCount, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn,
          }),
        ],
      },
    });
  });
  test("increments count when button is clicked", async () => {
    const store = useCounterStore();

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(store.increment).toHaveBeenCalledOnce();
  });
});
