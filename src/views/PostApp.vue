<template>
  <HeaderApp></HeaderApp>
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
    <input type="file" ref="postImage" @change="uploadFile" />
    <div class="form__buttons">
      <button v-on:click="postTweet" class="form__submit-button">投稿</button>
    </div>
    <div v-if="url">
      <img :src="url" />
    </div>
    <div>{{ url }}</div>
  </div>
</template>

<script>
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"
import HeaderApp from "@/components/HeaderApp.vue"

export default {
  components: {
    HeaderApp,
  },

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
      tweets: [],
      url: "",
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
      const file = this.$refs.postImage.files[0]
      const storage = getStorage()
      const storageRef = ref(storage, file.name)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log("Upload is " + progress + "% done")
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL)
            addDoc(collection(db, "tweets"), tweet).then((ref) => {
              this.tweets.push({
                id: ref.id,
                ...tweet,
                url: downloadURL,
              })
            })
          })
        }
      )
    },
    uploadFile() {
      const file = this.$refs.postImage.files[0]
      this.url = URL.createObjectURL(file)
    },
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
