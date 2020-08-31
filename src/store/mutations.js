import { SOME_MUTATION } from './mutation-types.js'
const mutations = {
    [SOME_MUTATION](state,value){
        console.log(value);
        console.log(state.num);
        console.log('sayHi');
        console.log(++state.num);
    }
}
export default mutations;