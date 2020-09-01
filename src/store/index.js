import Vue from 'vue'
import Vuex from 'vuex'

import actions from './action';
import mutations from './mutations';
import moduleA from './moduleA'

Vue.use(Vuex)

const state = {
    num: 0,
    menu: []
}
const getters = {

}




const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules:{
        moduleA
    }
}) ;
export default store