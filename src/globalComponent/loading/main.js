
import Component from './index.vue';
import Vue from 'vue';

const Constructor = Vue.extend(Component);

let instance = undefined;

Constructor.prototype.close = function() {
    if(!instance) return;

    instance = null;

    this.$nextTick(()=>{
        this.visible = true;

        if(this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
            this.$destroy();
        }
    });
}

const Loading = function (ops) {
    if(instance){
        return instance;
    }

    instance = new Constructor({
        el: document.createElement('div'),
        data:{
            text:'',
            ...ops
        }
    })

    document.body.appendChild(instance.$el);

    instance.$nextTick(()=>{
        instance.$data.visible = true;
    })

    return instance;
    
}





export default Loading;