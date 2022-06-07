<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <button @click="googleLogin">Googleアカウントでログイン</button>
  </div>
</template>

<script>
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"

export default {
  name: "login",
  data() {
    return {
      msg: "ログイン作成中",
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
        })
        .catch((error) => {
          window.alert(error)
        })
    },
  },
}
</script>
