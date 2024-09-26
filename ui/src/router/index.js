import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page404 from '../views/Page404.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/404',
            name: '404',
            component: Page404,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: { name: '404' }
        }
    ]
})

/* router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        window.location.href = "/404"
    } else {
        next();
    }
}) */

export default router
