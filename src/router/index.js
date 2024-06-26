import {createRouter, createWebHistory} from 'vue-router';

import About from '../views/About.vue'


const routes = [
    {
        path: '/about',
        name: 'Abput',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;