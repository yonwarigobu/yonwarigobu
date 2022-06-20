import { createRouter, createWebHistory } from "vue-router"
import HomeApp from "../views/HomeApp.vue"
import LoginApp from "../components/LoginHome.vue"
import PostApp from "../views/PostApp.vue"
import LogoutApp from "../views/LogoutApp.vue"

const routes = [
  {
    path: "/home",
    name: "HomeApp",
    component: HomeApp,
    beforeEnter: (to, from, next) => {
      console.log("router: beforeRouteEnter")
      next()
    },
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
    beforeEnter: (to, from, next) => {
      console.log("router: beforeRouteEnter")
      next()
    },
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

router.beforeEach((to, from, next) => {
  console.log("global: beforeEach")

  next()
})

export default router
