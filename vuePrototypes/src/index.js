import {createRouter, createWebHistory} from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from './views/AboutView.vue';

import ShopView from './views/ShopView.vue';
import SchultzView from './views/SchultzView.vue';
import HanoiView from './views/HanoiView.vue';

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView
        },
        {
            path: "/about",
            name: "About",
            component: AboutView
        },    
        {
            path: "/shop",
            name: "Shop",
            component: ShopView
        },
        {
            path: "/schultz",
            name: "Schultz",
            component: SchultzView
        },
        {
            path: "/hanoi",
            name: "Hanoi",
            component: HanoiView
        }
    ]

})
export default router;