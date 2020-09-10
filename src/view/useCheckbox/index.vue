<template>
  <div>
    <div>group</div>
    <checkboxGroup v-model="model">
      <checkbox label="Jack">
        <span class="m_l10">结果 Jack: {{ model.indexOf('Jack')> -1 }}</span>
      </checkbox>
      <checkbox label="Jack">
        <span class="m_l10">结果 Jack: {{ model.indexOf('Jack')> -1 }}</span>
      </checkbox>
      <checkbox label="Lucy">
        <span class="m_l10">结果 Lucy: {{ model.indexOf('Lucy')> -1 }}</span>
      </checkbox>
      <checkbox label="Owen">
        <span class="m_l10">结果 Owen: {{ model.indexOf('Owen')> -1 }}</span>
      </checkbox>
    </checkboxGroup>
    <div>单独</div>
    <checkbox
      :checked.sync="checked"
      :true-value="trueValue"
    >
      <span class="m_l10">结果:{{ checked }}</span>
      <span class="m_l10">trueValue:{{ trueValue }}</span>
    </checkbox>
  </div>
</template>

<script>
import checkbox from "@/globalComponent/checkBox/checkbox.vue";
import checkboxGroup from "@/globalComponent/checkBox/checkbox-group.vue";
export default {
    name: "UseCheckbox",
    components: {
        checkbox,
        checkboxGroup,
    },
    data() {
        return {
            checked: true,
            trueValue: false,
            model: ["Jack"],
        };
    },
    watch: {
        model(res) {
            console.log("model更新为：" + res);
        },
    },
    methods: {},
};
</script>

<style lang='scss' scoped>
</style>
