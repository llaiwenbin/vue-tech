<template>
    <ul class="ul">
        <li
            class="li"
            :key="item.name"
            v-for="item in menu"
            @click="jump(item.path)"
        >{{ item.name }}</li>
    </ul>
</template>
<script>
import { mapState } from "vuex";
export default {
    computed: {
        routerList() {
            return this.$router.options.routes;
        },
        ...mapState(["menu"]),
    },
    methods: {
        jump(path) {
            this.$route.path !== path && this.$router.push(path);
        },
    },
};
</script>
<style lang="scss">
.ul {
    width: 200px;
    .li {
        text-decoration: underline;
        cursor: pointer;
        font-size: 30px;
        &:hover {
            color: blue;
        }
    }
}
</style>