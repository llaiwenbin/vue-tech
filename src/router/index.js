
import Router from 'vue-router'
import Vue from 'vue'
import {commonRouteList}  from './pemission.js'
import {asyncRouteList}  from './pemission.js'
import store from '@/store'
Vue.use(Router);

const router = new Router ({
    routes: commonRouteList
});

store.commit('ADD_MENU',commonRouteList)

setTimeout(()=>{
    // 加入异步路由列表
    // 退出登录重新登录需要重新new 一个Router，不然的话路由会有缓存
    router.addRoutes(asyncRouteList);
    store.commit('ADD_MENU',asyncRouteList)
},2000)

router.beforeEach((to, from, next) => {
    // console.info(to, from, next)
    /* 必须调用 `next` */
    next();
})

router.beforeResolve((to, from, next) => {
    /* 必须调用 `next` */
    next();
})

router.afterEach((to, from) => {
    // console.info(to, from)
})

export default router;