// 路由懒加载
const routerList = () => import('@/view/routerList');
const isSlot = () => import('@/view/isSlot');
const useVuex = () => import('@/view/useVuex');
const useSimpleStore = () => import('@/view/useSimpleStore');
const useGlobalComponent = () => import('@/view/useGlobalComponent');
const secDialog = () => import('@/view/secDialog');
const requireManyModule = () => import('@/view/requireManyModule');
const useMixin = () => import('@/view/useMixin');
const useMergeStrategies = () => import('@/view/useMergeStrategies');

const useComponents = () => import('@/view/useComponents/parent');
const eventNative = () => import('@/view/useComponents/eventNative/index.vue');
const communication = () => import('@/view/useComponents/communication/index.vue');
const findComponent = () => import('@/view/useComponents/findComponent');

const useCheckbox = () => import('@/view/useCheckbox');
const useDisplay = () => import('@/view/useDisplay');


const error404 = () => import('@/view/error/404.vue');

//路由需要做限制，最终保底页面为404页面

//通用页面：一般为登录页面、错误页面等没有权限也能访问的页面
export const commonRouteList = [
    { path: '/', name: "routerList", component: routerList, meta: { cache: true } },
    { path: '/404', name: "404", component: error404, meta: { cache: true } }
]

//通过后端返回数据组合成有权限的列表
export const asyncRouteList = [
    { path: '/isSlot', name: "isSlot", component: isSlot },
    { path: '/useVuex', name: "useVuex", component: useVuex },
    { path: '/useSimpleStore', name: "useSimpleStore", component: useSimpleStore },
    { path: '/useGlobalComponent', name: "useGlobalComponent", component: useGlobalComponent },
    { path: '/secDialog', name: "secDialog", component: secDialog },
    { path: '/requireManyModule', name: "requireManyModule", component: requireManyModule },
    { path: '/useMixin', name: "useMixin", component: useMixin },
    { path: '/useMergeStrategies', name: "useMergeStrategies", component: useMergeStrategies },
    {
        path: '/useComponents',
        name: 'useComponents',
        component: useComponents,
        redirect: { name: 'eventNative' },
        children: [
            { path: 'eventNative', name: "eventNative", component: eventNative },
            { path: 'communication', name: "communication", component: communication },
            { path: 'findComponent', name: "findComponent", component: findComponent },
        ]
    },
    { path: '/useCheckbox', name: "useCheckbox", component: useCheckbox },
    { path: '/useDisplay', name: "useDisplay", component: useDisplay }

]
