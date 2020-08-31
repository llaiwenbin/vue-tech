<template>
  <div>
    <router-view></router-view>
  </div>
   
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
    }
  },
  created(){
    this.$on("hook:mounted",()=>{
      // console.log('我挂载点东i下');
    })
  },
  mounted(){
    // console.log(this.$slots);
  },
  methods:{
    testHook(){
      // console.log('我监听到了子组件的Hook');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
