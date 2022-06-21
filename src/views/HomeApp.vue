<template>
  <div>
    <HeaderApp></HeaderApp>
  </div>
  <div class="etsuran">
    <div class="etsuranbox" v-for="tweet in tweetArray" :key="tweet">
      <div class="infoContainer1">
        <div class="info">
          場所：<span class="inputInfo">{{ tweet.place }}</span>
        </div>
        <div class="info">
          人数： <span class="inputInfo">{{ tweet.people }}</span>
        </div>
        <div class="info">
          出費：<span class="inputInfo">{{ tweet.money }}</span>
        </div>
        <div class="info">
          目的：<span class="inputInfo">{{ tweet.purpose }}</span>
        </div>
        <div class="info">
          仲間：<span class="inputInfo">{{ tweet.relationships }}</span>
        </div>
        <div class="info">
          期間：<span class="inputInfo">{{ tweet.kikan }}</span>
        </div>
        <div class="info">
          季節：<span class="inputInfo">{{ tweet.season }}</span>
        </div>
      </div>
      <div class="infoContainer2">
        <div class="info">感想:</div>
        <div class="inputInfo">{{ tweet.kansou }}</div>
        <div class="inputInfo">
          <img class="image" :src="tweet.url" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import HeaderApp from "@/components/HeaderApp.vue"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase.js"
import { getAuth, onAuthStateChanged } from "firebase/auth"
export default {
  name: "HomeApp",
  components: {
    HeaderApp,
  },

  data() {
    return {
      feedback: "",
      tweetArray: [],
    }
  },
  created() {
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.tweetArray.push({ id: doc.id, ...doc.data() })
      })
    })
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
      } else {
        console.log("notuser")
        this.$router.push("/")
      }
    })
  },
}
</script>

<style>
.etsuranbox {
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #edffbe;
  margin: 100px;
}
.infoContainer1 {
  padding: 20px;
  width: 40%;
}
.infoContainer2 {
  position: relative;
  padding: 20px;
  width: 60%;
}
.info {
  top: 10px;
  left: 200px;
  margin: 20px;
  text-align: left;
  font-weight: 600;
}
.image {
  left: 200px;
  width: 70%;
  height: 70%;
}

.inputInfo {
  top: 10px;
  left: 200px;
  margin: 20px;
  text-align: left;
  font-weight: 200;
}
</style>
