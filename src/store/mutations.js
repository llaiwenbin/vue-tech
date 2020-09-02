import {
    SOME_MUTATION,
    ADD_MENU,
    RENEW_MENU
} from './mutation-types.js'

const mutations = {
    [SOME_MUTATION](state, value) {
        console.log(value);
        console.log(state.num);
        console.log('sayHi');
        console.log(++state.num);
    },
    [ADD_MENU](state, value) {
        state.menu = state.menu.concat(value)
    },
    [RENEW_MENU](state, value) {
        state.menu = value
    }
}
export default mutations;