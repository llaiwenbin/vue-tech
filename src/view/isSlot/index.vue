<template>
    <slotChild @hook:created="testHook" msg="Welcome to Your Vue.js App">
        <template v-slot:header="row">
            <div>{{row}}</div>
        </template>

        <template #suoxie="row">
            <!-- #header为v-slot:header缩写 ，如果为不具名时也要写#default-->
            <!-- 如果使用了缩写，那么子组件中获取的slot就会从单个VNode变成数组 -->
            <div>{{row}}</div>
        </template>
        <template #noInChildrenComponent>6666</template>
        <template v-slot:[dynamicSlotName]="row">
            <!-- 动态插槽名 -->
            动态插槽名 {{row}}
        </template>

        <template v-slot:aside="{row}">
            <!-- 解构 -->
            <div>{{row}}</div>
        </template>

        <template v-slot:nav="{row:changeName}">
            <!-- 换名 -->
            <div>{{changeName}}</div>
        </template>

        <template #foot="{row = {a:'如果没有值的默认值'}}">
            <!-- 如果row为undefined时有默认值 -->
            <div>{{row}}</div>
        </template>

        <!-- 废弃语法 slot -->
        <div slot="content">1</div>
        <template slot="content1">2</template>
        <!-- 废弃语法 slotScope -->
        <template slot="content2" slot-scope="row">
            <div>{{row}}</div>
        </template>
        <!-- slot 和 slotScope都可以使用在非template上 -->
        <template>3</template>
    </slotChild>
</template>

<script>
import SlotChild from "./components/SlotChild.vue";

export default {
    name: "isSlot",
    components: {
        SlotChild,
    },
    data() {
        return {
            dynamicSlotName: "dynamic",
        };
    },
    created() {
        this.$on("hook:mounted", () => {
            // console.log('我挂载点东i下');
        });
    },
    mounted() {
        // console.log(this.$slots);
    },
    methods: {
        testHook() {
            // console.log('我监听到了子组件的Hook');
        },
    },
};
</script>
