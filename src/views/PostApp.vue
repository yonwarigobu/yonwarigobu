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
    >
    </textarea>
    <textarea
      class="form__textarea"
      v-model="people"
      placeholder="人数を入力してね！"
    >
     <option value="aaa">1</option>
      <option value="iii">2</option>
      <option value="uuu">3</option>
    </textarea>
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
    <input type="file" @change="fileUpload" />
    <div class="form__buttons">
      <button v-on:click="postTweet" class="form__submit-button">投稿</button>
    </div>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    postTweet() {
      const tweet = {
        kansou: this.kansou,

        money: this.money,

        place: this.place,

        people: this.people,

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
  /**
  //    * イメージ画像をアップロード.
  //    */
  //   fileUpload(event: any) {
  //     //アップロードしたい画像の情報を取得。
  //     const file = event.target.files[0]
  //     //画像ファイルのURLを取得。
  //     this.img_url = URL.createObjectURL(file)
  //     //"files"は③で作成したフォルダ名
  //     //Firebase storageに画像ファイルを送信。
  //     const storageRef = ref(storage, "files/" + file.name)

  //     //Firebaseにデータを適切に送るために必要なコード
  //     uploadBytes(storageRef, file).then((snapshot) => {
  //       console.log("blobかfileをアップロード", snapshot)
  //     })
  //   },
  // },

  // /* 変更点３ */
  // created() {
  //   getDocs(collection(db, "tweets")).then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       this.tweets.push({
  //         id: doc.id,
  //         ...doc.data(),
  //       })
  //     })
  //   })
  // },
}
</script>

<style scoped>
.home__wrapper {
  margin: 0 auto;
  max-width: 600px;
  background-color: #ccccff;
}
.form__submit-button {
  margin: 0 auto;
  width: 80px;
  height: 40px;
  border-radius: 10px 10px 10px 10px;
  background-color: #ccccff;
}
</style>
