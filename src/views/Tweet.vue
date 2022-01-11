<template>
  <div class="tweet">
    <div class="update-lists">
      <Title><template v-slot:front>TWEET</template></Title>
      <div class="lists" v-for="data in datas" :key="data.id">
          <div class="list">
              <div class="date">{{ data.date }}</div>
              <div class="comment">{{ data.comment }}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  border: 0.2rem solid rgb(2, 61, 255);
  margin: 2rem 3rem 0;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: rgb(255, 255, 255);
}
.date {
    margin: auto 0;
}
.comment {
    font-size: 1.5rem;
}
</style>

<script>
import Title from "@/components/Title.vue"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "@/firebase.js"
import {
  getStorage,
  ref,
  listAll,
  getMetadata,
  getDownloadURL,
} from "@firebase/storage"

export default {
  components: {
    Title,
  },
  data() {
    return {
      datas: [],
      imgPaths: [],
      imgUrls: [],
    }
  },
  async created() {

    let num = 0
    const q = query(
      collection(db, "data"),
      where("type", "==", "tweet"),
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
      this.datas.push({
        date: repStr,
        comment: doc.data().comment,
        id: num,
      })
      num += 1
      console.log(num)
    })

    const storage = getStorage()
    const listRef = ref(storage, "image")
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          this.imgPaths.push(itemRef.fullPath)
        })
      })
      .then(async() => {
        //   this.imgPaths.forEach((path) => {
        //     console.log(path)
        //   const imgRef = ref(storage, `${path}`)
        //   getDownloadURL(imgRef).then((url) => {
        //     this.imgUrls.push(url)
        //   })
        // })
        for (const path of this.imgPaths) {
          console.log(path)
          const imgRef = ref(storage, `${path}`)
          await getMetadata(imgRef).then( (metadata) => {
            console.log(metadata.customMetadata.type)
            if (metadata.customMetadata.type === "memorandum") {
                 getDownloadURL(imgRef).then((url) => {
                this.imgUrls.push(url)
              })
            }
          })
        }
        console.log(this.imgPaths)
        console.log(this.imgUrls)
      })
  },
}
</script>
