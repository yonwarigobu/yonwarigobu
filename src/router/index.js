import { createRouter, createWebHistory } from "vue-router"
import HomeApp from "../views/HomeApp.vue"
import LoginApp from "../views/LoginApp.vue"
import PostApp from "../views/PostApp.vue"
import MypageApp from "../views/MypageApp.vue"

const routes = [
  {
    path: "/",
    name: "HomeApp",
    component: HomeApp,
  },
  {
    path: "/about",
    name: "AboutApp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutApp.vue"),
  },
  {
    path: "/home",
    name: "HomeApp",
    component: HomeApp,
  },
  {
    path: "/login",
    name: "LoginApp",
    component: LoginApp,
  },
  {
    path: "/post",
    name: "PostApp",
    component: PostApp,
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
