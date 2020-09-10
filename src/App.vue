<template>
  <div id="app">
    <svg
      t="1598923957196"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1142"
      width="200"
      height="200"
      @click="jumpToRouterPage"
    >
      <path
        d="M501.2992 273.408l1.024-156.16L184.65792 379.904l314.29632 266.1376 0.95232-149.2992c313.86624 42.5984 178.29888 231.3216-0.5632 410.2144 619.5712-404.3776 251.01312-590.6432 1.95584-633.5488z"
        p-id="1143"
      />
    </svg>
    <transition
      name="slide-left"
      mode="out-in"
    >
      <router-view :include="$route.meta && $route.meta.cache" />
    </transition>
  </div>
</template>

<script>
export default {
    name: "App",
    created() {
        this.$on("hook:mounted", () => {
            // console.log('我挂载点东i下');
        });
    },
    mounted() {
        // console.log(this.$route);
    },
    methods: {
        testHook() {
            // console.log('我监听到了子组件的Hook');
        },
        jumpToRouterPage() {
            this.$route.path !== "/" && this.$router.push({ path: "/" });
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/animation.scss";
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.icon {
    width: 40px;
    height: 40px;
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 20px;
}
</style>
