<template>
  <div class="works">
    <div class="update-lists">
      <Title><template v-slot:front>WORKS</template><template v-slot:back>最近更新されたページ</template></Title>
      <div class="lists" v-for="data in datas" :key="data.id">
        <router-link :to="`${data.url}`" class="router-link">
          <List>
            <template v-slot:date>{{ data.date }}</template>
            <template v-slot:title>{{ data.title }}</template>
            <template v-slot:img>
              <video
                v-if="`${imgUrls[data.id]}`.includes('mp4')"
                :src="imgUrls[data.id]"
                class="img"
                loop
                autoplay
                muted
              ></video>
              <img v-else :src="imgUrls[data.id]" alt="画像" class="img" />
            </template>
            <template v-slot:comment>{{ data.comment }}</template>
          </List>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img {
  padding-top: 7.5%;
  width: 100%;
}
</style>

<script>
import Title from "@/components/Title.vue"
import List from "@/components/List.vue"
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
    List,
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
      where("type", "==", "works"),
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
        title: doc.data().title,
        comment: doc.data().comment,
        id: num,
        url:doc.data().url
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
            if (metadata.customMetadata.type === "works") {
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
