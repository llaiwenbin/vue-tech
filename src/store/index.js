
import actions from './action';
import mutations from './mutations';
import moduleA from './moduleA'
const state = {
    num:0
}
const getters = {

}


const Store = {
    state,
    getters,
    actions,
    mutations,
    modules:{
        moduleA
    }
}

export default Store;