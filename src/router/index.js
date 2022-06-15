import { createRouter, createWebHistory } from "vue-router"
import HomeApp from "../views/HomeApp.vue"
import PostApp from "../views/PostApp.vue"
import MypageApp from "../views/MypageApp.vue"
import LoginApp from "../components/LoginHome.vue"

const routes = [
  {
    path: "/home",
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
