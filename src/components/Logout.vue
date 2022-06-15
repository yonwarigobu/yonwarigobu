<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <button @click="googleSignOut">ログアウト</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth"

export default {
  name: "LogoutApp",
  data() {
    return {
      msg: "ログアウト",
    }
  },
  methods: {
    googleSignOut() {
      const auth = getAuth()
      signOut(auth)
      this.$router.push("/")
    },
  },
}
</script>
