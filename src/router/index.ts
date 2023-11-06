import { createRouter, createWebHistory, } from 'vue-router'


export const routes = [

    {
        path: '/',
        redirect: '/home'  // 重定向到首页
    },

    {
        ///:catchAll(.*) 通配符 404 页面
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () => import('@/views/Not/index.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/index.vue'),
    }
]
const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    next()
})
export default router
