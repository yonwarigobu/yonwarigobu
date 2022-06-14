<template>
  <div class="etsuranbox">
    <div id="etsuran" v-for="tweet in tweetArray" :key="tweet">
      <div>場所{{ tweet.place }}</div>
      <div>人数{{ tweet.people }}</div>
      <div>出費{{ tweet.moneyS }}</div>
      <div>感想{{ tweet.text }}</div>
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
<style></style>
