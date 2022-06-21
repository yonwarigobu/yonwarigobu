<template>
  <div class="background">
    <transition appear>
      <div v-if="show" class="login">
        <h1>旅シェア</h1>
        <button class="button" @click="googleLogin">Googleでログイン</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"

export default {
  name: "LoginApp",
  beforeRouteEnter(to, form, next) {
    next()
  },
  beforeRouteUpdate(to, form, next) {
    next()
  },
  beforeRouteLeave(to, form, next) {
    next()
  },

  data() {
    return {
      show: true,
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
  background-image: url(../assets/Loginimg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.login {
  /*background-color: aqua;*/
}

h1 {
  padding: 0;
  border: 0;
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

.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: opacity 1s;
}

.button:hover {
  margin-top: 3px;
  color: #fff;
  background: #dcc2ff;
  border-bottom: 2px solid #c299ff;
}
</style>
