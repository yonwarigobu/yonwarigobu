<template>
  <div class="etsuran">
    <div class="etsuranbox" v-for="tweet in tweetArray" :key="tweet">
      <div class="infoContainer1">
        <div class="info">場所：</div>
        <span class="inputInfo">{{ tweet.place }}</span>
        <div class="info">人数：</div>
        <span class="inputInfo">{{ tweet.people }}</span
        >>
        <div class="info">出費：{{ tweet.moneyS }}</div>
        <div class="info">目的：{{ tweet.purpose }}</div>
        <div class="info">期間：{{ tweet.period }}</div>
        <div class="info">季節：{{ tweet.season }}</div>
      </div>
      <div class="infoContainer2">
        <img class="info" v-if="img_url" :src="img_url" />
        <div class="info">感想{{ tweet.text }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase.js"
export default {
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
</style>
