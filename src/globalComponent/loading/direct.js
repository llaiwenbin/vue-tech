import Component from './index.vue';
import Vue from 'vue';

const Constructor = Vue.extend(Component);

Vue.directive('loading',{
    bind(el,binding){
        console.log('bind');
        let instance = new Constructor({
            el: document.createElement('div'),
            data: {
                text:'666',
            }
        });

        instance.$nextTick(() => {
            instance.visible = binding.value;
        })

        el.appendChild(instance.$el);
        el.instance = instance;
        

    },

    unbind(el){
        if(el && el.instance){
            let res = el.instance;

            res.$nextTick(()=>{
                el.removeChild(res.$el);
                res.$destory();
            })
        }
    },

    update(el,binding){
        console.log('update');
        console.log(el,binding);

        if(el && el.instance){
            if(binding.oldValue !== binding.value) {
                el.instance.$nextTick(()=>{
                    el.instance.visible = binding.value;
                })
            }
        }
    }
})