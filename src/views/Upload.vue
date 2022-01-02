<template>
  <div class="upload">
    <div class="title">
      <img class="title-img" src="../assets/jerryfish.png" />
      <h2 class="title-text">最近更新されたページ</h2>
    </div>
    <div class="form">
      <div class="form-selected">
        <h3>種類を選んでください</h3>
        <button @click="worksSwitch" :class="pushW">WORKS</button
        ><button @click="memorandumSwitch" :class="pushM">MEMORANDUM</button
        ><button @click="tweetSwitch" :class="pushT">TWEET</button>
      </div>
      <div class="w-or-m" v-if="switching === '1' || switching === '2'">
        <div class="form-title">
          <h3>タイトル</h3>
          <input type="text" v-model="title" required />
        </div>
        <div class="form-img">
          <h3>プレビュー画像または動画</h3>
          <input type="file" id="file" name="img" accept="image/*" required />
        </div>
        <div class="form-comment">
          <h3>コメント</h3>
          <textarea
            name="comment"
            cols="17"
            rows="7"
            v-model="comment"
            required
          ></textarea>
        </div>
        <div class="form-url">
          <h3>URL</h3>
          <input type="text" v-model="url" required>
        </div>
      </div>
      <div class="tweet" v-else-if="switching === '3'">
        <textarea
          name="tweet"
          cols="17"
          rows="7"
          v-model="comment"
          required
        ></textarea>
      </div>
      <div class="none" v-else></div>
      <button v-on:click="submit">送信</button>
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
.on {
  background-color: rgba(0, 0, 0, 0.151);
}
</style>

<script>
import { getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/firebase.js"

export default {
  data() {
    return {
      title: "",
      comment: "",
      url: "",
      switching: 0,
      pushW: "off",
      pushM: "off",
      pushT: "off",
    }
  },
  methods: {
    worksSwitch() {
      this.switching = "1"
      console.log(this.switching)
      this.pushW = "on"
      this.pushM = "off"
      this.pushT = "off"
    },
    memorandumSwitch() {
      this.switching = "2"
      console.log(this.switching)
      this.pushW = "off"
      this.pushM = "on"
      this.pushT = "off"
    },
    tweetSwitch() {
      this.switching = "3"
      console.log(this.switching)
      this.pushW = "off"
      this.pushM = "off"
      this.pushT = "on"
    },
    async submit() {
      if (this.switching === "1" || this.switching === "2") {
        const fileHolder = document.getElementById("file")
        const file = fileHolder.files[0]
        if (
          this.title.value === "" ||
          fileHolder.value === "" ||
          this.comment.value === "" ||
          this.url.value === ""
        ) {
          alert("項目を埋めてください。")
        } else {
          //img
          const storage = getStorage()
          const storageRef = ref(storage, `image/${file.name}`)
          if (this.switching === "1") {
            const metadata = {
              customMetadata: {
                "type": "works"
              }
            }
            const uploadTask = uploadBytesResumable(storageRef, file, metadata)
            console.log(uploadTask)

            //title,comment,date
            const docRef = await addDoc(collection(db, "data"), {
              title: this.title,
              comment: this.comment,
              date: serverTimestamp(),
              url: this.url,
              type: "works"
            })
            console.log(docRef)
          } else if (this.switching === "2") {
            //img
            const metadata = {
              customMetadata: {
                "type": "memorandums"
              }
            }
            const uploadTask = uploadBytesResumable(storageRef, file, metadata)
            console.log(uploadTask)

            //title,comment,date
            const docRef = await addDoc(collection(db, "data"), {
              title: this.title,
              comment: this.comment,
              date: serverTimestamp(),
              url: this.url,
              type: "memorandums"
            })
            console.log(docRef)
          }
      this.comment = ""
      alert("送信成功！")
          fileHolder.value = ""
          this.title = ""
          this.url = ""
        
      }} else if (this.switching === "3") {
        if (
          this.title.value === "" ||
          this.comment.value === ""
        ) {
          alert("項目を埋めてください。")
        } else {
        //title,comment,date
        const docRef = await addDoc(collection(db, "data"), {
          comment: this.comment,
              date: serverTimestamp(),
          type: "tweet"
        })
        console.log(docRef)
      this.comment = ""
      alert("送信成功！")
      }
      }
    },
  },
}
</script>
