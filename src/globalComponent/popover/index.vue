<template>
    <e-popover
        ref="ElPopover"
        class="zt-popover"
        v-bind="$attrs"
        v-on="$listeners"
        :disabled="ElDisabled"
        :trigger="trigger"
    >
        <template slot="reference">
            <slot name="reference"></slot>
        </template>
        <div slot="default" class="break-all">
            <slot>{{ content || "" }}</slot>
        </div>
    </e-popover>
</template>

<script>
/**
 * 用法同element的popover组件，只添加了row字段，超出指定行数出现popover
 * 超出指定行数时省略的功能（row）暂时只支持 10 行，0行时等同于""，reference 不需要添加超出省略的样
 * 支持动态 row，不支持动态 trigger
 * */
import EPopover from "./Elpopover/main";
export default {
    name: "popover",
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        content: {
            tyep: String,
            default: "",
        },
        trigger: {
            type: String,
            default: "hover",
            validator(val) {
                return ["click", "hover"].indexOf(val) > -1;
            },
        },
        row: {
            tyle: String,
            default: "",
            validator(val) {
                return (0 <= +val && +val <= 10) || val == "";
            },
        },
    },
    components: {
        EPopover,
    },
    data() {
        return {
            p_disabled: false,
        };
    },
    mounted() {
        if (this.row) {
            this.initEvent();
            this.addEllipseClass();
        }
    },
    computed: {
        ElDisabled() {
            return this.disabled || this.p_disabled;
        },
    },
    methods: {
        addEllipseClass(row = this.row) {
            this.$nextTick(() => {
                this.$slots.reference[0].elm.classList.add(`ss-ellipse-${row}`);
            });
        },
        removeEllipseClass(row = this.row) {
            this.$nextTick(() => {
                this.$slots.reference[0].elm.classList.remove(
                    `ss-ellipse-${row}`
                );
            });
        },
        getEventName(trigger) {
            let nameList = {
                hover: "mouseenter",
                click: "click",
            };
            return nameList[trigger];
        },
        getCurrentEventName() {
            return this.getEventName(this.trigger);
        },
        initEvent() {
            const popoverElm = this.$refs.ElPopover.$el;
            const eventName = this.getCurrentEventName();
            popoverElm.addEventListener(eventName, this.showTips);
        },
        removeEvent() {
            const popoverElm = this.$refs.ElPopover.$el;
            const eventName = this.getCurrentEventName();
            popoverElm.removeEventListener(eventName, this.showTips);
        },
        showTips() {
            this.p_disabled = !this.judgeOverLimit();
        },
        judgeOverLimit() {
            const targetElm = this.$slots.reference[0].elm;
            const targetBox = targetElm.parentElement.parentElement;
            const row = this.getElementTextRow(targetElm, targetBox);

            return row > +this.row;
        },
        // 获取元素下文本的行数
        getElementTextRow(targetElm, contextBox) {
            const pxToNumber = function (px) {
                if (typeof px != "string") return px;
                var num = Number(px.replace("px", ""));
                return num;
            };

            //复制节点样式和内容；
            let copyTrigger = targetElm.cloneNode(true);

            this.copyComputedStyle(targetElm, copyTrigger);

            //去除 margin 和 padding 的影响,高度和 line-height 有关
            Object.assign(copyTrigger.style, {
                height: "auto",
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0,
                visibility: "hidden",
                left: 0,
                top: 0,
                position: "fixed",
                lineHeight: 1,
                //TODO:暂时只能通过去除指定样式（overflow、-webkit-line-clamp）来恢复height
                overflow: "unset",
                "-webkit-line-clamp": "unset",
            });

            // font-size,font-weight 等属性值是继承的.所以需要添加到同样的容器下
            contextBox.appendChild(copyTrigger);

            let { lineHeight, height } = window.getComputedStyle(
                copyTrigger,
                null
            );

            copyTrigger.remove();

            return pxToNumber(height) / pxToNumber(lineHeight);
        },

        copyComputedStyle(_elem, _copyElm) {
            var computedStyle = window.getComputedStyle(_elem, null);
            for (let styleKey in computedStyle) {
                // Do not use `hasOwnProperty`, nothing will get copied
                if (
                    typeof styleKey == "string" &&
                    styleKey != "cssText" &&
                    !/\d/.test(styleKey)
                ) {
                    // The try is for setter only properties
                    try {
                        _copyElm.style[styleKey] = computedStyle[styleKey];
                        // `fontSize` comes before `font` If `font` is empty, `fontSize` gets
                        // overwritten.  So make sure to reset this property. (hackyhackhack)
                        // Other properties may need similar treatment
                        if (styleKey == "font") {
                            _copyElm.style.fontSize = computedStyle.fontSize;
                        }
                    } catch (e) {}
                }
            }
        },
    },
    watch: {
        trigger(trigger, beforeTrigger) {
            if (trigger != beforeTrigger) {
                console.error("暂不支持修改trigger");
            }
        },
        row(val, beforeRow) {
            if (val && beforeRow) {
                this.addEllipseClass(val);
                this.removeEllipseClass(beforeRow);
            }

            if (!val && beforeRow) {
                this.removeEvent();
                this.removeEllipseClass(beforeRow);
            }
            if (val && !beforeRow) {
                this.initEvent();
                this.addEllipseClass(val);
            }
        },
    },
    beforeDestroy() {
        this.removeEvent();
    },
};
</script>
<style lang="scss">
.zt-popover {
    @for $i from 1 through 10 {
        .ss-ellipse-#{$i} {
            overflow: hidden;

            word-wrap: break-word;

            display: -webkit-box; // 将对象作为弹性伸缩盒子模型显示

            -webkit-line-clamp: $i; // 表示显示的行数（需要结合上面两个属性）

            /*! autoprefixer: off */

            -webkit-box-orient: vertical; // 从上到下垂直排列子元素
        }
    }
}

.break-all {
    word-break: break-all;
}
</style>