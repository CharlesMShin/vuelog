import { createRouter, createWebHashHistory } from "vue-router";
import List from "./components/List.vue"
import Detail from "./components/Detail.vue"
import Profile from "./components/Profile.vue"
import Secret from "./components/Secret.vue"

const routes = [
    {
        path: "/detail/:id",
        component: Detail,
        children : [
            {
                path: "secret",
                component: Secret,
            },
            // {
            //     path: "/comment",
            //     component: Comment.vue,
            // },
        ]
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
    }
];

const router = createRouter({
    // history: createWebHistory(), //걍 브라우저 모드 기본 모드 (단, 서버가 URL을 채갈수 있음)
    history: createWebHashHistory(), //HashMod - # 뒤에 있는 내용들은 절대 서버로 전달 안됨 (서버가 라이팅 채가는걸 방지)
    routes,
});

export default router;