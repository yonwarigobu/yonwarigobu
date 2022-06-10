<template>
  <div class="etsuran">
    <div id="etsuran" v-for="hoge in hogee" :key="hoge">
      {{ hoge.text }}
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
      hogee: [],
    }
  },
  created() {
    getDocs(collection(db, "hoge")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.hogee.push({ id: doc.id, ...doc.data() })
      })
    })
  },
}
</script>
<style></style>
