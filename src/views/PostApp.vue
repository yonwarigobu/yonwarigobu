<template>
  <div class="post">
    <h1>投稿ページ</h1>
  </div>

  <div class="form__wrapper">
    <textarea
      class="form__textarea"
      v-model="place"
      placeholder="場所を入力してね！"
    />
    <textarea
      class="form__textarea"
      v-model="people"
      placeholder="人数を入力してね！"
    />
    <textarea
      class="form__textarea"
      v-model="relationships"
      placeholder="どのような人と行ったかを入力してね！"
    />
    <textarea
      class="form__textarea"
      v-model="season"
      placeholder="行った日時(何月)を入力してね！"
    />
    <textarea
      class="form__textarea"
      v-model="kikan"
      placeholder="期間(何泊何日か)を入力してね！"
    />
    <textarea
      class="form__textarea"
      v-model="purpose"
      placeholder="目的を入力してね！"
    />
    <textarea
      class="form__textarea"
      v-model="money"
      placeholder="費用を入力してね！"
    />
    <textarea
      class="form__textarea"
      v-model="kansou"
      placeholder="その他、旅行などの感想を入力してね！"
    />
    <div class="form__buttons">
      <button v-on:click="postTweet" class="form__submit-button">投稿</button>
    </div>
  </div>

  <div class="app">
    <!-- 変更点１ -->
    <div>
      <p v-for="tweet in tweets" :key="tweet.id">
        {{ tweet.kansou }}

        {{ tweet.place }}
        {{ tweet.people }}
        {{ tweet.money }}
        {{ tweet.purpose }}
        {{ tweet.relationships }}
        {{ tweet.season }}
        {{ tweet.kikan }}
      </p>
    </div>
  </div>
</template>

<script>
/* 変更点１ */
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export default {
  data() {
    return {
      kansou: "",
      place: "",
      people: "",
      money: "",
      purpose: "",
      relationships: "",
      season: "",
      kikan: "",

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
        kansou: this.kansou,

        money: this.money + "円",

        place: this.place,

        people: this.people + "人",

        purpose: this.purpose,

        relationships: this.relationships,

        season: this.season,

        kikan: this.kikan,
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
