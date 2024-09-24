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
        /* {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: Page404
        } */
        {
            path: '/404',
            name: '404',
            component: Page404,
        },
        {
            path: '/:pathMatch(.*)*',
            //redirect: '/404'
            beforeEnter() { window.location.href = "/404" },
            /* beforeEnter(to, from, next) {
                next('/404');
            } */
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        next('/404');
    } else {
        next();
    }
});

export default router
