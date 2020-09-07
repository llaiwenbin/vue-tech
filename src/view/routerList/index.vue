<template>
    <ul class="ul">
        <li class="li" :key="item.name" v-for="item in menu">
            <div v-if="item.children && item.children.length > 0">
                <div class="hover">{{ item.name }}</div>
                <ul class="m_l20">
                    <li
                        class="li hover"
                        v-for="items of item.children"
                        :key="items.name"
                        @click="jump(item.path + '/' +items.path)"
                    >{{items.name}}</li>
                </ul>
            </div>

            <div class="hover" @click="jump(item.path)" v-else>{{ item.name }}</div>
        </li>
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
            // console.log(path);
            // event.cancelBubble;
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
    }
    .hover:hover {
        color: blue;
    }
}
</style>