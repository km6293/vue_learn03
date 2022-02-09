<template>
  <div>
    <div v-if="viewState == 0">
      <Post :data="data[i]" v-for="(a,i) in data" :key="i" />
    </div>

  <!-- 필터선택페이지 -->
    <div v-if="viewState == 1">
      <div class="upload-image" :class="uploadFilter" :style="`background-image: url(${uploadImg})`" ></div>
      <div class="filters">
        <FilterBox :uploadImg="uploadImg" :filter="filter[i]" v-for="(a,i) in filter" :key="i">
          <!-- 자식 -> 부모 에 종종 쓴다고 함, slot은 HTML 태그기 때문에 HTML 태그처럼만 사용가능함 -->
          <!-- slot 사용 시 -->
          <!-- 1-1. FilterBox에 slot 태그 생성 -->
          <!-- 1-2. 여기 FilterBox 사이에 말 생성 하면 됨 -->
          <!-- 2-1. <slot:자식데이터="자식데이터"> -->
          <!-- 2-2. 부모 : <template v-slot="작명"> {{작명.자식데이터}}  -->
          <!-- 여러개 사용 시 , slot name="a", <template v-slot:a>데이터1</template> -->
        </FilterBox>
      </div>
    </div>

  <!-- 글작성페이지 -->
    <div v-if="viewState == 2">
      <div class="upload-image" :class="uploadFilter" :style="`background-image: url(${uploadImg})`"></div>
      <div class="write">
        <textarea @input="$emit('contentsWrite',$event.target.value)" class="write-box">write!</textarea>
      </div>
    </div>
  </div>

</template>

<script>
import Post from './Post.vue'
import FilterBox from './components/FilterBox.vue'

export default {
  name : 'Container',
  data(){
    return{
      filter : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"
              ],
      filterName : '',
    }
  },
  components:{
    Post,
    FilterBox
  },
  props:{
    data: Array,
    viewState : Number,
    uploadImg : Array,
    uploadFilter : String
  },
}
</script>

<style>

  .upload-image{
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size : cover;
  }
  .filters{
  overflow-x:scroll;
  white-space: nowrap;
  }
  .filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  }
  .filters::-webkit-scrollbar {
  height: 5px;
  }
  .filters::-webkit-scrollbar-track {
  background: #f1f1f1; 
  }
  .filters::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 5px;
  }
  .filters::-webkit-scrollbar-thumb:hover {
  background: #555; 
  }
  .write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
  }

</style>