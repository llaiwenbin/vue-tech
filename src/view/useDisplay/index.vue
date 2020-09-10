<template>
  <div class="disFlex box">
    <textarea
      v-model="displaySource"
      class="Flex"
    />
    <IdisPlay
      class="Flex border"
      :code="displaySource"
    />
  </div>
</template>

<script>
let displaySource =
    `<template>
        <div class="red">{{res}}</div>
    </template>
    <script>
    let res = '我是准备被渲染的东西';
    export default {
        name: "useDisplay",
        data() {
            return {
                res,
            };
        }
    };
    <` +
    `/script>

    <style lang='scss' scoped>
        .red{
            color:red
        }
    </style>
            `;
import IdisPlay from "@/globalComponent/display/display.vue";
export default {
    name: "UseDisplay",
    components: {
        IdisPlay,
    },
    data() {
        return {
            displaySource,
        };
    },
};
</script>

<style lang='scss' scoped>
.box {
    > * {
        height: 100vh;
        background: #eee;
    }
    .border {
        border: #aaa 1px solid;
    }
}
</style>
