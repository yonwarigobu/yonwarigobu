<template>
  <div class="post">
    <h1>投稿ページ</h1>
  </div>

  <div class="home__wrapper">
    <submit-form />
  </div>

  <div class="app">
    <button v-on:click="postTweet">投稿</button>
    <!-- 変更点１ -->
    <div>
      <p v-for="tweet in tweets" :key="tweet.id">
        {{ tweet.text }}
        {{ tweet.place }}
        {{ tweet.people }}
        {{ tweet.money }}
      </p>
    </div>
  </div>
</template>

<script>
import SubmitForm from "../components/SubmitForm.vue"
/* 変更点１ */
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export default {
  components: { SubmitForm },

  data() {
    return {
      /* 変更点２ */
      tweets: [
        // {
        //   id: "0GwoGZuhTNhqHQDBeiVW",
        //   text: "こんにちは、ツイートの本文です。"
        // }
      ],
    }
  },
  methods: {
    postTweet() {
      const tweet = {
        text: "旅行の詳細を投稿しました。",

        money: 30000,

        place: "北海道",

        people: 5,
      }
      addDoc(collection(db, "tweets"), tweet).then((ref) => {
        this.tweets.push({
          id: ref.id,
          ...tweet,
        })
      })
    },
  },

  /* 変更点３ */
  created() {
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.tweets.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
}
</script>

<style scoped>
.home__wrapper {
  margin: 0 auto;
  max-width: 600px;
  background-color: #ccc;
}
</style>
