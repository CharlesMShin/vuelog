import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue"
import Home from "./components/Home.vue"
import Detail from "./components/Detail.vue"
import Profile from "./components/Profile.vue"

const routes = [
    {
        path: "/detail/:id",
        component: Detail,
    },
    {
        path: "/list",
        component: List,
    },
    {
        path: "/Profile",
        component: Profile,
    },
    {
        path: "/",
        component: List,
    },
    {
        path: "/:anythin(.*)",
        component: Home,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;