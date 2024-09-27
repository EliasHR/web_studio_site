import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/404',
            name: '404',
            component: () => import('@/views/Page404.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: { name: '404' }
        }
    ]
})

export default router
