<template>
    <div>
        <div v-loading="showLoading">113313</div>
        <button
            @click="toggleShow"
            style="position:absolute"
        >{{showLoading ? 'showLoading': 'hideLoading'}}</button>
    </div>
</template>

<script>
import "@/globalComponent/loading/direct.js";

export default {
    name: "useGlobalComponent",
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
