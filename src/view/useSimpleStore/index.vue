<template>
    <div id="simple">
        <!-- <button @click="showNumber">show Store Number</button> -->
        <button @click="addNumber">add Number</button>
        <div>{{ number }}</div>
    </div>
</template>

<script>
import { store, mutations } from "@/simple-store";
export default {
    name: "useSimpleStore",
    data() {
        return {
            dynamicSlotName: "dynamic",
        };
    },
    mounted() {},
    methods: {
        showNumber() {},
        addNumber() {
            mutations.add();
        },
    },
    computed: {
        number() {
            return store.num;
        },
    },
};
</script>
