<template>
  <div class="etsuran">
    <p id="etsuran" v-for="tweet in tweets" :key="tweet.id">
      {{ tweet.text }}
    </p>
    <p>みえてる？</p>
  </div>
</template>

<script>
import { collection, getDoc } from "firebase/firestore"
import { db } from "../firebase.js"
export default {
  data() {
    return {
      tweetee: [],
    }
  },
  created() {
    getDoc(collection(db, "tweet")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.tweetee.push({ id: doc.id })
      })
    })
  },
}
</script>
<style></style>
