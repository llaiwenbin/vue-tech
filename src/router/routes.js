import isSlot from '@/view/isSlot'
import useVuex from '@/view/useVuex'
import useSimpleStore from '@/view/useSimpleStore'
import useGlobalComponent from '@/view/useGlobalComponent'

const routes  = [
    { 
        path: '/',
        redirect:{
            path:'/isSlot'
        }
    },
    { path: '/isSlot', component: isSlot },
    { path: '/useVuex', component: useVuex },
    { path: '/useSimpleStore', component: useSimpleStore },
    { path: '/useGlobalComponent', component: useGlobalComponent }
];



export default routes ;