import {createRouter, createWebHistory} from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from './views/AboutView.vue';

import ShopView from './views/ShopView.vue';
    import ItemView from './views/Shop/ItemView.vue';
import SchultzView from './views/SchultzView.vue';
import HanoiView from './views/HanoiView.vue';
import BattlerView from './views/BattlerView.vue';
import TimerView from './views/TimerView.vue';
import ProfBuilderView from './views/ProfBuilderView.vue';



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
            // Shop Items
            {
                path: "/shop/:id",
                name: "Item",
                component: ItemView
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
        },
        {
            path: "/battler",
            name: "Battler",
            component: BattlerView
        },
        {
            path: "/timer",
            name: "Timer",
            component: TimerView
        },
        {
            path: "/profbuilder",
            name: "Profile Builder",
            component: ProfBuilderView
        },
    ]

})
export default router;