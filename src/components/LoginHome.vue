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
body {
  margin: 0;
}
.background {
  width: 100%;
  height: 100vh;
  margin: 0px;
  background-image: url(../assets/Loginimg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.login {
  padding-top: 8rem;
}

h1 {
  margin-top: 0;
  padding: 0;
  border: 0;
  font-size: 6em;
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
