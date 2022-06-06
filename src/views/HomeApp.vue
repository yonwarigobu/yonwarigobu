<template>
  <div class="etsuran">
    <p v-for="tweet in tweets" :key="tweet.id">
      {{ tweet }}
    </p>
  </div>
</template>

<script>
import { collection, getDoc } from "firebase/firestore"
import { db } from ".firebase"
export default {
 data(){
   return{
     tweetee:[]
   }
 }
 created(){
   getDoc(collection(db, "tweet")).then(snapshot) => {
     snapshot.forEach((doc)=>{
       this.tweetee.push({id:doc.id})
     })
   }
 }
}
</script>
