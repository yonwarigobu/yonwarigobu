<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link> |
    <router-link to="/post">Post</router-link>
    <router-link to="/mypage">Mypage</router-link>
    <HeaderApp></HeaderApp>
  </div>
  <router-view />
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue"

export default {
  components: {
    HeaderApp,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ae2a13;
}
</style>
