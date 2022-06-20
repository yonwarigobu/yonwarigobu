<template>
  <div class="background">
    <div class="login">
      <h1>旅シェア</h1>
      <button class="button fadeIn" @click="googleLogin">
        Googleでログイン
      </button>
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
  data() {},
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
  background-image: url(../assets/Loginimg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.login {
  background-color: aqua;
  animation: fade;
}

h1 {
  font-size: 6rem;
  font-family: "M PLUS Rounded 1c", sans-serif;
}

.button {
  font-family: "Noto Sans JP";
  font-size: 1.7rem;
  font-weight: 600;
  color: #fff;
  padding: 15px;
  background-color: #d0b0ff;
  border-bottom: 5px solid #b384ff;
  border-radius: 7px;
  -webkit-box-shadow: 0 3px 4px #B384FF(0, 0, 0, 0.3);
  box-shadow: 0 3px 4px #B384FF(0, 0, 0, 0.3);
}

/*.fadeIn {
  animation-name: fadeInAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}*/

.button:hover {
  margin-top: 3px;
  color: #fff;
  background: #dcc2ff;
  border-bottom: 2px solid #c299ff;
}
</style>
