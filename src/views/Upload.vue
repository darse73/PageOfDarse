<template>
  <div class="upload">
    <div class="title">
      <img class="title-img" src="../assets/jerryfish.png" />
      <h2 class="title-text">最近更新されたページ</h2>
    </div>
    <div class="form">
        <div class="form-title">
        <h3>タイトル</h3>
        <input type="text"></div>
        <div class="img">
            <h3>プレビュー画像または動画</h3>
            <input type="file" id="file" name="img" accept="image/*" >
        </div>
        <div class="comment">
          <h3>コメント</h3>
          <textarea name="comment" cols="17" rows="7"></textarea>
        </div>
    <button v-on:click="tweet">送信</button>
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  height: 5rem;
}
.title-img {
  width: 5rem;
}
.title-text {
  font-size: 2.5rem;
  line-height: 5rem;
}
</style>

<script>
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/firebase.js"
import firebase from "firebase/app"

export default {
  data() {
    return {
      inputTweet: "asdfasdfa",
    }
  },
  methods: {
    async tweet() {
      const docRef = await addDoc(collection(db, "messages"), {
        comments: "assf", //this.inputTweet
      })
      console.log(docRef)

      const storage = firebase.storage
      const file = document.getElementById("file").files[0]
      const storageRef = firebase.storage().ref()
      const metadata = {
        contentType: "image/*"
      }

      const uploadTask = storageRef.child(`image/${file.name}`).put(file, metadata)
      console.log(uploadTask)
    },
  },
}
</script>
