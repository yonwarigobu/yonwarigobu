<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Logout />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import Logout from "@/components/Logout.vue"

export default {
  name: "HomeApp",
  components: {
    HelloWorld,
    Logout,
  },
  data() {
    return {
      isLogin: false,
      userData: null,
    }
  },
}
</script>
