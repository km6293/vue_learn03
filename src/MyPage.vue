<template>
<div style="padding : 10px" >
  <h4>팔로워</h4>
  <input placeholder="?" />
  <div class="post-header" v-for="x in follower" :key="x">
    <div class="profile" :style="`background-image: url(${x.image})`"></div>
    <span class="profile-name">{{x.name}}</span>
  </div>
</div>
</template>

<script>

import { onMounted, ref } from 'vue'
import axios from 'axios';

export default {
  name:'myPage',
  setup(){
    let follower = ref([]);

    onMounted(()=>{
      axios.get('/follower.json').then(followerData=>{
        follower.value = followerData.data
      })
    })

    return { follower }
  }
}
</script>

<style>

</style>