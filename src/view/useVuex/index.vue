<template>
  <div>
    <button @click="increment">
      Mutations-type
    </button>
    <button @click="testModuleGetter">
      Module Getters
    </button>
    <button @click="testModuleMutations">
      Module Mutations
    </button>
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex';
/**
 * 如果添加了命名空间namespace 那么使用时的方式有
 *      1.1  mapGetters('moduleA',['addTenGetters'])
 *           this.addTenGetters
 *      1.2  mapGetters(['moduleA/addTenGetters']),
 *           console.log(this['moduleA/addTenGetters']);
 * 
 */
export default ({
    name:'UseVuex',
    mounted(){
        this.increment('6666');
    },
    methods: {
        ...mapActions(['increment']),
        testModuleGetter(){
            console.log(this.addTenGetters);
            console.log(this['moduleA/addTenGetters']);
        },
        testModuleMutations(){
            console.log(this.addTenGetters);
        }
    },
    computed:{
        ...mapGetters('moduleA',['addTenGetters']),
        ...mapGetters(['moduleA/addTenGetters']),

    }
})
</script>>