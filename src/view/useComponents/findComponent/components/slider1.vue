<template>
  <div>
    slider1
    <child1 class="m_l10" />
    <child2 class="m_l10" />
    <child3 class="m_l10" />
  </div>
</template>

<script>
import {
    findNearUpperComponent,
    findAllUpperComponent,
    findNearDownComponent,
    findAllDownComponent,
    findSbiling,
} from "@/utils";
const child = require.context("./children", false, /child\d?.vue$/);
let components = {};
child.keys().forEach((res) => {
    let curr = child(res).default;
    components[curr.name] = curr;
});
export default {
    name: "Slider1",
    components,
    data() {
        return {};
    },
    created() {
        //找到 APP 只是父APP不是根APP
        let vm = findNearUpperComponent("App", this);
        console.info("neme: ", vm.$options.name + "\nvm: ", vm);

        let vmList = findAllUpperComponent("App", this);
        console.info("findAllUpperComponent: ", vmList);
    },
    mounted() {
        console.log(
            ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
        );
        //找到 APP 只是父APP不是根APP
        let vm = findNearDownComponent("child1", this);
        console.info("neme: ", vm.$options.name + "\nvm: ", vm);
        // child1有 2 个，分别对应的组件是 child1 和 child1Copy，child1Copy是挂载在child2上的，如果找得到child1Copy说明遍历了所有组件
        let vmList = findAllDownComponent("child1", this);
        console.info("findAllDownComponent: ", vmList);

        let sbling = findSbiling(this);
        console.log(sbling);
    },
    methods: {
        log(vm) {},
    },
};
</script>

<style lang='scss' scoped>
</style>
