<template>
  <div ref="display" />     
</template> <script>
import Vue from "vue";
// 在 iView Run ⾥，默认是直接可 以写 iView 组件库的全部组件，并没有额外引⼊，这是因为 Display 所在的⼯程，已经将 iView 安装在了全局，Vue.extend 在构造实例
// 时，已经可以使⽤全局安装的插件了，如果你还全局安装了其它插 件，⽐如 axios，都是可以直接使⽤的
import { random_code } from "@/utils";
export default {
    props: {
        code: { type: String, default: "" },
    },
    data() {
        return {
            html: "",
            js: "",
            css: "",
            id: random_code(),
            component: null,
        };
    },
    watch: {
        code() {
            // 当 this.code 更新时，整个过程要重新来⼀次，所以要对 code 进 ⾏ watch 监听
            this.destroyCode();
            this.renderCode();
        },
    },
    mounted() {
        this.renderCode();
    },
    beforeDestroy() {
        this.destroyCode();
    },
    methods: {
        getSource(source, type) {
            // 参数2示例
            // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
            // [^]* 代表全部字符的意思，同时可以把[^]*用 . 代替，g 用 s 代替。
            const regex = new RegExp(
                `(?<=<[^]*${type}[^]*>)[^]*(?=</[^]*${type}[^]*>)`,
                "g"
            );

            let openingTag = regex.exec(source);
            return openingTag ? openingTag[0].trim() : null;

            // 非正则
            // if (!openingTag) {
            //     return "";
            // } else {
            //     openingTag = openingTag[0];
            // }

            // return source.slice(
            //     // 获取到标签最后一位
            //     source.indexOf(openingTag) + openingTag.length,
            //     //获取到结束标签的开始
            //     source.lastIndexOf(`</${type}>`)
            // );
        },
        splitCode() {
            /**
             *  1. .vue 的 <script> 部分⼀般都是以 export default 开始 的，可以看到在 splitCode ⽅法中将它替换为了 return，我们分割完的代码，仍然 是字符串；
             *  2. 在分割的 <template> 外层套了⼀个 <div id="app">，这 是为了容错，有时使⽤者传递的 code 可能会忘记在外层包⼀个节点，没有根节点的组件，是会报错的。
             * */
            const script = this.getSource(this.code, "script").replace(
                /export default/,
                "return "
            );
            const style = this.getSource(this.code, "style");
            const template =
                '<div id="app">' +
                this.getSource(this.code, "template") +
                "</div>";
            this.js = script;
            this.css = style;
            this.html = template;
        },
        renderCode() {
            this.splitCode();
            if (this.html !== "" && this.js !== "") {
                // const sum = new Function('a', 'b', 'return a + b');
                // console.log(sum(2, 6)); // 8

                //js从字符串转为对象
                const jsContent = new Function(this.js)();
                jsContent.template = this.html;
                const newComponent = Vue.extend(jsContent);

                this.component = new newComponent().$mount();

                this.$refs.display.appendChild(this.component.$el);

                if (this.css !== "") {
                    const style = document.createElement("style");
                    style.type = "text/css";
                    style.id = this.id;
                    style.innerHTML = this.css;
                    document.getElementsByTagName("head")[0].appendChild(style);
                }
            }
        },
        destroyCode() {
            const $target = document.getElementById(this.id);
            // 移除 CSS
            if ($target) $target.parentNode.removeChild($target);
            // 移除组件
            if (this.component) {
                this.$refs.display.removeChild(this.component.$el);
                this.component.$destroy();
                this.component = null;
            }
        },
    },
};
</script>