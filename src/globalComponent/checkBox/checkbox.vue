<template>
    <label>
        <input
            v-if="group"
            type="checkbox"
            :disabled="disabled"
            :value="label"
            v-model="model"
            @change="change"
        />
        <span v-else>
            <input type="checkbox" :disabled="disable" :checked="currentChecked" @change="change" />
        </span>
        <slot></slot>
    </label>
</template>

<script>
/**
 * 使用 sync 来进行双向绑定具体值
 * 设置 true 为打勾还是 false 为打勾
 * 设置 disable 设置状态
 **/

// <input>、<slot> 都是包裹在⼀个 <label> 元素内的，这 样做的好处是
// 当点击 <slot> ⾥的⽂字时，<input> 选框 也会被触发，否则只有点击那个⼩框才会触发，那样不太容易 选中，影响⽤户体验。
import { findNearUpperComponent } from "@/utils.js";
export default {
    name: "checkbox",
    data() {
        return {
            group: false,
            parent: null,
        };
    },
    props: {
        checked: {
            default: false,
            type: [String, Number, Boolean],
        },
        trueValue: {
            type: [String, Number, Boolean],
            default: true,
        },
        disable: {
            default: false,
            type: Boolean,
        },
    },
    mounted() {
        this.parent = findNearUpperComponent(this, "iCheckboxGroup");
        if (this.parent) {
            this.group = true;
        }
        if (this.group) {
            // this.parent.updateModel(true);
        } else {
            this.$emit("update:checked", !this.checked);
        }
    },
    methods: {
        change() {
            this.$emit("update:checked", !this.checked);
        },
    },
    computed: {
        currentChecked() {
            return this.checked == this.trueValue ? true : false;
        },
    },
};
</script>

<style lang='scss' scoped>
</style>
