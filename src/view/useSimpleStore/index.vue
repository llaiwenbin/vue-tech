<template>
  <div id="simple">
    <!-- <button @click="showNumber">show Store Number</button> -->
    <button @click="addNumber">
      add Number
    </button>
    <div>{{ number }}</div>
  </div>
</template>

<script>
import { store, mutations } from "@/simple-store";
export default {
    name: "UseSimpleStore",
    data() {
        return {
            dynamicSlotName: "dynamic",
        };
    },
    computed: {
        number() {
            return store.num;
        },
    },
    mounted() {},
    methods: {
        showNumber() {},
        addNumber() {
            mutations.add();
        },
    },
};
</script>
