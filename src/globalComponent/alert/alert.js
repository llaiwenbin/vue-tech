import Notification from './notification.js';
let messageInstance;
// 对封装的js组件进行单例化和具体使用,可能有多种使用方式
function getMessageInstance() {
    // Notification.newInstance 的参数为加入的props，可以让 js 组件中的方法使用这个变量
    messageInstance = messageInstance || Notification.newInstance();
    return messageInstance;
}

function notice({ duration = 1.5, content = '' }) {
    // content 只能是字符串，如果要显示⾃定义的内容，除了⽤ v-html 指令，也能⽤ Functional Render
    let instance = getMessageInstance();
    return instance.add({ content: content, duration: duration });
}


let Feature = {
    //可以扩展其他方法 success、error 等等
    info(options) {
        return notice(options);
    },
    close(name) {
        let instance = getMessageInstance();
        console.log(name);
        instance.remove(name);
    }
}
export default Feature