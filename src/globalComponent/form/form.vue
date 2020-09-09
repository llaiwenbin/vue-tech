<template>
    <form>
        <slot></slot>
    </form>
</template> <script>
// 先确定基本功能的接口
// 例如from组件必须有数据和规则
// form-item 必须有model对应的 prop 以及 label；
//      在注册的时候需要把自己放到from中，注销时移除，这样在点击提交的时候可以在form中触发验证和重置
//      当前组件需要有重置和验证的方法，方便单个item验证（需要获取到父组件的 rule 和 model）
//      prop的作用是为了获取model、rule 中的数据
// input
//      聚焦和改变时可以触发验证

// 设计完接口后结合其他组件来完善组件功能

export default {
    name: "iForm",
    props: {
        model: { type: Object },
        rules: { type: Object },
    },
};
</script>