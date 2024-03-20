import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/Home.vue";
import UrlPage from "../pages/Url.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/:id",
            component: UrlPage,
        },
    ],
});
