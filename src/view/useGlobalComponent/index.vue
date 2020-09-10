<template>
  <div>
    <div v-loading="showLoading">
      113313
    </div>
    <button
      style="position:absolute"
      @click="toggleShow"
    >
      {{ showLoading ? 'showLoading': 'hideLoading' }}
    </button>
  </div>
</template>

<script>
import "@/globalComponent/loading/direct.js";

export default {
    name: "UseGlobalComponent",
    data() {
        return {
            showLoading: false,
        };
    },
    mounted() {
        // let instance = this.$loading({text:'123456',background:'red'});
        // setTimeout(()=>{
        //   instance.close();
        // },3000)
    },
    methods: {
        toggleShow() {
            console.log("click");
            this.showLoading = !this.showLoading;
        },
    },
};
</script>
