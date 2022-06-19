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
          季節：<span class="kansouInfo">{{ tweet.season }}</span>
        </div>
      </div>
      <div class="infoContainer2">
        <img :src="url" />
        <div class="info">感想:</div>
        <div class="inputInfo">{{ tweet.kansou }}</div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import HeaderApp from "@/components/HeaderApp.vue"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase.js"
import HomeApp from "@/views/HomeApp.vue"

export default {
  name: "HomeApp",
  components: {
    HeaderApp,
  },

  data() {
    return {
      feedback: "",
      tweetArray: [],
      url: HomeApp,
    }
  },
  created() {
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.tweetArray.push({ id: doc.id, ...doc.data() })
      })
    })
  },
}
</script>

<style>
.etsuranbox {
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #ccccff;
  margin: 100px;
}
.infoContainer1 {
  padding: 20px;
  width: 40%;
}
.infoContainer2 {
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
.inputInfo {
  top: 10px;
  left: 200px;
  margin: 20px;
  text-align: left;
  font-weight: 200;
}
.kansouInfo {
  left: 200px;
  margin-bottom: 20px;
  text-align: left;
  font-weight: 200;
}
</style>
