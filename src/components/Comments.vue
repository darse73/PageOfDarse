<template>
  <div class="com-section">
    <div v-for="comment in comments" :key="comment.id" class="list-container">
      <div class="list">
        <div class="date">{{ comment.date }}</div>
        <img class="icon" :src="comment.icon" />
        <div class="name">{{ comment.name }}</div>
        <div class="comment">{{ comment.comment }}</div>
      </div>
    </div>
    <div class="form">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="inputCom"
        class="input-com"
      ></textarea>
      <button class="submit" @click="submit">送信</button>
    </div>
  </div>
</template>

<style scoped>
.com-section {
  width: 100%;
  padding: 2rem 0;
  border-top: 0.5rem dotted rgb(95, 95, 255);
}
.list {
  background-color: rgb(245, 252, 255);
  width: 70%;
  padding: 1rem;
  margin: 0 auto 1.5rem;
  display: grid;
  grid-template-columns: 9rem 3rem 1fr;
  grid-row-gap: 1rem;
  font-size: 2rem;
  line-height: 2.5rem;
  border: solid 0.2rem rgb(0, 183, 255);
}
.icon {
  width: 2.5rem;
}
.input-com {
  padding: 1rem;
  margin: 2rem auto;
  display: block;
  font-size: 2rem;
  border: solid 0.2rem rgb(0, 183, 255);
  width: 70%;
}
.input-com:focus {
  padding: 1rem;
  margin: 2rem auto;
  display: block;
  font-size: 2rem;
  border: solid 0.2rem rgb(0, 183, 255);
  width: 70%;
}
.submit {
  display: block;
  font-size: 1.5rem;
  margin: 0 auto;
}
@media screen and (max-width: 599px) {
  .list {
    grid-template-columns: 3rem 1fr;
  }
  .icon {
    grid-column: 1;
  }
}
</style>

<script>
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore"
import { db } from "@/firebase.js"
import { getAuth } from "firebase/auth"
const auth = getAuth()
const user = auth.currentUser

export default {
  data() {
    return {
      comments: [],
      inputCom: "",
    }
  },
  async created() {
    let num = 0
    const path = location.pathname
    const pathArr = path.split("/")
    const type = pathArr.slice(-1)
    const q = query(
      collection(db, "comment"),
      where("type", "==", type),
      orderBy("date", "desc")
    )
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      const d = `${
        doc.data().date && doc.data().date.toDate && doc.data().date.toDate()
      }`
      const dateArr = d.split(/ /)
      const sliceArr = dateArr.slice(1, 4)
      const str = `${sliceArr[2]}/${sliceArr[0]}/${sliceArr[1]}`
      const repStr = str
        .replace("Jan", "01")
        .replace("Feb", "02")
        .replace("Mar", "03")
        .replace("Apl", "04")
        .replace("May", "05")
        .replace("Jun", "06")
        .replace("Jul", "07")
        .replace("Aug", "08")
        .replace("Sep", "09")
        .replace("Oct", "10")
        .replace("Nov", "11")
        .replace("Dec", "12")
      this.comments.push({
        date: repStr,
        name: doc.data().name,
        icon: doc.data().icon,
        comment: doc.data().comment,
        id: num,
      })
      num += 1
    })
  },
  methods: {
    async submit() {
      if (user.displayName == null) {
        user.displayName = "ななしのごんべい"
      }
      const path = location.pathname
      const pathArr = path.split("/")
      const type = pathArr.slice(-1)
      const docRef = await addDoc(collection(db, "comment"), {
        type: type,
        date: serverTimestamp(),
        name: user.displayName,
        icon: user.photoURL,
        comment: this.inputCom,
      })
      console.log(docRef)
      this.inputCom = ""
      alert("送信成功！")
    },
    async receive(path) {
      let num = 0
      this.comments = []
      const pathArr = path.split("/")
      const type = pathArr.slice(-1)
      const q = query(
        collection(db, "comment"),
        where("type", "==", type),
        orderBy("date", "desc")
      )
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        const d = `${
          doc.data().date && doc.data().date.toDate && doc.data().date.toDate()
        }`
        const dateArr = d.split(/ /)
        const sliceArr = dateArr.slice(1, 4)
        const str = `${sliceArr[2]}/${sliceArr[0]}/${sliceArr[1]}`
        const repStr = str
          .replace("Jan", "01")
          .replace("Feb", "02")
          .replace("Mar", "03")
          .replace("Apl", "04")
          .replace("May", "05")
          .replace("Jun", "06")
          .replace("Jul", "07")
          .replace("Aug", "08")
          .replace("Sep", "09")
          .replace("Oct", "10")
          .replace("Nov", "11")
          .replace("Dec", "12")
        this.comments.push({
          date: repStr,
          name: doc.data().name,
          icon: doc.data().icon,
          comment: doc.data().comment,
          id: num,
        })
        num += 1
      })
    },
  },
  watch: {
    $route(to) {
      this.receive(to.path)
    },
  },
}
</script>
