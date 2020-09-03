
class mergePlugin {
    constructor() {
        this.vm = null;
        this.isOverTime = false;
    }

    install(Vue) {
        this.initCycle(Vue);

        const _this = this;
        this.Interval(function () {
            _this.isOverTime = !_this.isOverTime;
        })

        // 为了Vue链式调用的时候可以直接获取到它的Vue的实例
        Vue.prototype.trigger = this.trigger(Vue);
    }

    // 初始化钩子
    initCycle(Vue) {
        const optMerge = Vue.config.optionMergeStrategies;

        optMerge.overTime = optMerge.beforeCreate;
        optMerge.tooSamll = optMerge.beforeCreate;
        optMerge.tooBig = optMerge.beforeCreate;
    }

    // 递归通知所有子组件
    notifyLifeCycle(lifeCycleName, vm) {
        const lifecycle = vm.$options[lifeCycleName];
        if (lifecycle && lifecycle.length) {
            lifecycle.forEach(life => {
                life.call(vm)
            })
        }
        if (vm.$children && vm.$children.length) {
            vm.$children.forEach(lifeVm => {
                this.notifyLifeCycle(lifeCycleName, lifeVm);
            })
        }
    }

    // 触发条件和需要通知的钩子的状态机
    trigger() {
        const _this = this;
        return function () {
            _this.vm = this;
            // TODO: 单例
            _this.judgeSize();
            // 还可以有很多其他类型的钩子
            _this.overTime();

        }
    }

    // 分为一类的钩子
    judgeSize() {
        console.log('judgeSize');
        const _this = this;
        window.addEventListener("resize", function (res) {
            res ? _this.tooBig() : _this.tooSmall();
        }, false);
    }

    // 具体的生命周期钩子和触发的条件
    tooSmall() {
        this.notifyLifeCycle('tooSmall', this.vm);
    }

    tooBig() {
        this.notifyLifeCycle('tooBig', this.vm);
    }

    overTime() {
        const _this = this;
        this.Interval(function () {
            _this.isOverTime && _this.notifyLifeCycle('overTime', _this.vm);
        })
    }

    // 模拟setInterval
    Interval(func, time = 100) {
        let _this = this;
        let timer = null;
        timer = setTimeout(function () {
            func();
            clearTimeout(timer);

            _this.Interval(func);
        }, time)
    }
}
export default new mergePlugin();