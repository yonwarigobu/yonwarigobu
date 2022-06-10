<template>
  <div class="home">
    <Logout />
  </div>
</template>

<script>
// @ is an alias to /src
import Logout from "@/components/Logout.vue"

export default {
  name: "HomeApp",
  components: {
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
