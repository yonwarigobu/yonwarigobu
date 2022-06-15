import { createRouter, createWebHistory } from "vue-router"
import HomeApp from "../views/HomeApp.vue"
import LoginApp from "@/components/LoginHome.vue"
import PostApp from "../views/PostApp.vue"
import MypageApp from "../views/MypageApp.vue"
import LogoutApp from "../views/LogoutApp.vue"

const routes = [
  {
    path: "/home",
    name: "HomeApp",
    component: HomeApp,
  },
  {
    path: "/logout",
    name: "LogoutApp",
    component: LogoutApp,
  },
  {
    path: "/post",
    name: "post",
    component: PostApp,
  },
  {
    path: "/mypage",
    name: "MypageApp",
    component: MypageApp,
  },
  {
    path: "/",
    name: "LoginApp",
    component: LoginApp,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
