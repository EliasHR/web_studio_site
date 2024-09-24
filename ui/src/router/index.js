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
            beforeRouteLeave(to, from) {
                window.location.href = "/404"
            }
        }
    ]
})

export default router
