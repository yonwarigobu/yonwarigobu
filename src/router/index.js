import { createRouter, createWebHistory } from "vue-router"
import HomeApp from "../views/HomeApp.vue"
import LoginApp from "../components/LoginHome.vue"
import PostApp from "../views/PostApp.vue"
import MypageApp from "../views/MypageApp.vue"
import LogoutApp from "../views/LogoutApp.vue"

const routes = [
  {
    path: "/home",
    name: "HomeApp",
    component: HomeApp,
    beforeEnter: (to, from, next) => {
      // このタイミングで実行したい何らかの処理
      console.log("component:beforeRouteEnter")
      next() // パイプラインの次のフックに移動する。
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
      // このタイミングで実行したい何らかの処理
      console.log("component:beforeRouteEnter")
      next() // パイプラインの次のフックに移動する。
    },
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
    beforeEnter: (to, from, next) => {
      // このタイミングで実行したい何らかの処理

      next() // パイプラインの次のフックに移動する。
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
