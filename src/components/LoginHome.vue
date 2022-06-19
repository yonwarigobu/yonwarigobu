<template>
  <div class="background">
    <div class="login">
      <h1>{{ msg }}</h1>
      <button @click="googleLogin">Googleアカウントでログイン</button>
    </div>
  </div>
</template>

<script>
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"

export default {
  name: "LoginApp",
  beforeRouteEnter(to, form, next) {
    // このタイミングで実行したい何らかの処理
    next()
  },
  beforeRouteUpdate(to, form, next) {
    // このタイミングで実行したい何らかの処理
    next()
  },
  beforeRouteLeave(to, form, next) {
    // このタイミングで実行したい何らかの処理
    next()
  },
  data() {
    return {
      msg: "ログイン",
    }
  },
  methods: {
    googleLogin() {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user
          console.log(user)
          this.$router.push("/home")
        })
        .catch((error) => {
          window.alert(error)
        })
    },
  },
}
</script>
<style>
.background {
  width: 100%;
  height: 100vh;
  background-image: url(./city.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.login {
  background-color: aqua;
}
</style>
