
import Alert from './alert.vue';
import Vue from 'vue';

//对组件进行封装，使得外界可以通过 js 调用方法传参的方式调用组件方法。
Alert.newInstance = properties => {
    const props = properties || {};
    const Instance = new Vue({
        data: props, render(h) {
            // 对组件进行扩展
            return h(Alert, { props: props });
        }
    });
    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    // 获取到 Alert 组件
    const alert = Instance.$children[0];
    console.log(Instance);
    console.log(alert);
    return {
        //暴露出组件的方法
        //为什么不直接用 Instance 的 add 方法
        add(noticeProps) {
            let id = alert.add(noticeProps);
            return id;
        },
        remove(name) {
            alert.remove(name);
        }
    }
};



export default Alert;
