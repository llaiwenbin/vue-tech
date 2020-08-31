<template>
    <div>
        <button @click="increment">Mutations-type</button>
        <button @click="testModuleGetter">Module Getters</button>
        <button @click="testModuleMutations">Module Mutations</button>
    </div>
    
</template>
<script>
import { mapActions,mapGetters } from 'vuex';
export default ({
    name:'useVuex',
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