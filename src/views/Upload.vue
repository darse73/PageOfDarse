<template>
  <div class="upload">
    <Title><template v-slot:front>UPLOAD</template></Title>
    <div class="explanation">
      <h3>
        ※このページは（今のところ）主がアップロードするように作られています
      </h3>
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
          <input type="text" v-model="url" required />
        </div>
      </div>
      <div class="tweet" v-else-if="switching === '3'">
        <textarea
          name="tweet"
          cols="17"
          rows="7"
          v-model="comment"
          required
          class="form-comment"
        ></textarea>
      </div>
      <div class="none" v-else></div>
      <button @click="submit" class="submit">送信</button>
      <button class="login" @click="login"></button>
      <button class="logout" @click="logout"></button>
    </div>
  </div>
</template>

<style scoped>
.explanation {
  margin: 5rem 3rem;
  font-size: 2rem;
}
.form {
  margin: 5rem 3rem;
}
.form-selected {
  font-size: 2.5rem;
}
.form-selected button {
  margin-right: 0.5rem;
}
.form-title,
.form-img,
.form-comment,
.form-url,
.submit {
  font-size: 1.5rem;
  margin-top: 1.5rem;
}
.on {
  background-color: rgb(207, 207, 207);
}

@media screen and (max-width: 599px) {
  .explanation {
    margin: 0rem 3rem;
    font-size: 2rem;
  }
  .form-selected button {
    display: block;
    margin-top: 0.5rem;
  }
}
</style>

<script>
import Title from "@/components/Title.vue"
import { getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/firebase.js"
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
} from "firebase/auth"
const auth = getAuth()

export default {
  components: {
    Title,
  },
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
          this.title === "" ||
          fileHolder.value === "" ||
          this.comment === "" ||
          this.url === ""
        ) {
          alert("項目を埋めてください。")
        } else {
          //img
          const storage = getStorage()
          const storageRef = ref(storage, `image/${file.name}`)
          if (this.switching === "1") {
            const metadata = {
              customMetadata: {
                type: "works",
              },
            }
            const uploadTask = uploadBytesResumable(storageRef, file, metadata)
            console.log(uploadTask)

            //title,comment,date
            const docRef = await addDoc(collection(db, "data"), {
              title: this.title,
              comment: this.comment,
              date: serverTimestamp(),
              url: this.url,
              type: "works",
            })
            console.log(docRef)
          } else if (this.switching === "2") {
            //img
            const metadata = {
              customMetadata: {
                type: "memorandums",
              },
            }
            const uploadTask = uploadBytesResumable(storageRef, file, metadata)
            console.log(uploadTask)

            //title,comment,date
            const docRef = await addDoc(collection(db, "data"), {
              title: this.title,
              comment: this.comment,
              date: serverTimestamp(),
              url: this.url,
              type: "memorandums",
            })
            console.log(docRef)
          }
          this.comment = ""
          alert("送信成功！")
          fileHolder.value = ""
          this.title = ""
          this.url = ""
        }
      } else if (this.switching === "3") {
        if (this.comment === "") {
          alert("項目を埋めてください。")
        } else {
          //title,comment,date
          const docRef = await addDoc(collection(db, "data"), {
            comment: this.comment,
            date: serverTimestamp(),
            type: "tweet",
          })
          console.log(docRef)
          this.comment = ""
          alert("送信成功！")
        }
      }
    },
    login() {
      const provider = new GithubAuthProvider()
      signInWithPopup(auth, provider)
        .then((result) => {
          const token =
            GithubAuthProvider.credentialFromResult(result).accessToken
          const user = result.user
          console.log(token)
          console.log(user)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    logout() {
      signOut(auth).then(() => {
        console.log("logout success")
      })
    },
  },
}
</script>
