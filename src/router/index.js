import { createRouter, createWebHistory } from "vue-router"
import HomeApp from "../views/HomeApp.vue"
import LoginApp from "../views/LoginApp.vue"
import PostApp from "../views/PostApp.vue"
import MypageApp from "../views/MypageApp.vue"
import LogoutApp from "../views/LogoutApp.vue"

const routes = [
  {
    path: "/",
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
    path: "/login",
    name: "LoginApp",
    component: LoginApp,
  },
  {
    path: "/mypage",
    name: "MypageApp",
    component: MypageApp,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
