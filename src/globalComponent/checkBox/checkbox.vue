<template>
  <label>
    <input
      v-if="group"
      v-model="model"
      type="checkbox"
      :disabled="disable"
      :value="label"
      @change="isGroupChange"
    >
    <span v-else>
      <input
        type="checkbox"
        :disabled="disable"
        :checked="currentChecked"
        @change="notGroupChange"
      >
    </span>
    <slot />
  </label>
</template>

<script>
/**
 * 该组件的难点在于判断是否为g roup,如果为group就要找到这个checkbox-group，触发他的更新条件
 * 当为 group 时不直接使用inject和provide的原因是，不确定一开始是不是group如果直接引入可能是无效数据undefined
 * 所以在为group 时更新数据的时候需要，通过checkbox-group
 *
 * 使用 sync 来进行双向绑定具体值
 * 设置 true 为打勾还是 false 为打勾
 * 设置 disable 设置状态
 **/

// <input>、<slot> 都是包裹在⼀个 <label> 元素内的，这 样做的好处是
// 当点击 <slot> ⾥的⽂字时，<input> 选框 也会被触发，否则只有点击那个⼩框才会触发，那样不太容易 选中，影响⽤户体验。
import { findNearUpperComponent } from "@/utils.js";
export default {
    name: "ICheckbox",
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
        // group时使用
        label: {
            type: [String, Number, Boolean],
        },
    },
    data() {
        return {
            parent: null,
            model: [],
        };
    },
    computed: {
        currentChecked() {
            return this.checked == this.trueValue ? true : false;
        },
        group() {
            return !!this.parent;
        },
    },
    watch: {},
    mounted() {
        this.parent = findNearUpperComponent("iCheckboxGroup", this);
    },
    methods: {
        // 使用的是 .sync 进行同步
        notGroupChange() {
            if (this.disable) {
                return false;
            }
            this.$emit("update:checked", !this.checked);
        },
        //需要修改父数据
        isGroupChange() {
            if (this.disable) {
                return false;
            }
            let { model } = this;
            this.parent.updateModel(model);
        },
    },
};
</script>

<style lang='scss' scoped>
</style>
