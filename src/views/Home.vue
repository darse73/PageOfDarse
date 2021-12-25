<template>
  <div class="home">
    <div class="update-lists">
      <div class="title">
        <img class="title-img" src="../assets/jerryfish.png" />
        <h2 class="title-text">最近更新されたページ</h2>
      </div>
      <div class="lists" v-for="data in datas" :key="data.id">
        <router-link :to="data.url" class="router-link">
        <List>
          <template v-slot:date>{{ data.date }}</template>
          <template v-slot:title>{{ data.title }}</template>
          <template v-slot:img><img :src="imgUrls[data.id]" alt="画像" class="img"></template>
          <template v-slot:comment>{{ data.comment }}</template>
        </List>
        </router-link>
      </div>

      <!-- <div class="list" v-for="list in lists" :key=""> -->

      <!-- </div> -->

      <!-- <div class="page">
        <div class="title">
          <h3>2021/10/4 電卓を改良しました！</h3>
        </div>

        <div class="comment">
          <p>
            改良して、一応満足な仕上がりにできた！<br />
            質問があったら、これからコメント欄を作るつもりなのでそこに書いてね！
          </p>
        </div>

        <img src="../assets/calculator2.png">
      </div>

      <div class="page">
        <div class="title">
          <h3>2021/10/1 hoverの使い方</h3>
        </div>

        <div class="comment">
          <p>hoverはおしゃれで汎用性が高いので、ぜひ覚えておきたいですね。</p>
        </div>

        <video src="../assets/hover.mp4" loop autoplay muted></video>
      </div>

      <div class="page">
        <div class="title">
          <h3>2021/9/21 PowerShell mv 使用時のエラー</h3>
        </div>

        <div class="comment">
          <p>
            PowerShellでmvを使おうとした時に、<br />
            「パス～へのアクセスが拒否されました。」というエラーが出て実行できませんでした。<br />
            今回僕が解決できた方法を書きます。
          </p>
        </div>

        <img src="../assets/mv_after.png">
      </div>

      <div class="page">
        <div class="title">
          <h3>2021/9/6 電卓を作ってみました！</h3>
        </div>

        <div class="comment">
          <p>
            使った言語はHTML,css,JavaScriptです。<br />
            初めてのjsは作動したらうれしいけど、作動するまでが長い！<br />
            学ぶべきことは多いんだなと実感することができたました。<br />
            正直仕組みをよくわかっていないところもあるので、そこは分かり次第MEMORUNDOMの方に載せていこうと思います！
          </p>
        </div>

        <img src="../assets/calcurator.png">
      </div>-->
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
.img {
  width: 100%;
}
/* .page {
  margin: 0 2rem 2rem 5rem;
  padding: 1rem;
  display: grid;
  grid-template-rows: 2rem 11rem;
  grid-template-columns: 23.4rem 23.4rem;
  background-color: rgb(255, 255, 255);
}
.page:hover {
  transform: scale(1.01);
  transition: all 0.3s ease 0s;
}
h3 {
  margin: 0;
}
.title {
  margin-bottom: 0.5rem;
  grid-row: 1;
  grid-column: 1;
}
.page img {
  width: 21rem;
  grid-row: 2;
  grid-column: 1;
}
.page video {
  width: 100%;
  height: 100%;
}
.comment {
  grid-row: 1/3;
  grid-column: 2;
  text-align: left;
  padding-left: 1rem;
} */
</style>

<script>
import List from "@/components/List.vue"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase.js"
import { getStorage, ref, listAll, getDownloadURL } from "@firebase/storage"

export default {
  components: {
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
    const querySnapshot = await getDocs(collection(db, "data"))
    querySnapshot.forEach((doc) => {
      this.datas.push({
        date: doc.data().date,
        title: doc.data().title,
        comment: doc.data().comment,
        url:doc.data().url,
        id: num,
      })
      num += 1
      console.log(num)
    })

    const storage = getStorage()
    const listRef = ref(storage, "image")
    listAll(listRef).then((res) => {
      res.items.forEach((itemRef) => {
        this.imgPaths.push(itemRef.fullPath)
      })
    })
    .then(() => {
      this.imgPaths.forEach((path) => {
      console.log(path)
      const imgRef = ref(storage, `${path}`)
      getDownloadURL(imgRef).then((url) => {
        this.imgUrls.push(url)
      })
    })

    console.log(this.imgPaths)

    })
  }
}
</script>
