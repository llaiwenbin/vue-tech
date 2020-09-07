<template>
    <div>
        <checkbox :checked.sync="checked" :trueValue="trueValue">
            <span class="m_l10">结果:{{checked}}</span>
            <span class="m_l10">trueValue:{{trueValue}}</span>
        </checkbox>
    </div>
</template>

<script>
import checkbox from "@/globalComponent/checkBox/checkbox.vue";
export default {
    name: "useCheckbox",
    data() {
        return {
            checked: true,
            trueValue: false,
        };
    },
    components: {
        checkbox,
    },
    watch: {
        checked(res) {
            console.log(res);
        },
    },
};
</script>

<style lang='scss' scoped>
</style>
