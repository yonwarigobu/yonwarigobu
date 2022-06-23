<template>
  <HeaderApp></HeaderApp>
  <div class="post"></div>

  <div class="form__wrapper">
    <select class="form__textarea" v-model="place">
      <option disabled value="">-- 場所を入力してね！ --</option>
      <option value="北海道">北海道</option>
      <option value="青森">青森</option>
      <option value="岩手">神奈川</option>
      <option value="宮城">宮城</option>
      <option value="秋田">秋田</option>
      <option value="山形">山形</option>
      <option value="福島">福島</option>
      <option value="茨城">茨城</option>
      <option value="栃木">栃木</option>
      <option value="群馬">群馬</option>
      <option value="埼玉">埼玉</option>
      <option value="千葉">千葉</option>
      <option value="東京">東京</option>
      <option value="神奈川">神奈川</option>
      <option value="新潟">新潟</option>
      <option value="富山">富山</option>
      <option value="石川">石川</option>
      <option value="福井">福井</option>
      <option value="山梨">山梨</option>
      <option value="長野">長野</option>
      <option value="岐阜">岐阜</option>
      <option value="静岡">静岡</option>
      <option value="愛知">愛知</option>
      <option value="三重">三重</option>
      <option value="滋賀">滋賀</option>
      <option value="京都">京都</option>
      <option value="大阪">大阪</option>
      <option value="兵庫">兵庫</option>
      <option value="和歌山">和歌山</option>
      <option value="鳥取">鳥取</option>
      <option value="島根">島根</option>
      <option value="岡山">岡山</option>
      <option value="広島">広島</option>
      <option value="山口">山口</option>
      <option value="徳島">徳島</option>
      <option value="香川">香川</option>
      <option value="愛媛">愛媛</option>
      <option value="高知">高知</option>
      <option value="福岡">福岡</option>
      <option value="佐賀">佐賀</option>
      <option value="長崎">長崎</option>
      <option value="熊本">熊本</option>
      <option value="大分">大分</option>
      <option value="宮崎">宮崎</option>
      <option value="鹿児島">鹿児島</option>
      <option value="沖縄">沖縄</option>
      <option value="その他">その他</option>
    </select>

    <select class="form__textarea" v-model="people">
      <option disabled value="">--人数を入力してね！--</option>
      <option value="1人">1人</option>
      <option value="2人">2人</option>
      <option value="3人">3人</option>
      <option value="4人">4人</option>
      <option value="5人">5人</option>
      <option value="6人">6人</option>
      <option value="7人">7人</option>
      <option value="8人">8人</option>
      <option value="9人">9人</option>
      <option value="10人以上">10人以上</option></select
    ><br />

    <select class="form__textarea" v-model="relationships">
      <option disabled value="">
        --どのような人と行ったかを入力してね！--
      </option>
      <option value="一人">一人</option>
      <option value="友達">友達</option>
      <option value="家族、親戚">家族、親戚</option>
      <option value="恋人">恋人</option>
      <option value="その他">その他</option>
    </select>

    <select
      class="form__textarea"
      v-model="season"
      placeholder="行った日時(何月)を入力してね！"
    >
      <option disabled value="">--行った日時を入力してね！--</option>
      <option value="1月">1月</option>
      <option value="2月">2月</option>
      <option value="3月">3月</option>
      <option value="4月">4月</option>
      <option value="5月">5月</option>
      <option value="6月">6月</option>
      <option value="7月">7月</option>
      <option value="8月">8月</option>
      <option value="9月">9月</option>
      <option value="10月">10月</option>
      <option value="11月">11月</option>
      <option value="12月">12月</option>
    </select>
    <select
      class="form__textarea"
      v-model="kikan"
      placeholder="期間(何泊何日か)を入力してね！"
    >
      <option disabled value="">--期間(何泊何日)かを入力してね！--</option>
      <option value="日帰り">日帰り</option>
      <option value="1泊2日">1泊2日</option>
      <option value="2泊3日">2泊3日</option>
      <option value="3泊4日">3泊4日</option>
      <option value="4泊5日">4泊5日</option>
      <option value="5泊6日">5泊6日</option>
      <option value="6泊7日">6泊7日</option>
      <option value="7泊以上">7泊以上</option></select
    ><br />
    <textarea
      class="form__textarea"
      v-model="purpose"
      placeholder="目的を入力してね！(手入力)"
    ></textarea>
    <textarea
      class="form__textarea"
      v-model="money"
      placeholder="費用を入力してね！(手入力)"
    />
    <textarea
      class="form__textarea"
      v-model="kansou"
      placeholder="その他、旅行などの感想を入力してね！(手入力)"
    />
    <div>
      <h4>写真を入れてね↓</h4>
      <input type="file" ref="postImage" @change="uploadFile" />
    </div>
    <div class="form__buttons">
      <button v-on:click="postTweet" class="form__submit-button">
        投稿する！
      </button>
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
import { getAuth, onAuthStateChanged } from "firebase/auth"

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
            addDoc(collection(db, "tweets"), {
              url: downloadURL,
              kansou: this.kansou,

              money: this.money + "円",

              place: this.place,

              people: this.people,

              purpose: this.purpose,

              relationships: this.relationships,

              season: this.season,

              kikan: this.kikan,
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

  created() {
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

<style scoped>
.post {
  margin-top: 4rem;
}
.home__wrapper {
  margin: 0 auto;
  max-width: 600px;
  background-color: #ccccff;
}
.form__submit-button {
  margin: 0 auto;
  width: 15rem;
  height: 4rem;
  border-radius: 10px 10px 10px 10px;
  background-color: #e1e8e0;
  margin-top: 3rem;
  font-size: 1.6rem;
}

.form__submit-button:hover {
  background-color: #99cc99;
  font-size: 1.8rem;
}

.form__textarea {
  margin: 0 auto;
  width: 260px;
  height: 60px;
  border-radius: 3px 3px 3px 3px;
  background-color: #e1e8e0;
  margin: 1rem;
}

h4 {
  margin: 0;
}
</style>
