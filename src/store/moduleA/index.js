export default {
    namespaced:true,
    state: {
        maNum:0
    },
    getters: {
        addTenGetters:(state) => {
            return state.maNum + 10
        }
    },
    actions: {

    },
    mutations: {
        add(state,params){
            state.maNum += params || 1;
            console.log(state.maNum);
        }
    }   
}