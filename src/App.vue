<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="viewState == 1" @click="viewState+=1">Next</li>
      <li v-if="viewState == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>{{$store.state.age}}</h4>
  <button @click="$store.commit('changeAge', 5)">age</button>

  <Container :data="data" :uploadImg="uploadImg" :uploadFilter="uploadFilter" :viewState="viewState" @contentsWrite="contentsWrite = $event" />

  <button @click="more(buttonNum)">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>



</template>

<script>
import axios from 'axios'
import Container from './Container.vue'
import data from './assets/Data.js'


export default {
  name: 'App',
  data(){
    return{
      data : data,
      buttonNum : 0,
      viewState : 0,
      uploadImg : '',
      contentsWrite : '',
      uploadFilter : ''
    }
  },
  mounted(){
    this.emitter.on('throwFilter',(filter)=>{
      console.log(filter)
      this.uploadFilter = filter
    });
  },
  components:{
    Container
  },
  methods: {
    more(buttonNum){
      axios.get(`https://codingapple1.github.io/vue/more${buttonNum}.json`)
      .then((result) => {
        this.data.push(result.data)
      }).catch((err)=>{
        err
      })
      this.buttonNum += 1
    },
    upload(e){
      let file = e.target.files
      // 임시 URL 생김
      let url = URL.createObjectURL(file[0])
      this.uploadImg = url
      this.viewState = 1
    },
    publish(){
      const myContents = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImg,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.contentsWrite,
        filter: this.uploadFilter
      }
      this.data.unshift(myContents)
      this.viewState = 0
    },
  }

}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
