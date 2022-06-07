<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <LoginHome v-if="isLogin"></LoginHome>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import LoginHome from "@/components/LoginHome.vue"

export default {
  name: "HomeApp",
  components: {
    HelloWorld,
    LoginHome,
  },
  data() {
    return {
      isLogin: false,
      userData: null,
    }
  },
}
</script>
