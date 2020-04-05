import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router) 
const router = new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component: () => import('@/views/home')
        },
        {
            path:'/view1',
            name:'view1',
            component: () => import('@/views/view1')
        },
        {
            path:'/view2',
            name:'view2',
            component: () => import('@/views/view2')
        },
        {
            path:'/view3',
            name:'view3',
            component: () => import('@/views/view3')
        },
        {
            path:'/view4',
            name:'view4',
            component: () => import('@/views/view4')
        },
        {
            path:'/view5',
            name:'view5',
            component: () => import('@/views/view5')
        },
        {
            path:'/view6',
            name:'view6',
            component: () => import('@/views/view6')
        },
        {
            path:'/view7',
            name:'view7',
            component: () => import('@/views/view7')
        },
        {
            path:'/view8',
            name:'view8',
            component: () => import('@/views/view8')
        },
        {
            path:'/view9',
            name:'view9',
            component: () => import('@/views/view9')
        }
    ]
})
export default router