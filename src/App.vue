<script setup lang="ts">
import { computed } from "vue";
import HelloWorld from "~/components/HelloWorld.vue";
import { useCounterStore } from "~/store";
const store = useCounterStore();

const doubleValue = computed(() => store.doubleCount);
</script>

<template>
  <HelloWorld msg="Welcome to vue 3" />
  <div className="flex gap-5 pt-2 pb-10">
    <h3 className="text-yellow-600">
      State Value <span className="text-green-600">{{ store.count }}</span>
    </h3>
    <h3 className="text-yellow-600">
      State Double Value
      <span className="text-green-600">{{ doubleValue }}</span>
    </h3>
  </div>

  <button
    @click="
      {
        store.increment();
      }
    "
  >
    Click Here
  </button>
</template>
