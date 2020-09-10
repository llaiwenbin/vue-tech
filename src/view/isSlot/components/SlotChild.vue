<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <slot
      name="header"
      :row="row"
    />
    <slot
      name="dynamic"
      :row="row"
    />
    <slot
      name="aside"
      :row="row"
    />
    <slot
      name="nav"
      :row="row"
    />
    <slot name="foot" />
    <slot name="content" />
    <slot name="content1" />
    <slot
      name="content2"
      :row="row"
    />
    
    <!-- 默认值 -->
    <slot>Submit</slot>
  </div>
</template>

<script>
export default {
  name: 'SlotChild',
  props: {
    msg: String
  },
  data(){
    return {
      row:{
        key:'key',
        value:{a:1,b:2}
      }
    }
  },
  created(){
    // console.log('我是子组件的created');
  },
  mounted(){
    // 只能获取到父组件中有哪些是需要传到子组件的，和子组件是否显示（有无对应 slot）无关
    // this.$slots和this.$scopedSlots 都是子组件查看父组件传入信息，和子组件具体操作物任何关系

    // 只能获取到 父组件中无需获取子组件数据插槽 的VNode，和子组件是否传数据给父组件无关。
    const slots = this.$slots;
    // 可以获取到全部插槽！具体获取this.$scopedSlots[slotKey]();
    const scopedSlots = this.$scopedSlots;
    // console.log(slots === scopedSlots);
    
    console.log(slots);
    console.log(scopedSlots);
  },
}
</script>
