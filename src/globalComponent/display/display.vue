<template>
    <div ref="display"></div>
</template> <script>
export default {
    props: {
        code: { type: String, default: "" },
    },
    data() {
        return {
            html: "",
            js: "",
            css: "",
        };
    },
    mounted() {
        this.html = this.getSource(this.code, "template");
        this.js = this.getSource(this.code, "script");
        this.css = this.getSource(this.code, "style");
    },
    methods: {
        getSource(source, type) {
            const regex = new RegExp(`<${type}[^>]*>`);
            let openingTag = source.match(regex);

            if (!openingTag) {
                return "";
            } else {
                openingTag = openingTag[0];
            }

            return source.slice(
                // 获取到标签最后一位
                source.indexOf(openingTag) + openingTag.length,
                //获取到结束标签的开始
                source.lastIndexOf(`</${type}>`)
            );
        },
        splitCode() {
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
    },
};
</script>